function injectStyles() {
  if (!document.getElementById("estoque-styles")) {
    const style = document.createElement("style");
    style.id = "estoque-styles";
    style.textContent = `

    .terminal-container {
        width: 100%;
        max-width: 900px;
        margin: 20px auto;
        background: #0d1117;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 25px rgba(0,255,100,.15);
        border: 1px solid #1f2937;
    }

    .terminal-header {
        height: 40px;
        background: #161b22;
        display: flex;
        align-items: center;
        padding: 0 15px;
        gap: 8px;
        border-bottom: 1px solid #30363d;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .red { background: #ff5f56; }
    .yellow { background: #ffbd2e; }
    .green { background: #27c93f; }

    .title {
        color: #8b949e;
        font-size: 13px;
        margin-left: 10px;
    }

    #terminal {
        width: 100%;
        height: 400px;
        border: none;
        resize: none;
        outline: none;
        background: #0d1117;
        color: #00ff88;
        font-family: Consolas, Monaco, monospace;
        font-size: 14px;
        line-height: 1.6;
        padding: 20px;
        overflow-y: auto;
        caret-color: #00ff88;
    }

    .terminal-container::after {
        content: "▋";
        color: #00ff88;
        animation: blink .8s infinite;
        position: absolute;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
    
    `;
    document.head.appendChild(style);
  }
}

async function exibirJsonAnimado(json) {

      const texto = JSON.stringify(json, null, 2);

      terminal.value = '';

      for (let i = 0; i < texto.length; i++) {
          terminal.value += texto[i];
          terminal.scrollTop = terminal.scrollHeight;

          await new Promise(resolve =>
              setTimeout(resolve, Math.random() * 8)
          );
      }
  }

export async function render(el, props = {}, content, config, ctx = {}) {
    el.innerHTML = `
    <div class="terminal-container">
        <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="title">API Response</span>
        </div>

        <pre id="terminal"></pre>
    </div>
    `;

    const terminal = document.getElementById("terminal");

    // Exemplo de retorno da API
    const retornoApi = {
        status: true,
        message: "Sucesso",
        usuario: {
            id: 1,
            nome: "João Silva",
            email: "joao@email.com"
        },
        timestamp: new Date().toISOString()
    };

    exibirJsonAnimado(retornoApi);
    
}