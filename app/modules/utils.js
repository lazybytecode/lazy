/* =========================================================
   MENSAGEM
========================================================= */

export function mensagem( dados, local = "api-hint", redirect = null ) {

  const hint = document.getElementById(local)

  if (!hint) return

  hint.innerHTML = dados['message']

  hint.classList.add("show")

  clearTimeout(hint._timer)

  hint._timer = setTimeout(() => {

    hint.classList.remove("show")

    if ( redirect && !dados['erro'] ) {
      window.location.href = redirect
    }

  }, 3000)

}