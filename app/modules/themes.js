import { getState, setState } from "/store.js"
import { getTenant, loadConfig } from "/router.js"

const channel = new BroadcastChannel("theme_channel");

/**
 * Alterna o tema entre dark/light
 */
export function toggleTheme() {
  
  const { theme } = getState();

  //console.log("ANTES:", theme);

  const next = theme === "dark" ? "light" : "dark";

  if (theme === next) return;

  setState({ theme: next });

  //console.log("DEPOIS:", getState().theme);

  applyTheme();

  // 🔥 sincroniza outras abas
  channel.postMessage({ theme: next });

}

/**
 * Aplica o tema no DOM
 */
let applyingTheme = false
let themeDepth = 0

export async function applyTheme() {

  if (applyingTheme) return

  // 🔥 evita loop infinito mesmo com triggers indiretos
  if (themeDepth > 2) {
    console.warn("🚫 applyTheme bloqueado por recursão")
    return
  }

  applyingTheme = true
  themeDepth++

  try {
    
    const { theme } = getState() 

    const tenant = getTenant()

    const themes = await loadConfig()

    const root = document.documentElement

    const themeConfig = themes?.theme?.[theme]

    if (!themeConfig) return

    document.documentElement.dataset.tenant = tenant

    root.setAttribute("data-theme", theme)

    root.style.transition = "background-color 0.3s ease, color 0.3s ease"

    Object.entries(themeConfig).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })

    setTimeout(() => {
      root.style.transition = ""
    }, 400)

  } finally {
    applyingTheme = false
    themeDepth--
  }
}

// export async function applyTheme() {
  
//   const { theme } = getState();

//   const themes = await loadConfig()

//   const root = document.documentElement;

//   const themeConfig = themes['theme'][theme];

//   if (!themeConfig) return;

//   const tenant = getTenant()

//   document.documentElement.dataset.tenant = tenant

//   // 🔥 aplica atributos
//   root.setAttribute("data-theme", theme);

//   // 🔥 transição suave
//   root.style.transition = "background-color 0.3s ease, color 0.3s ease";

//   // 🔥 aplica TODAS as variáveis do JSON como CSS variables
//   Object.entries(themeConfig).forEach(([key, value]) => {
//     root.style.setProperty(`--${key}`, value);
//   });

//   // 🔥 limpa transition depois
//   setTimeout(() => {
//     root.style.transition = "";
//   }, 400);
// }

/**
 * Inicialização do sistema de tema
 */

export function systemTheme() {

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const current = getState().theme;

  const next = prefersDark ? "dark" : "light";

  if (!current) {

    setState({ theme: next });
    
  }

  applyTheme();
}

/**
 * 🔥 escuta mudanças de outras abas
 */
channel.onmessage = (event) => {

  const { theme } = event.data;

  if (!theme) return;

  setState({ theme });

  applyTheme();

};