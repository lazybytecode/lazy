function injectStyles() {
  if (!document.getElementById("toggle-styles")) {
    const style = document.createElement("style");
    style.id = "toggle-styles";
    style.textContent = `

    .toggle {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;
      z-index: 900;
    }

    .slider::after
    {
      content: "🔆";
      aspect-ratio: 1;
      width: 2rem;
      position: absolute;
      top: 0.1rem;
      left: -1.3rem;
    }

    .toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: #ccc;
      border-radius: 24px;
      transition: .4s;
    }

    .slider:before {
      content: "";
      position: absolute;
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #484949;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

    `;
    document.head.appendChild(style);
  }
}

async function initToggle(el) {
  
  const tema = await import("/modules/themes.js");

  const input = el.querySelector("#toggle-input");

  if (input) {
    input.addEventListener("change", () => {
      tema.toggleTheme();
    });
  }
}

export async function render(el, props = {}) {
  
  injectStyles();

  const tema = await import("/modules/themes.js");

  const temas = localStorage.getItem("state");

  let temaAt = null;

  if (temas) {
    try {
      const parsed = JSON.parse(temas);
      temaAt = parsed?.theme ?? null;
    } catch (e) {
      console.warn("Erro ao fazer parse do localStorage:", e);
    }
  }

  const id = props.id ?? "toggle-default";

  el.innerHTML = `
    <label class="toggle" id="${id}">
      <input type="checkbox" id="toggle-input" ${ temaAt === "dark"  ? "checked" : ""}>
      <span class="slider"></span>
    </label>
  `;

  tema.applyTheme();

  const input = el.querySelector("#toggle-input");

  if (input) {
    input.checked = temaAt === "dark"; // 🔥 garante sync real
  }

  await initToggle(el);

}