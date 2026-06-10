import { CONFIG } from "/config.js"
import { router } from "/router.js"
import { enableDebug } from "/modules/debug.js"
import { cursor } from "/modules/cursor.js"
import { initState, subscribe, setState, getState } from "/store.js"
import { toggleTheme, applyTheme } from "/modules/themes.js"



async function initApp() {

  const app = document.getElementById("app")

  if (!app) {
    console.error("❌ #app não encontrado")
    return
  }

    router()  

    enableDebug(CONFIG.DEBUG) 

    await cursor()

    initState()

    if (!getState().theme) {
      setState({ theme: "light" })
    }

    await applyTheme()

    subscribe(() => {
        applyTheme()
    })

}

async function start(){

  await initApp().catch(console.error)

  /* =========================
      📦 SERVICE WORKER
  ========================= */

  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker.register("/sw.js")
  // }

}


/* =========================
   ⏳ DOM READY
========================= */

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', start)
} else {
  start()
}



