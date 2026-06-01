export function render(el, props = {}, content, config, ctx = {}) {

    // 🧹 evita duplicação em re-render parcial
    el.innerHTML = ""

    el.innerHTML = `
        Telas/estoque
    `

}