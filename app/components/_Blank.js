function injectStyles() {
  if (!document.getElementById("estoque-styles")) {
    const style = document.createElement("style");
    style.id = "estoque-styles";
    style.textContent = `

    
    `;
    document.head.appendChild(style);
  }
}

export function render(el, props = {}, content, config, ctx = {}) {
    el.innerHTML = `_Blank`;

    return {
      slots: {
        logo: el.querySelector("#logo"),
        sub: el.querySelector("#slogan"),
        icon: el.querySelector("#logo-icon")
      }
    }
    
}