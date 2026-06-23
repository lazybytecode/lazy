function injectStyles() {
  if (!document.getElementById("alert-styles")) {
    const style = document.createElement("style");
    style.id = "alert-styles";
    style.textContent = `

      /* ── Alert ── */
      .alert{border-radius:var(--r);padding:12px 18px;display:flex;align-items:center;gap:10px;font-size:12px;margin-bottom:20px;}
      .alert-warn{background:rgba(243,156,18,.07);border:1px solid rgba(243,156,18,.2);color:var(--amber);}
      .alert-err{background:rgba(255,107,53,.07);border:1px solid rgba(255,107,53,.2);color:var(--warm);}
      .alert-ok{background:rgba(0,229,160,.07);border:1px solid rgba(0,229,160,.2);color:var(--accent);}
    
    `;
    document.head.appendChild(style);
  }
}

export function render(el, props = {}, content, config, ctx = {}) {

    if( props.mensagem == "" ){
      return
    }

    injectStyles()
    
    el.innerHTML = `
      <div class="alert alert-warn au" style="animation-delay:.05s">
        <span style="font-size:15px">${ props.icon }</span>
        <span><strong>${ props.mensagem }</span>
        <span class="pill" style="margin-left:auto;color:var(--amber);border-color:rgba(243,156,18,.3);cursor:pointer" onclick="${ props.action }">${ props.btn_txt } →</span>
      </div>
    `

}