export function render(el, props = {}, content, config, ctx = {}) {

    el.innerHTML = ""

    el.innerHTML = `
        <div id="topbar"></div>
        <div id="kpi" class="g4" style="margin-bottom:14px;"> </div>
        <div id="cards" class="g21" style="margin-bottom:14px;"> </div>
    `

    return {
      slots: {
        topbar: el.querySelector("#topbar"),
        kpi: el.querySelector("#kpi"),
        cards: el.querySelector("#cards")
      }
    }

}