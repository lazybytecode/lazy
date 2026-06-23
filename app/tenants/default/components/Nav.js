import { brand } from '/modules/brand.js'
import { navigate, withTenant } from '/router.js'

function injectStyles() {
  if (!document.getElementById("nav-styles")) {
    const style = document.createElement("style");
    style.id = "nav-styles";
    style.textContent = `

      /* ── Navegação ───────────────────────────────────────── */
      .nav {
        position: fixed; top: 0; left: 0; right: 0;
        height: var(--nav-height);
        z-index: 100;
        display: flex; align-items: center;
        transition: background var(--dur-slow) var(--ease-out),
                    backdrop-filter var(--dur-slow),
                    border-bottom-color var(--dur-slow);
        border-bottom: 1px solid transparent;
      }
      .nav.scrolled {
        background: rgba(7, 8, 13, 0.85);
        backdrop-filter: blur(24px) saturate(180%);
        -webkit-backdrop-filter: blur(24px) saturate(180%);
        border-bottom-color: var(--color-border);
      }
      .nav-inner {
        width: 100%; max-width: var(--max-width);
        margin: 0 auto; padding: 0 var(--space-6);
        display: flex; align-items: center; gap: var(--space-8);
      }
      .nav-logo {
        font-family: var(--font-display);
        font-size: var(--text-xl);
        font-weight: 800;
        letter-spacing: -0.02em;
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        flex-shrink: 0;
      }
      .nav-links {
        display: flex; align-items: center;
        gap: var(--space-6);
        list-style: none;
        margin-left: auto;
      }
      .nav-links a {
        font-size: var(--text-md);
        font-weight: 500;
        color: var(--color-text-muted);
        transition: color var(--dur-fast);
        position: relative;
      }
      .nav-links a::after {
        content: '';
        position: absolute; bottom: -2px; left: 0; right: 0;
        height: 1px;
        background: var(--color-accent);
        transform: scaleX(0);
        transition: transform var(--dur-med) var(--ease-spring);
      }
      .nav-links a:hover { color: var(--color-text); }
      .nav-links a:hover::after { transform: scaleX(1); }
      .nav-cta { margin-left: var(--space-4); }
      .nav-hamburger {
        display: none; flex-direction: column;
        gap: 5px; padding: var(--space-2);
        margin-left: auto;
      }
      .nav-hamburger span {
        display: block; width: 22px; height: 2px;
        background: var(--color-text);
        border-radius: var(--radius-full);
        transition: all var(--dur-med) var(--ease-out);
      }
      @media (max-width: 768px) {
        .nav-links, .nav-cta { display: none; }
        .nav-hamburger { display: flex; }
      }

      /* Mobile Menu */
      .mobile-menu {
        position: fixed; inset: 0; z-index: 99;
        background: var(--color-bg);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        gap: var(--space-6);
        transform: translateX(100%);
        transition: transform var(--dur-slow) var(--ease-out);
      }
      .mobile-menu.open { transform: translateX(0); }
      .mobile-menu a {
        font-family: var(--font-display);
        font-size: var(--text-3xl);
        font-weight: 700;
        color: var(--color-text);
        transition: color var(--dur-fast);
      }
      .mobile-menu a:hover { color: var(--color-accent); }

      #brand
      { 
          font-size: var( --logo-size );
          padding: 2rem;
      }
    
    `;
    document.head.appendChild(style);
  }
}

export async function navBar() {

    /* ── Mobile menu ── */
    const hamburger = document.getElementById('hamburger') || null;
    const mobileMenu = document.getElementById('mobileMenu') || null;
    const mobileLinks = document.querySelectorAll('.mobile-link') || null;
    let menuOpen = false;

    hamburger.addEventListener('click', function() {
        // Alterna entre abrir e fechar o menu
        menuOpen = !menuOpen; // Inverte o valor de menuOpen

        // Adiciona ou remove a classe 'open' no menu
        mobileMenu.classList.toggle('open', menuOpen);
        // Atualiza o estado de acessibilidade do botão
        hamburger.setAttribute('aria-expanded', menuOpen);
        // Bloqueia/desbloqueia o scroll da página
        document.body.style.overflow = menuOpen ? 'hidden' : '';

        // Animação do botão hamburger
        const spans = hamburger.querySelectorAll('span');
        if (menuOpen) {
            spans[0].style.cssText = 'transform:translateY(7px) rotate(45deg)';
            spans[1].style.cssText = 'opacity:0';
            spans[2].style.cssText = 'transform:translateY(-7px) rotate(-45deg)';
        } else {
            spans.forEach(s => s.style.cssText = '');
        }
    });

    // Fecha o menu ao clicar nos links
    mobileLinks.forEach(l => l.addEventListener('click', () => {
        if (menuOpen) {
            hamburger.click(); // Simula o clique no hamburger para fechar o menu
        }
    }));
    
}

export async function render( el, props = {}, content, config, ctx = {} ) {

    injectStyles()
    
    el.innerHTML = `
        <!-- ========== NAVEGAÇÃO ========== -->
        <nav class="nav" id="nav" role="navigation" aria-label="Menu principal">
            <div class="nav-inner">
            <h1>
                <a href="/" id="brand" class="nav-logo" aria-label="Home"></a>
            </h1>

            <ul id="navLinks" class="nav-links" role="list">
            </ul>

            <div class="nav-cta">
                <a href="javascript:;" id="comece" class="btn btn-primary">Comece grátis</a>
            </div>

            <div id="tswitch"></div>

            <button class="nav-hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
            </div>

        </nav>

        <!-- Mobile menu -->
        <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Menu mobile">
        </div>     
  `

  const brandEl = document.getElementById("brand")

  const marca = brand()[0]['marca']

  if (brandEl) {
    
    brandEl.innerHTML = marca
  }

  document.querySelector('#comece').addEventListener('click', function(){
    navigate(withTenant("/login"));
  })

  await navBar()

}

