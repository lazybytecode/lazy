export function render(el, props = {}, content, config, ctx = {}) {

  el.innerHTML = `
    <section id="topo"></section>
    <section id="hero"></section>
    <section id="cta"></section>
  `

  return {
    slots: {
      topo: el.querySelector("#topo"),
      hero: el.querySelector("#hero"),
      cta: el.querySelector("cta")
    }
  }

}