let DEBUG = true

export function enableDebug(state = true) {
  DEBUG = state
}

export function isDebug() {
  return DEBUG
}

/* =========================
   🎯 MARCAR SLOT
========================= */

export function markSlot(el, name) {
  if (!DEBUG || !el) return

  el.style.outline = "2px dashed #00f"
  el.style.position = "relative"

  const tag = document.createElement("div")
  tag.textContent = `slot: ${name}`

  tag.style.position = "absolute"
  tag.style.top = "0"
  tag.style.left = "0"
  tag.style.fontSize = "10px"
  tag.style.background = "#00f"
  tag.style.color = "#fff"
  tag.style.padding = "2px 4px"
  tag.style.zIndex = "9999"

  el.appendChild(tag)
}

/* =========================
   🧩 MARCAR COMPONENTE
========================= */

export function markComponent(el, name, position) {
  if (!DEBUG || !el) return

  el.style.outline = "2px solid #0a0"
  el.style.position = "relative"

  const tag = document.createElement("div")
  tag.textContent = `🧩 ${name} → ${position}`

  tag.style.position = "absolute"
  tag.style.bottom = "0"
  tag.style.right = "0"
  tag.style.fontSize = "10px"
  tag.style.background = "#0a0"
  tag.style.color = "#fff"
  tag.style.padding = "2px 4px"
  tag.style.zIndex = "9999"

  el.appendChild(tag)
}

/* =========================
   ❌ ERRO VISUAL
========================= */

export function showError(message) {
  if (!DEBUG) return

  const box = document.createElement("div")

  box.innerHTML = `❌ ${message}`

  box.style.position = "fixed"
  box.style.bottom = "10px"
  box.style.left = "10px"
  box.style.background = "#f00"
  box.style.color = "#fff"
  box.style.padding = "10px"
  box.style.zIndex = "99999"
  box.style.fontSize = "12px"

  document.body.appendChild(box)

  setTimeout(() => box.remove(), 5000)
}