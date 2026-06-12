export function render(el, props = {}, content, config, ctx = {}) {
    
    el.innerHTML = `
     <div class="logo">
            <div class="logo-icon">🐾</div>
            <span>PetAI</span>
          </div>
        <nav class="menu">
          <a href="geral" data-route="geral">
              <i class="fa-solid fa-gear"></i>
              Dashboard
          </a>
          <a href="setup" data-route="setup">
              <i class="fa-solid fa-gear"></i>
              Configuração ETL 
          </a>
          <a href="#">
            <i class="fa-solid fa-box"></i>
            Produtos
          </a>
          <a href="#">
            <i class="fa-solid fa-warehouse"></i>
            Estoque
          </a>
          <a href="#">
            <i class="fa-solid fa-users"></i>
            Clientes
          </a>
          <a href="#">
            <i class="fa-solid fa-file-lines"></i>
            Relatórios
          </a>
          <a href="#">
            <i class="fa-solid fa-bell"></i>
            Alertas
          </a>
          <a href="#">
            <i class="fa-solid fa-plug"></i>
            Integrações
          </a>
        </nav>
        <div class="support-card">
          <h3>Dúvidas?</h3>
          <p>Fale com nosso suporte especialista.</p>
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=500"
            alt=""
          />
          <button>Abrir chamado</button>
        </div>
    `;

    // Marca o link ativo com base na URL atual
    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop()
            || window.location.hash.replace('#', '');

        el.querySelectorAll('a[data-route]').forEach(link => {
            const route = link.getAttribute('data-route');
            link.classList.toggle('active', route === currentPath);
        });
    }

    // Define o active ao renderizar
    setActiveLink();

    // Atualiza o active ao clicar nos links
    el.querySelectorAll('a[data-route]').forEach(link => {
        link.addEventListener('click', () => {
            el.querySelectorAll('a[data-route]').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Reage a mudanças de rota via popstate (navegação do browser)
    window.addEventListener('popstate', setActiveLink);
}