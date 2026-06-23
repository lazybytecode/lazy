function injectStyles() {
  if (!document.getElementById("hero-styles")) {
    const style = document.createElement("style");
    style.id = "hero-styles";
    style.textContent = `

    /* ── Hero ───────────────────────────────────────── */
    .hero {
    position: relative;
    min-height: 100vh;
    display: flex; 
    align-items: center;
    padding-top: var(--nav-height);
    overflow: hidden;
    }
    .hero-bg {
    position: absolute; inset: 0;
    background: var(--gradient-hero);
    z-index: 0;
    }
    /* Grade decorativa */
    .hero-grid {
    position: absolute; inset: 0; z-index: 0;
    background-image:
        linear-gradient(var(--color-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 80%);
    }
    /* Orbs flutuantes */
    .hero-orb {
    position: absolute; border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
    }
    .hero-orb-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(var(--color-accent-rgb), 0.15) 0%, transparent 70%);
    top: -100px; left: 50%; transform: translateX(-50%);
    animation: float-orb1 8s ease-in-out infinite;
    }
    .hero-orb-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(var(--color-accent-2-rgb), 0.12) 0%, transparent 70%);
    top: 20%; right: -100px;
    animation: float-orb2 10s ease-in-out infinite;
    }
    .hero-orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%);
    bottom: 10%; left: -50px;
    animation: float-orb3 12s ease-in-out infinite;
    }
    @keyframes float-orb1 {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(-30px); }
    }
    @keyframes float-orb2 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50%       { transform: translateY(-20px) rotate(5deg); }
    }
    @keyframes float-orb3 {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(20px); }
    }

    .hero-content {
    position: relative; z-index: 1;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--space-24) var(--space-6) var(--space-16);
    display: flex; flex-direction: column; align-items: center;
    text-align: center;
    gap: var(--space-6);
    margin-top: 0;

    @media screen and (max-width: 580px ) {
        margin-top: -15rem;
    }
    }
    .hero-badge { animation: fade-up var(--dur-slow) var(--ease-out) both; }
    .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 7vw, var(--text-7xl));
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    max-width: 780px;
    animation: fade-up var(--dur-slow) var(--ease-out) 100ms both;
    }
    .hero-sub {
    font-size: clamp(var(--text-base), 2.5vw, var(--text-xl));
    color: var(--color-text-muted);
    max-width: 560px;
    font-weight: 300;
    line-height: 1.7;
    animation: fade-up var(--dur-slow) var(--ease-out) 200ms both;
    }
    .hero-ctas {
    display: flex; flex-wrap: wrap; gap: var(--space-3);
    justify-content: center;
    animation: fade-up var(--dur-slow) var(--ease-out) 300ms both;
    }
    .hero-social-proof {
    display: flex; align-items: center; gap: var(--space-4);
    flex-wrap: wrap; justify-content: center;
    animation: fade-up var(--dur-slow) var(--ease-out) 400ms both;
    }
    .avatar-stack {
    display: flex;
    }
    .avatar {
    width: 36px; height: 36px; border-radius: 50%;
    border: 2px solid var(--color-bg);
    background: var(--gradient-accent);
    display: flex; align-items: center; justify-content: center;
    font-size: var(--text-xs);
    font-weight: 700;
    color: var(--color-bg);
    margin-left: -8px;
    }
    .avatar:first-child { margin-left: 0; }
    .social-text { font-size: var(--text-sm); color: var(--color-text-muted); }
    .social-text strong { color: var(--color-text); }
    
    `;
    document.head.appendChild(style);
  }
}


export async function render(el, props={}) {

    injectStyles()

  el.innerHTML = `
    <!-- ========== HERO ========== -->
    <section class="hero" id="${props.id}" aria-label="Apresentação principal">
        <div class="hero-bg"></div>
        <div class="hero-grid"></div>
        <div class="hero-orb hero-orb-1 parallax-slow" data-speed="0.3"></div>
        <div class="hero-orb hero-orb-2 parallax-med" data-speed="0.5"></div>
        <div class="hero-orb hero-orb-3 parallax-fast" data-speed="0.7"></div>

        <div class="hero-content">
            <div class="badge hero-badge">${props.upline}</div>

            <h1 class="hero-title">
                ${props.titulo}
            </h1>

            <p class="hero-sub">
                ${props.sub}
            </p>

            <div class="hero-ctas">
                <a href="#pricing" class="btn btn-primary btn-lg">
                    Começar grátis
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
                <a href="#how-it-works" class="btn btn-ghost btn-lg">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/></svg>
                    Ver demo
                </a>
            </div>

            <div class="hero-social-proof">
                <div class="avatar-stack">
                    <div class="avatar">JM</div>
                    <div class="avatar" style="background:linear-gradient(135deg,#005eff,#00e5a0)">LC</div>
                    <div class="avatar" style="background:linear-gradient(135deg,#ff6b35,#005eff)">AR</div>
                    <div class="avatar" style="background:linear-gradient(135deg,#00e5a0,#ff6b35)">+</div>
                </div>
                <p class="social-text"><strong>+8.400 empresas</strong> já usam a plataforma</p>
            </div>

        </div>

    </section>
  `;

}

