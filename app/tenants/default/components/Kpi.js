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

  let kpis = []

  const data = props || {}

  const cores = data.cores;

  Object.values(data.item).forEach((element, index ) => {
    
    const cor = cores[index % cores.length];
    
    kpis.push(`
      <div class="kpi au" style="--c:var(--${ cor });animation-delay:.08s">
        <div class="kpi-lbl">${element.label}</div>
        <div class="kpi-val" style="color:var(--accent)">
          ${element.value}
        </div>
        <div class="kpi-sub">
          <span class="${element.type}">${element.change}</span> vs mês ant.
        </div>
      </div>
    `)
});
    el.innerHTML = kpis.join('');
}