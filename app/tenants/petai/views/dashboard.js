function injectStyles() {
  if (!document.getElementById("dash-petai-styles")) {
    const style = document.createElement("style");
    style.id = "dash-petai-styles";
    style.textContent = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --bg:#f4f7fb;
  --sidebar:#041d4f;
  --green:#32c766;
  --blue:#2f80ed;
  --orange:#ffb020;
  --purple:#9b51e0;
  --text:#172b4d;
  --muted:#7b8794;
  --glass:rgba(255,255,255,0.65);
}

body{
  font-family:'Inter',sans-serif;
  background:var(--bg);
  color:var(--text);
  overflow-x:hidden;
}

.bg-gradient{
  position:fixed;
  inset:0;
  background:
    radial-gradient(circle at top left,#9effc930,transparent 30%),
    radial-gradient(circle at bottom right,#7fb3ff40,transparent 30%);
  z-index:-1;
}

.glass{
  backdrop-filter:blur(18px);
  background:var(--glass);
  border:1px solid rgba(255,255,255,0.4);
  box-shadow:0 10px 40px rgba(0,0,0,.06);
}

.sidebar{
  position:fixed;
  left:0;
  top:0;
  width:260px;
  height:100vh;
  background:linear-gradient(180deg,#031b49,#042a70);
  padding:24px;
  display:flex;
  flex-direction:column;
  z-index:10;
  transform: none !important;
}

.logo{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:40px;
  color:#fff;
}

.logo h2 span{
  color:#48d96f;
}

.paw{
  width:50px;
  height:50px;
  border-radius:16px;
  display:grid;
  place-items:center;
  background:#fff;
  color:#041d4f;
  font-size:22px;
}

.menu{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.menu a{
  text-decoration:none;
  color:#d8e2ff;
  padding:14px 16px;
  border-radius:14px;
  transition:.3s;
  display:flex;
  align-items:center;
  gap:12px;
}

.menu a:hover{
  background:rgba(255,255,255,.08);
  transform:translateX(5px);
}

.menu .active{
  background:linear-gradient(90deg,#39d66d,#29b35a);
  color:#fff;
}

.support-card{
  margin-top:auto;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  border-radius:24px;
  padding:20px;
  color:#fff;
}

.support-card img{
  width:100%;
  border-radius:18px;
  margin:16px 0;
}

.support-card button{
  width:100%;
  border:none;
  padding:14px;
  border-radius:14px;
  background:#fff;
  cursor:pointer;
  font-weight:700;
}

.content{
  margin-left:260px;
  padding:24px;
}

.topbar{
  padding:22px 28px;
  border-radius:28px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:24px;
}

.topbar span{
  color:var(--muted);
}

.top-actions{
  display:flex;
  align-items:center;
  gap:18px;
}

.search{
  display:flex;
  align-items:center;
  gap:10px;
  background:#fff;
  padding:12px 18px;
  border-radius:16px;
}

.search input{
  border:none;
  outline:none;
  background:transparent;
}

.icon-btn{
  width:48px;
  height:48px;
  border:none;
  border-radius:14px;
  background:#fff;
  cursor:pointer;
}

.profile{
  display:flex;
  align-items:center;
  gap:12px;
}

.profile img{
  width:50px;
  height:50px;
  border-radius:50%;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:20px;
  margin-bottom:20px;
}

.card{
  border-radius:24px;
  padding:24px;
  display:flex;
  align-items:center;
  gap:18px;
  transition:.35s;
}

.hover-card:hover{
  transform:translateY(-8px) scale(1.02);
}

.icon{
  width:68px;
  height:68px;
  border-radius:20px;
  display:grid;
  place-items:center;
  font-size:24px;
}

.green{
  background:#ddf8e6;
  color:#2eb85c;
}

.blue{
  background:#e3efff;
  color:#2f80ed;
}

.orange{
  background:#fff0d3;
  color:#ff9f1a;
}

.purple{
  background:#efe3ff;
  color:#9b51e0;
}

.card small{
  color:#24b45f;
  font-weight:600;
}

.grid{
  display:grid;
  grid-template-columns:2fr 1fr 1fr;
  gap:20px;
}

.panel{
  border-radius:28px;
  padding:22px;
  min-height:260px;
  animation:fadeUp .7s ease;
}

.large{
  grid-column:span 2;
}

.panel-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.alerts{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.alert-item{
  display:flex;
  gap:16px;
  align-items:center;
  padding:14px;
  border-radius:16px;
  background:#fff;
  transition:.3s;
}

.alert-item:hover{
  transform:translateX(6px);
}

.alert-icon{
  width:50px;
  height:50px;
  border-radius:14px;
  display:grid;
  place-items:center;
}

.red{
  background:#ffe5e5;
  color:#ff4d4f;
}

.yellow{
  background:#fff4d9;
  color:#ffae00;
}

.product-list{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.product{
  display:flex;
  justify-content:space-between;
  background:#fff;
  padding:14px 18px;
  border-radius:14px;
}

.summary{
  display:grid;
  grid-template-columns:1fr;
  gap:20px;
}

.summary div{
  background:#fff;
  padding:20px;
  border-radius:18px;
}

canvas{
  width:100%!important;
  height:auto!important;
}

@keyframes fadeUp{
  from{
    opacity:0;
    transform:translateY(20px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

@media(max-width:1200px){

  .grid{
    grid-template-columns:1fr;
  }

  .large{
    grid-column:span 1;
  }

}

@media(max-width:900px){

  .sidebar{
    width:90px;
    padding:16px;
  }

  .sidebar h2,
  .sidebar p,
  .menu a{
    font-size:0;
  }

  .menu a i{
    font-size:18px;
  }

  .content{
    margin-left:90px;
  }

}

@media(max-width:700px){

  .topbar{
    flex-direction:column;
    gap:20px;
    align-items:flex-start;
  }

  .top-actions{
    width:100%;
    flex-wrap:wrap;
  }

  .search{
    width:100%;
  }

  .search input{
    width:100%;
  }

}
    
    `;
    document.head.appendChild(style);
  }
}

// chart-loader.js

let chartJsPromise = null;

export async function loadChartJs() {
  // evita carregar duas vezes
  if (window.Chart) {
    return Promise.resolve(window.Chart);
  }

  // reutiliza a mesma promise
  if (chartJsPromise) {
    return chartJsPromise;
  }

  chartJsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;

    script.onload = () => {
      resolve(window.Chart);
    };

    script.onerror = () => {
      reject(new Error('Falha ao carregar Chart.js'));
    };

    document.head.appendChild(script);
  });

  return chartJsPromise;
}

export async function dash()
{
    await loadChartJs()

    const ctx1 = document.getElementById('lineChart');

    new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [
        '01/05',
        '05/05',
        '10/05',
        '15/05',
        '20/05',
        '25/05',
        '31/05'
        ],
        datasets: [{
        label: 'Faturamento',
        data: [3000, 12000, 8000, 18000, 14000, 22000, 30000],
        borderColor: '#34c759',
        backgroundColor: 'rgba(52,199,89,.15)',
        fill: true,
        tension: .45
        }]
    },
    options: {
        responsive:true,
        plugins:{
        legend:{display:false}
        }
    }
    });

    const ctx2 = document.getElementById('pieChart');

    new Chart(ctx2,{
    type:'doughnut',
    data:{
        labels:[
        'Rações',
        'Acessórios',
        'Higiene',
        'Medicamentos'
        ],
        datasets:[{
        data:[45,20,15,20],
        backgroundColor:[
            '#2f80ed',
            '#ffb020',
            '#32c766',
            '#9b51e0'
        ],
        borderWidth:0
        }]
    },
    options:{
        cutout:'70%',
        plugins:{
        legend:{
            position:'bottom'
        }
        }
    }
    });

    const ctx3 = document.getElementById('barChart');

    new Chart(ctx3,{
    type:'bar',
    data:{
        labels:[
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai'
        ],
        datasets:[{
        data:[
            120,
            160,
            180,
            210,
            250
        ],
        backgroundColor:'#34c759',
        borderRadius:12
        }]
    },
    options:{
        plugins:{
        legend:{display:false}
        }
    }
    });

    /* PARALLAX */

    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('mousemove', (e) => {

    const x = (window.innerWidth - e.pageX * 2) / 90;
    const y = (window.innerHeight - e.pageY * 2) / 90;

    parallaxElements.forEach(el => {

        const speed = el.dataset.speed;

        el.style.transform =
        `translateX(${x * speed}px) translateY(${y * speed}px)`;

    });

    });

    /* SCROLL REVEAL */

    const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0px)';

        }

    });

    },{
    threshold:.15
    });

    document.querySelectorAll('.panel, .card').forEach(el=>{

    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = '.7s ease';

    observer.observe(el);

    });
}

export async function render(el, props = {}, content, config, ctx = {}) {

  injectStyles()

  el.innerHTML = `
   <div class="bg-gradient"></div>

  <aside class="sidebar glass parallax" data-speed="0.08">

    <div class="logo">
        <div class="logo-icon">🐾</div>
        <span>PetAI</span>
      </div>

    <nav class="menu">

      <a class="active" href="#">
        <i class="fa-solid fa-house"></i>
        Dashboard
      </a>

      <a href="#">
        <i class="fa-solid fa-chart-line"></i>
        Vendas
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

      <a href="#">
        <i class="fa-solid fa-gear"></i>
        Configurações
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

  </aside>

  <main class="content">

    <header class="topbar glass">

      <div>
        <h1>Dashboard</h1>
        <span>Visão geral da sua operação</span>
      </div>

      <div class="top-actions">

        <div class="search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Buscar..." />
        </div>

        <button class="icon-btn">
          <i class="fa-regular fa-bell"></i>
        </button>

        <div class="profile">
          <img src="https://i.pravatar.cc/100" alt="">
          <div>
            <strong>Pet Shop Exemplo</strong>
            <small>Administrador</small>
          </div>
        </div>

      </div>

    </header>

    <section class="cards">

      <div class="card glass hover-card">
        <div class="icon green">
          <i class="fa-solid fa-dollar-sign"></i>
        </div>

        <div>
          <span>Faturamento</span>
          <h2>R$ 186.750,00</h2>
          <small>▲ 18,6%</small>
        </div>
      </div>

      <div class="card glass hover-card">
        <div class="icon blue">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>

        <div>
          <span>Ticket médio</span>
          <h2>R$ 159,42</h2>
          <small>▲ 12,4%</small>
        </div>
      </div>

      <div class="card glass hover-card">
        <div class="icon orange">
          <i class="fa-solid fa-bag-shopping"></i>
        </div>

        <div>
          <span>Pedidos</span>
          <h2>1.173</h2>
          <small>▲ 15,2%</small>
        </div>
      </div>

      <div class="card glass hover-card">
        <div class="icon purple">
          <i class="fa-solid fa-users"></i>
        </div>

        <div>
          <span>Clientes</span>
          <h2>823</h2>
          <small>▲ 11,1%</small>
        </div>
      </div>

    </section>

    <section class="grid">

      <div class="panel glass large">
        <div class="panel-header">
          <h3>Faturamento diário</h3>
        </div>

        <canvas id="lineChart"></canvas>
      </div>

      <div class="panel glass">
        <div class="panel-header">
          <h3>Vendas por categoria</h3>
        </div>

        <canvas id="pieChart"></canvas>
      </div>

      <div class="panel glass">
        <div class="panel-header">
          <h3>Alertas</h3>
        </div>

        <div class="alerts">

          <div class="alert-item">
            <div class="alert-icon red">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>

            <div>
              <strong>Estoque crítico</strong>
              <p>8 produtos em estoque baixo</p>
            </div>
          </div>

          <div class="alert-item">
            <div class="alert-icon yellow">
              <i class="fa-solid fa-chart-simple"></i>
            </div>

            <div>
              <strong>Queda de vendas</strong>
              <p>12 produtos com queda</p>
            </div>
          </div>

          <div class="alert-item">
            <div class="alert-icon blue">
              <i class="fa-solid fa-user-clock"></i>
            </div>

            <div>
              <strong>Clientes inativos</strong>
              <p>87 clientes há +60 dias</p>
            </div>
          </div>

        </div>
      </div>

      <div class="panel glass">
        <div class="panel-header">
          <h3>Top Produtos</h3>
        </div>

        <div class="product-list">

          <div class="product">
            <span>Ração Premier 15kg</span>
            <strong>1.243</strong>
          </div>

          <div class="product">
            <span>Areia Higiênica 4kg</span>
            <strong>845</strong>
          </div>

          <div class="product">
            <span>Shampoo Antipulgas</span>
            <strong>500</strong>
          </div>

        </div>

      </div>

      <div class="panel glass">
        <div class="panel-header">
          <h3>Evolução mensal</h3>
        </div>

        <canvas id="barChart"></canvas>
      </div>

      <div class="panel glass">
        <div class="panel-header">
          <h3>Resumo</h3>
        </div>

        <div class="summary">

          <div>
            <h2>18,6%</h2>
            <span>Crescimento</span>
          </div>

          <div>
            <h2>57</h2>
            <span>Novos clientes</span>
          </div>

          <div>
            <h2>32,4%</h2>
            <span>Recompra</span>
          </div>

        </div>

      </div>

    </section>

  </main> 
  `
  await dash()


}