import { CONFIG } from "../config.js"

// =====================================================
// CONFIG
// =====================================================

const SERVER_SIGN_PUBLIC_PEM = CONFIG.PUBLIC_KEY

const MAX_CLOCK_SKEW_MS = 60 * 60 * 1000 // 1h (apenas fallback)

// =====================================================
// CACHE
// =====================================================

const KEY_CACHE = new Map()

// =====================================================
// BASE64 (PADRÃO ÚNICO - SEM URLSAFE)
// =====================================================

function arrayBufferToBase64(buffer) {
  let binary = ""
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

function base64ToBytes(b64) {
  b64 = b64.replace(/-/g, "+").replace(/_/g, "/")
  const binary = atob(b64)
  return Uint8Array.from(binary, c => c.charCodeAt(0))
}

// =====================================================
// IMPORT PUBLIC KEY (RSA-PSS VERIFY)
// =====================================================

async function importServerPublicKey() {
    const pem = CONFIG.PUBLIC_KEY
    .replace(/\\n/g, "\n")
    .replace("-----BEGIN PUBLIC KEY-----", "")
    .replace("-----END PUBLIC KEY-----", "")
    .replace(/\s/g, "")

  const bytes = base64ToBytes(pem)

  return crypto.subtle.importKey(
    "spki",
    bytes.buffer,
    {
      name: "RSA-PSS",
      hash: "SHA-256"
    },
    false,
    ["verify"]
  )
}

function importECDHPublicKey(server_pub) {
  const bytes = base64ToBytes(server_pub)
  return crypto.subtle.importKey(
    "spki",
    bytes.buffer,
    {
      name: "ECDH",
      namedCurve: "P-256"
    },
    false,
    []
  )
}

// =====================================================
// CANONICAL MESSAGE (espelha Python canonical_message())
// =====================================================

function canonicalMessage(payload, tenantId) {
  return [
    payload.v,
    payload.timestamp,
    payload.server_pub,
    payload.iv,
    payload.ciphertext,
    tenantId
  ].join("|")
}

// =====================================================
// SIGNATURE VERIFY
// =====================================================

function assertDefined(obj, keys) {
  for (const k of keys) {
    if (!obj || obj[k] === undefined || obj[k] === null) {
      throw new Error(`Campo ausente: ${k}`)
    }
  }
}

async function verifySignature(payload, publicKey, tenantId) {
  assertDefined(payload, ["v", "timestamp", "server_pub", "iv", "ciphertext", "signature"])

  // BUG CORRIGIDO: a versão anterior chamava buildMessage() (inexistente)
  // E depois usava { name: "ECDSA" } em vez de { name: "RSA-PSS" }.
  // Agora usa canonicalMessage() e RSA-PSS com saltLength: 32,
  // espelhando exatamente o sign_response() do Python.
  const message = new TextEncoder().encode(canonicalMessage(payload, tenantId))
  const signatureBytes = base64ToBytes(payload.signature)

  const valid = await crypto.subtle.verify(
    { name: "RSA-PSS", saltLength: 32 },
    publicKey,
    signatureBytes,
    message
  )

  if (!valid) {
    throw new Error("invalid_signature")
  }
}

// =====================================================
// CRIA CHAVES CLIENTE (ECDH)
// =====================================================

export async function cria_chaves(tenantId) {
  const clientKeys = await crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-256"
    },
    true,
    ["deriveKey", "deriveBits"]
  )

  const clientPub = await crypto.subtle.exportKey("spki", clientKeys.publicKey)

  return {
    clientKeys,
    clientPubB64: arrayBufferToBase64(clientPub)
  }
}

// =====================================================
// DECRYPT CORE
// =====================================================

export async function decrypt_response(payload, clientKeys, tenantId) {

  if (!clientKeys || !clientKeys.privateKey) {
    throw new Error("clientKeys_nao_inicializado")
  }

  const { v, timestamp, server_pub, iv, ciphertext, signature } = payload

  if (!server_pub || !iv || !ciphertext || !signature || !v || !timestamp) {
    throw new Error("payload_incompleto")
  }

  // =====================================================
  // 1. VERIFY SIGNATURE (RSA-PSS)
  // =====================================================

  const signKey = await importServerPublicKey()

  // BUG CORRIGIDO: usava verifySignature() com ECDSA internamente (já corrigida),
  // mas o bloco inline abaixo também estava duplicado e era redundante.
  // Agora usa apenas verifySignature() unificado.
  await verifySignature(payload, signKey, tenantId)

  // =====================================================
  // 2. ECDH SHARED SECRET
  // =====================================================

  const serverPubKey = await importECDHPublicKey(server_pub)

  const sharedSecret = await crypto.subtle.deriveBits(
    {
      name: "ECDH",
      public: serverPubKey
    },
    clientKeys.privateKey,
    256
  )

  // =====================================================
  // 3. HKDF
  // =====================================================

  const enc = new TextEncoder()

  const salt = await crypto.subtle.digest("SHA-256", enc.encode(tenantId))

  const info = enc.encode(`handshake-${tenantId}`)

  const hkdfKey = await crypto.subtle.importKey(
    "raw",
    sharedSecret,
    "HKDF",
    false,
    ["deriveKey"]
  )

  const aesKey = await crypto.subtle.deriveKey(
    {
      name: "HKDF",
      hash: "SHA-256",
      salt,
      info
    },
    hkdfKey,
    {
      name: "AES-GCM",
      length: 256
    },
    false,
    ["decrypt"]
  )

  // =====================================================
  // 4. DECRYPT AES-GCM
  // =====================================================

  const decrypted = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: base64ToBytes(iv)
    },
    aesKey,
    base64ToBytes(ciphertext)
  )

  return JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(decrypted)))
}