function petAI()
{
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {

    reveals.forEach((el) => {

      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }

    });

  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();


  // PARALLAX

  window.addEventListener('mousemove', (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    document.querySelectorAll('.parallax').forEach((el) => {
      el.style.transform = `translate(${x}px, ${y}px)`;
    });

  });


  // HEADER SCROLL EFFECT

  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {

    if(window.scrollY > 50){
      header.style.background = 'rgba(255,255,255,.92)';
      header.style.boxShadow = '0 10px 30px rgba(0,0,0,.06)';
    }else{
      header.style.background = 'rgba(255,255,255,.75)';
      header.style.boxShadow = 'none';
    }

  });


  // COUNTER ANIMATION

  const counters = document.querySelectorAll('.stat h3');

  counters.forEach(counter => {

    const updateCounter = () => {

      const target = +counter.innerText.replace(/\D/g,'');

      let count = 0;

      const increment = target / 60;

      const interval = setInterval(() => {

        count += increment;

        if(count >= target){
          counter.innerText = counter.innerText;
          clearInterval(interval);
        }

      }, 20);

    }

    updateCounter();

  }); 
}

export function render(el, props = {}, content, config, ctx = {}) {

  el.innerHTML = `

<div class="bg-gradient"></div>

  <!-- HEADER -->
  <header class="header glass">
    <div class="container nav">
      <div class="logo">
        <div class="logo-icon">🐾</div>
        <span>PetAI</span>
      </div>

      <nav class="menu">
        <a href="#">Recursos</a>
        <a href="#">Planos</a>
        <a href="#">Integrações</a>
        <a href="#">Sobre</a>
        <a href="#">Blog</a>
      </nav>

      <div class="nav-actions">
        <button class="btn btn-outline">Entrar</button>
        <button class="btn btn-primary">Começar teste grátis</button>
      </div>

      <div class="mobile-menu-btn">
        ☰
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="container hero-grid">

      <div class="hero-content reveal">
        <div class="badge">
          Plataforma SaaS para mercado pet
        </div>

        <h1>
          Transforme dados do mercado pet em
          <span>crescimento previsível.</span>
        </h1>

        <p>
          Uma plataforma inteligente para pet shops, clínicas veterinárias,
          distribuidoras e operações B2C que desejam vender mais,
          reduzir desperdícios e tomar decisões baseadas em dados reais.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary big">
            Começar teste grátis
          </button>

          <button class="btn btn-outline big">
            Agendar demonstração
          </button>
        </div>

        <div class="hero-features">
          <div>✔ Sem cartão</div>
          <div>✔ Dashboard em tempo real</div>
          <div>✔ IA integrada</div>
        </div>
      </div>

      <!-- DASHBOARD -->
      <div class="dashboard-wrapper reveal">
        <div class="dashboard floating">

          <aside class="sidebar">
            <div class="side-logo">🐾</div>

            <ul>
              <li class="active">🏠</li>
              <li>📊</li>
              <li>📦</li>
              <li>💬</li>
              <li>⚙</li>
            </ul>
          </aside>

          <main class="dashboard-content">

            <div class="top-cards">
              <div class="card stat">
                <span>Faturamento</span>
                <h3>R$ 186.750</h3>
                <small>+18.6%</small>
              </div>

              <div class="card stat">
                <span>Pedidos</span>
                <h3>1.173</h3>
                <small>+12%</small>
              </div>

              <div class="card stat">
                <span>Clientes ativos</span>
                <h3>823</h3>
                <small>+11%</small>
              </div>
            </div>

            <div class="charts-grid">

              <div class="card chart-card">
                <h4>Faturamento diário</h4>

                <div class="chart">
                  <div class="line"></div>
                </div>
              </div>

              <div class="card donut-card">
                <h4>Vendas por categoria</h4>

                <div class="donut"></div>

                <div class="legend">
                  <div><span class="dot blue"></span> Alimentos</div>
                  <div><span class="dot green"></span> Higiene</div>
                  <div><span class="dot orange"></span> Acessórios</div>
                </div>
              </div>

            </div>

            <div class="card table-card">
              <h4>Produtos mais vendidos</h4>

              <table>
                <tr>
                  <td>Ração Premium</td>
                  <td>1.243</td>
                </tr>

                <tr>
                  <td>Areia Higiênica</td>
                  <td>987</td>
                </tr>

                <tr>
                  <td>Brinquedo Mordedor</td>
                  <td>623</td>
                </tr>
              </table>
            </div>

          </main>

        </div>
      </div>

    </div>

    <div class="pet pet-dog parallax">
      🐕
    </div>

    <div class="pet pet-cat parallax">
      🐈
    </div>

  </section>

  <!-- PROBLEMA -->
  <section class="section light-section">
    <div class="container section-grid">

      <div class="section-text reveal">
        <h2>
          O mercado pet cresce.
          Mas muitas decisões ainda são no
          <span>"achismo"</span>.
        </h2>

        <p>
          Dados espalhados em ERPs, WhatsApp, marketplaces e planilhas
          dificultam previsibilidade e crescimento sustentável.
        </p>
      </div>

      <div class="problems reveal">
        <div class="problem-card">
          Estoque parado
        </div>

        <div class="problem-card">
          Falta de previsibilidade
        </div>

        <div class="problem-card">
          Ruptura de produtos
        </div>

        <div class="problem-card">
          Margens apertadas
        </div>
      </div>

    </div>
  </section>

  <!-- BENEFÍCIOS -->
  <section class="section">
    <div class="container">

      <div class="section-title reveal">
        <h2>O que sua empresa ganha</h2>
        <p>Automação, previsibilidade e crescimento escalável.</p>
      </div>

      <div class="benefits-grid">

        <div class="benefit-card reveal">
          <div class="icon">📈</div>
          <h3>Inteligência Comercial</h3>
          <p>Descubra produtos mais lucrativos e clientes com maior recorrência.</p>
        </div>

        <div class="benefit-card reveal">
          <div class="icon">🧠</div>
          <h3>Previsão de Demanda</h3>
          <p>Reduza desperdícios e evite falta de estoque.</p>
        </div>

        <div class="benefit-card reveal">
          <div class="icon">🎯</div>
          <h3>Marketing Orientado</h3>
          <p>Campanhas inteligentes com maior taxa de conversão.</p>
        </div>

        <div class="benefit-card reveal">
          <div class="icon">⚡</div>
          <h3>Dashboards em Tempo Real</h3>
          <p>Acompanhe indicadores estratégicos de qualquer lugar.</p>
        </div>

        <div class="benefit-card reveal">
          <div class="icon">💰</div>
          <h3>Crescimento Escalável</h3>
          <p>Tome decisões rápidas com mais segurança.</p>
        </div>

        <div class="benefit-card reveal">
          <div class="icon">📦</div>
          <h3>Gestão Inteligente</h3>
          <p>Controle estoque, margem e performance comercial.</p>
        </div>

      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container cta-content reveal">

      <h2>
        Comece agora a transformar
        seus dados em crescimento.
      </h2>

      <p>
        Dashboard moderno, IA integrada e métricas em tempo real.
      </p>

      <button class="btn btn-primary big">
        Iniciar teste grátis
      </button>

    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-content">

      <div>
        <div class="logo">
          <div class="logo-icon">🐾</div>
          <span>PetAI</span>
        </div>

        <p>
          Inteligência de dados para operações modernas do mercado pet.
        </p>
      </div>

      <div class="footer-links">
        <a href="#">Recursos</a>
        <a href="#">Integrações</a>
        <a href="#">Planos</a>
        <a href="#">Blog</a>
      </div>

    </div>
  </footer>

  `
    petAI()

  return {
    slots: {}
  }

}