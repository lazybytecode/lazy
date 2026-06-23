function injectStyles() {
  if (!document.getElementById("topbar-styles")) {
    const style = document.createElement("style");
    style.id = "topbar-styles";
    style.textContent = `

        /* ── Top bar ── */
        .topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;}
        .topbar-left h1{font-family:var(--font-d);font-size:22px;font-weight:700;letter-spacing:-.02em;}
        .topbar-left p{color:var(--muted);font-size:12px;margin-top:2px;}
        .topbar-right{display:flex;gap:8px;align-items:center;}
        .pill{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:var(--rfull);border:1px solid var(--border);background:var(--surface); font-size:12px;color:var(--muted);cursor:pointer;transition:all .18s;font-family:var(--font);}
        .pill:hover{border-color:rgba(0,229,160,.25);color:var(--text);}
        .pill-p{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#060a0f;border-color:transparent;font-weight:700;}
        .pill-p:hover{transform:translateY(-1px);}
        .dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:pulse 2s infinite;display:inline-block;vertical-align:middle;}  
   
    `;
    document.head.appendChild(style);
  }
}

export function render(el, props = {}, content, config, ctx = {}) {

        const data = props

        const query = ctx?.query || {}
        const active = query.sidebar

        injectStyles()

        el.innerHTML = `    
            <div class="topbar au">
                <div class="topbar-left"><h1>${active}</h1><p><span class="dot"></span> Atualizado há 2 min · Abril 2026</p></div>
                <div class="topbar-right">
                <div class="tabs" style="margin-bottom:0">
                    <div class="tab on">Mês</div><div class="tab">Trim.</div><div class="tab">Ano</div>
                </div>
                <span class="pill pill-p">+ ${ data.btn_txt }</span>
                </div>
            </div>
        `

}

/*

    const query = ctx?.query || {}
    const active = query.sidebar

    // 👇 só renderiza se estiver ativo
    if (active !== "estoque") {
        el.innerHTML = ""
        return
    }

    // 🧹 evita duplicação em re-render parcial
    el.innerHTML = ""

    // CONTAINER
    const container = document.createElement("div")
    container.classList.add("estoque-container")

    // TÍTULO
    const title = document.createElement("h2")
    title.textContent = "Estoque"
    container.appendChild(title)

    // LISTA MOCK (pode vir do config futuramente)
    const lista = document.createElement("ul")

    const produtos = [
        { nome: "Notebook", qtd: 12 },
        { nome: "Mouse", qtd: 45 },
        { nome: "Teclado", qtd: 20 }
    ]

    produtos.forEach(p => {
        const li = document.createElement("li")
        li.textContent = `${p.nome} — ${p.qtd} unidades`
        lista.appendChild(li)
    })

    container.appendChild(lista)

    // BOTÃO (exemplo de interação)
    const btn = document.createElement("button")
    btn.textContent = "Atualizar estoque"

    btn.addEventListener("click", () => {
        console.log("Atualizando estoque...")
    })

    container.appendChild(btn)

    el.appendChild(container)
}*/