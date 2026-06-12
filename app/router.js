import { CONFIG } from "./config.js"

import { cria_chaves, decrypt_response } from "./modules/crypto.js"

export { getTenant, loadConfig, navigate, withTenant, fetchJSON, getAPI, loadComponent, fileToBase64, mostrarToast, sha256File }

function getAPI() {
  return CONFIG.ENVIRONMENT === "development"
    ? CONFIG.API_URL_LOCAL
    : CONFIG.API_URL
}

// =====================================================
// TENANT RESOLUTION
// =====================================================

const tenant = getTenant()

function getTenant() {
  const host = location.hostname

  if (
    host.includes("localhost") ||
    /^\d+\.\d+\.\d+\.\d+$/.test(host)
  ) {
    return getTenantFromPath()
  }

  const parts = host.split(".")

  if (parts.length > 2) {
    const sub = parts[0]
    if (["www", "app"].includes(sub)) {
      return getTenantFromPath()
    }
    return sub
  }

  return getTenantFromPath()
}

function getTenantFromPath() {
  const parts = location.pathname.split("/")
  if (parts[1] === "t" && parts[2]) return parts[2]
  throw new Error(
    "Tenant não informado na URL"
  )
  return null
  //return "default"
}

if (!tenant) {
  throw new Error("Tenant inválido")
}

// =====================================================
// CONFIG LOADER
// =====================================================

let config

const STORAGE_KEY = (tenant) => `theme_config_${tenant}`

async function fetchJSON(caminho, tenant = "default", dados = {}) {

  const { clientKeys, clientPubB64 } = await cria_chaves(tenant)

  const timestamp = Math.floor(Date.now() / 1000)

  const url = `${getAPI()}/api/${CONFIG.VERSION}/${caminho}`

  const controller = new AbortController()

  const timeout = setTimeout(() => controller.abort(), 10000)

  try {
    const res = await fetch(url, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "tenant": tenant
      },
      body: JSON.stringify({
        v: CONFIG.VERSION,
        timestamp,
        client_pub: clientPubB64,
        dados,
        tenant_id: tenant,
      })
    })

    if (!res.ok) {
      let errMsg = `Erro HTTP ${res.status}`
      try {
        const errJson = await res.json()
        errMsg = errJson?.error || errMsg
        console.log(errMsg)
      } catch {}
      throw new Error(errMsg)
    }

    let json = null

    try {

      json = await res.json()

      if (!json || json.error) {
        throw new Error(json?.error || "Resposta inválida da API")
      }

      if (!json.server_pub || !json.ciphertext || !json.signature) {
        throw new Error("Payload criptográfico incompleto")
      }
    } catch {
      throw new Error("Resposta inválida da API")
    }

    if (!json?.server_pub || !json?.ciphertext || !json?.signature) {
      throw new Error("Payload criptográfico incompleto")
    }

    // BUG CORRIGIDO: retorna clientKeys junto com o payload
    // para que loadConfig() possa usar as mesmas chaves no decrypt_response().
    // A versão anterior descartava clientKeys aqui e gerava um novo par em
    // loadConfig() via cria_chaves(), produzindo um shared secret diferente
    // e fazendo o AES-GCM falhar silenciosamente.
    return {
      payload: json,
      clientKeys,
      clientPubB64,
      tenantId: tenant
    }

  } catch (e) {
    if (e.name === "AbortError") {
      throw new Error("Timeout de conexão com API")
    }
    throw e
  } finally {
    clearTimeout(timeout)
  }
}

async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result.split(",")[1]);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function sha256File(file) {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);

    return [...new Uint8Array(hashBuffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// =====================================================
// LOAD CONFIG
// =====================================================

const CACHE_TTL_MS = 5 * 60 * 1000

let loadingConfigPromise = null

async function loadConfig() {

  const res = await fetchJSON("themes", tenant)

  const dec = await decrypt_response(
    res.payload,
    res.clientKeys,
    res.tenantId
  )

  config = normalizeConfig({
    theme: dec.theme || {},
    routes: dec.routes || [],
    content: dec.content || {}
  })

  return config
}

// =====================================================
// HELPERS
// =====================================================

function normalizeConfig(cfg = {}) {
  return {
    theme: cfg.theme || {},
    routes: Array.isArray(cfg.routes) ? cfg.routes : [],
    content: cfg.content || {},
    __base: cfg.__base || null
  }
}

function mergeConfig(base, override) {
  const out = { ...base }

  for (const key in override) {
    const b = base[key]
    const o = override[key]

    if (isObject(b) && isObject(o)) {
      out[key] = mergeConfig(b, o)
      continue
    }

    if (Array.isArray(o)) {
      out[key] = mergeArray(b, o, key)
      continue
    }

    out[key] = o
  }

  return out
}

function isObject(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v)
}

function mergeArray(base = [], override = [], key) {
  if (key === "routes") return override

  if (key === "layout") {
    const map = new Map()
    base.forEach(item => { if (item.id) map.set(item.id, item) })
    override.forEach(item => {
      if (item.id && map.has(item.id)) {
        map.set(item.id, { ...map.get(item.id), ...item })
      } else if (item.id) {
        map.set(item.id, item)
      } else {
        map.set(Symbol(), item)
      }
    })
    return Array.from(map.values())
  }

  return override.length ? override : base
}

// =====================================================
// CSS LOADER
// =====================================================

async function loadTenantCSS() {
  const id = "tenant-style"

  document.getElementById(id)?.remove()

  const tenantCSS = `/tenants/${tenant}/theme.css`

  const res = await fetch(tenantCSS, {
    method: "HEAD"
  })

  if (!res.ok) {
    throw new Error(
      `CSS do tenant '${tenant}' não encontrado`
    )
  }

  const link = document.createElement("link")
  link.id = id
  link.rel = "stylesheet"
  link.href = tenantCSS

  document.head.appendChild(link)
}

// async function loadTenantCSS() {
  
//   const id = "tenant-style"
  
//   document.getElementById(id)?.remove()

//   const link = document.createElement("link")
//   link.id = id
//   link.rel = "stylesheet"

//   const tenantCSS = `/tenants/${tenant}/theme.css`
//   const defaultCSS = `/tenants/default/theme.css`

//   try {
//     const res = await fetch(tenantCSS, { method: "HEAD" })
//     link.href = res.ok ? tenantCSS : ""
//   } catch {
//     link.href = defaultCSS
//   }

//   document.head.appendChild(link)
// }

// =====================================================
// INIT
// =====================================================

try {
  await loadConfig()
  await loadTenantCSS()
} catch (e) {
  console.error("Falha ao carregar config:", e)
  document.body.innerHTML = `
    <p style="color:red;font-family:sans-serif;padding:2rem">
      Falha ao carregar a aplicação. Tente recarregar a página.
    </p>
  `
  throw e
}

// =====================================================
// ROUTER
// =====================================================

function withTenant(path) {
  if (tenant === "default") return path
  return `/t/${tenant}${path}`
}

function applyTheme(theme = "light") {
  const root = document.documentElement
  const t = config.theme?.[theme]
  if (!t) return applyTheme("light")
  Object.entries(t).forEach(([k, v]) => {
    root.style.setProperty(`--${k}`, v)
  })
}

import { getState } from "/store.js"

const app = document.getElementById("app")

let currentView = null

function getQueryParams() {
  const url = new URL(location.href)
  const q = {}
  url.searchParams.forEach((v, k) => { q[k] = v })
  return q
}

function navigate(url) {
  history.pushState({}, "", url)
  router()
}

function match(path) {
  for (const r of config.routes) {
    const keys = []

    const pattern = r.path.replace(/:([^/]+)/g, (_, k) => {
      keys.push(k)
      return "([^/]+)"
    })

    const m = path.match(
      new RegExp("^" + pattern + "/?$")
    )

    if (!m) continue

    const params = {}
    keys.forEach((k, i) => {
      params[k] = m[i + 1]
    })

    return { r, params }
  }
}

async function safeImport(path) {
  try {
    return await import(path)
  } catch (e) {
    console.error("IMPORT ERROR:", path, e)
    return null
  }
}

const cache = {}

async function loadComponent(name) {
  if (cache[name]) return cache[name]

  // const paths = [
  //   `/tenants/${tenant}/components/${name}.js`,
  //   `/tenants/default/components/${name}.js`,
  //   `/components/${name}.js`
  // ]
  const paths = [
    `/tenants/${tenant}/components/${name}.js`
  ]

  for (const p of paths) {
    const mod = await safeImport(p)
    if (mod) {
      cache[name] = mod
      return mod
    }
  }

  throw new Error(
    `Componente '${name}' não encontrado no tenant '${tenant}'`
  )

  console.warn(`[Component not found] ${name}`)
  return { render: () => {} }
}

async function loadView(view) {
  
  // const paths = [
  //   `/tenants/${tenant}/views/${view}.js`,
  //   `/tenants/default/views/${view}.js`,
  //   `/views/${view}.js`
  // ]
  const paths = [
    `/tenants/${tenant}/views/${view}.js`
  ]

  for (const p of paths) {
    const mod = await safeImport(p)
    if (mod) return mod
  }

  throw new Error(
    `View '${view}' não encontrada no tenant '${tenant}'`
  )

  console.warn(`[View not found] ${view}`)
  return { render: () => {} }
}

function getPageConfig(view) {
  return config.content?.[view] || {}
}

function getPageConfigHeranca(view) {
  const currentPage = config.content?.[view]
  
  const basePage = config.__base?.content?.[view]

  if (currentPage) {
    if (tenant === "default") return currentPage
    return mergeConfig(basePage || {}, currentPage || {})
  }

  return basePage || {}
}

async function renderContentUI(view, config, route, ctx = {}) {
  const page = getPageConfig(view)
  const layout = page.layout || []

  for (const item of layout) {
    if (ctx.isUpdate && item.static) continue

    const [type, target] = (item.type || "append:#content").split(":")

    let parent = null

    if (type === "append") {
      parent = document.querySelector(target || "#content")
    }

    if (type === "slot") {
      parent = document.querySelector(`#${target}`)
      if (parent && !item.multiple) parent.innerHTML = ""
    }

    if (!parent) continue

    const mount = item.multiple
      ? (() => {
          const el = document.createElement("div")
          el.style.display = "contents"
          parent.appendChild(el)
          return el
        })()
      : parent

    let componentName = item.component

    if (item.resolver?.type === "route") {
      
      const key = location.pathname
        .replace(`/t/${tenant}`, "")
        .replace(/^\//, "")

      if (key && item.resolver.map?.[key]) {
        componentName = item.resolver.map[key]
      }
    }

    const mod = await loadComponent(componentName)
    if (!mod) continue

    const props = {
      ...(config.content?.[view]?.props || {}),
      ...(item.props || {}),
      ...(ctx || {})
    }

    await mod.render?.(mount, props, config.content, config, ctx)
  }
}

async function render(view, route, params, ctx) {
  const mod = await loadView(view)

  app.classList.add("fade-out")
  await new Promise(r => setTimeout(r, 100))
  app.innerHTML = ""

  await mod.render(app, params, config.content, config, ctx)

  await new Promise(r => requestAnimationFrame(r))

  await renderContentUI(view, config, route, ctx)

  app.classList.remove("fade-out")
  app.classList.add("fade-in")
}

export async function router() {
  if (!config || !config.routes) {
    console.error("Router chamado sem config válida")
    return
  }

  if (config.routes.length === 0) {
    console.error("Nenhuma rota configurada — abortando router para evitar loop")
    return
  }

  let path = location.pathname

  if (path.startsWith(`/t/${tenant}`)) {
    path = path.replace(`/t/${tenant}`, "") || "/"
  }

  // remove barra final
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1)
  }

  const matchResult = match(path)

  if (!matchResult) {
    const base = tenant !== "default" ? `/t/${tenant}` : ""
    const fallback = base + "/"

    if (location.pathname === fallback) {
      console.error("Rota '/' não encontrada no config — verifique as rotas cadastradas")
      return
    }

    //return navigate(fallback)
    if (!matchResult) {
      console.error(`Rota não encontrada: ${path}`)

      currentView = "404"

      await render(
        "404",
        {},
        {},
        {
          path
        }
      )

      return
    }
    
  }

  const { r, params } = matchResult
  const user = getState().user

  if (r.roles && !r.roles.includes(user?.role)) {
    return navigate(withTenant("/login"))
  }

  document.title = r.title || "App"

  const ctx = {
    params,
    query: getQueryParams()
  }

  const view = r.view

  const routeKey = `${view}:${JSON.stringify(params)}:${location.search}`

  // if (currentView === routeKey) {
  //   return renderContentUI(view, config, r, {
  //     ...ctx,
  //     isUpdate: true
  //   })
  // }

  currentView = routeKey

  if (currentView === view) {
    return renderContentUI(view, config, r, { ...ctx, isUpdate: true })
  }

  currentView = view

  await render(view, r, params, ctx)

  

  
  // await render(view, r, params, ctx)
}

function mostrarToast(mensagem, posicao = "top-right", quem) {

    const toast = document.getElementById( quem );

    toast.textContent = mensagem;

    // Remove posições anteriores
    toast.className = "toast";

    // Define nova posição
    toast.classList.add(posicao);

    // Reinicia animação
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
}

// =====================================================
// EVENTS
// =====================================================

window.addEventListener("popstate", router)

document.addEventListener("click", e => {
  const link = e.target.closest("a")
  if (!link) return

  const url = new URL(link.href)
  if (url.origin !== location.origin) return

  e.preventDefault()
  navigate(url.pathname + url.search)
})