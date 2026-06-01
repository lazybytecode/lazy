

function loadChartJS() {
  return new Promise((resolve, reject) => {
    // já carregado? evita duplicar
    if (window.Chart) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.onload = () => resolve();
    script.onerror = () => reject("Erro ao carregar Chart.js");

    document.head.appendChild(script);
  });
}

function controla()
{
  const ac='#00e5a0',bl='#005eff',wm='#ff6b35',am='#f39c12',pu='#9b5de5';
const gc='rgba(255,255,255,0.05)',tc='rgba(255,255,255,0.35)';
Chart.defaults.color=tc;Chart.defaults.borderColor=gc;Chart.defaults.font.family='DM Sans,sans-serif';Chart.defaults.font.size=11;

function mkChart(id,cfg){
  const el=document.getElementById(id);
  if(el)new Chart(el,cfg);
}

const months6=['Nov','Dez','Jan','Fev','Mar','Abr'];
const months12=['Mai','Jun','Jul','Ago','Set','Out','Nov','Dez','Jan','Fev','Mar','Abr'];
const tip={backgroundColor:'#13151f',borderColor:'rgba(255,255,255,.1)',borderWidth:1};

mkChart('c-rev',{type:'bar',data:{labels:months6,datasets:[
  {label:'Medicamentos',data:[280,310,295,340,380,420],backgroundColor:'rgba(0,229,160,.8)',borderRadius:5,borderSkipped:false},
  {label:'Insumos Agro',data:[180,200,210,240,260,280],backgroundColor:'rgba(0,94,255,.8)',borderRadius:5,borderSkipped:false},
  {label:'Rações',data:[90,110,100,125,140,150],backgroundColor:'rgba(255,107,53,.8)',borderRadius:5,borderSkipped:false},
  {label:'Acessórios',data:[40,45,50,55,60,75],backgroundColor:'rgba(243,156,18,.8)',borderRadius:5,borderSkipped:false},
]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:c=>` R$${c.raw}K`}}},scales:{x:{stacked:true,grid:{display:false},ticks:{autoSkip:false}},y:{stacked:true,grid:{color:gc},ticks:{callback:v=>`R$${v}K`}}}}});

mkChart('c-dnt',{type:'doughnut',data:{labels:['Medicamentos','Insumos Agro','Rações','Acessórios'],datasets:[{data:[42,31,18,9],backgroundColor:[ac,bl,wm,am],borderWidth:0,hoverOffset:5}]},options:{responsive:true,maintainAspectRatio:false,cutout:'72%',plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:c=>` ${c.label}: ${c.raw}%`}}}}});

mkChart('c-trend',{type:'line',data:{labels:months12,datasets:[
  {label:'Petshop',data:[520,560,490,610,680,720,710,760,800,840,880,940],borderColor:ac,backgroundColor:'rgba(0,229,160,.07)',borderWidth:2,tension:.42,fill:true,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:ac},
  {label:'Agro',data:[310,340,290,380,420,460,490,520,560,590,630,680],borderColor:bl,backgroundColor:'rgba(0,94,255,.06)',borderWidth:2,tension:.42,fill:true,pointRadius:2,pointHoverRadius:5,pointBackgroundColor:bl}
]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:c=>` ${c.dataset.label}: ${c.raw} pedidos`}}},scales:{x:{grid:{display:false},ticks:{autoSkip:true,maxTicksLimit:6}},y:{grid:{color:gc}}}}});

mkChart('c-fin',{type:'bar',data:{labels:months6,datasets:[
  {label:'Receita',data:[640,680,710,750,800,847],backgroundColor:'rgba(0,229,160,.7)',borderRadius:5,borderSkipped:false},
  {label:'Despesas',data:[520,548,570,595,630,661],backgroundColor:'rgba(255,107,53,.6)',borderRadius:5,borderSkipped:false},
  {type:'line',label:'Lucro',data:[120,132,140,155,170,186],borderColor:pu,backgroundColor:'transparent',borderWidth:2,tension:.4,pointRadius:3,pointBackgroundColor:pu,yAxisID:'y'}
]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:c=>` ${c.dataset.label}: R$${c.raw}K`}}},scales:{x:{grid:{display:false},ticks:{autoSkip:false}},y:{grid:{color:gc},ticks:{callback:v=>`R$${v}K`}}}}});

mkChart('c-margin',{type:'bar',data:{labels:['Medicamentos','Insumos Agro','Rações','Acessórios','Antipulgas'],datasets:[
  {label:'Receita',data:[420,280,150,75,90],backgroundColor:'rgba(0,229,160,.7)',borderRadius:5,borderSkipped:false},
  {label:'Custo',data:[235,196,112,54,58],backgroundColor:'rgba(255,107,53,.6)',borderRadius:5,borderSkipped:false},
]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:c=>` ${c.dataset.label}: R$${c.raw}K`}}},scales:{x:{grid:{display:false}},y:{grid:{color:gc},ticks:{callback:v=>`R$${v}K`}}}}});

function nav(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(s=>s.classList.remove('active'));
  const pg=document.getElementById('p-'+id);
  if(pg){pg.classList.add('active');}
  document.querySelectorAll('.sb-item').forEach(s=>{if(s.dataset.page===id)s.classList.add('active');});
  window.scrollTo(0,0);
}

document.querySelectorAll('.sb-item').forEach(item=>{
  item.addEventListener('click',()=>nav(item.dataset.page));
});

document.querySelectorAll('.tabs').forEach(tabs=>{
  tabs.querySelectorAll('.tab').forEach(tab=>{
    tab.addEventListener('click',()=>{tabs.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));tab.classList.add('on');});
  });
});
}

export  async function render(el, params, props = {} ) {

  const data = props.dashboard || {}

  injectStyles()

   //<h1>${data.greeting} - PET AI </h1>
   //<pre>${JSON.stringify(data.stats, null, 2)}</pre>

  el.innerHTML = `
  
  <div class="layout">

<!-- ── Sidebar ── -->
<aside class="sb">
  <div class="sb-logo">PET AI<span>Distribuição B2B</span></div>
  <div id="sidebar"></div>

  <div class="sb-group">Principal</div>
  <div class="sb-item active" data-page="dashboard"><span class="sb-icon">◈</span>Dashboard</div>
  <div class="sb-item" data-page="pedidos"><span class="sb-icon">◻</span>Pedidos<span class="sb-badge">5</span></div>
  <div class="sb-item" data-page="estoque"><span class="sb-icon">⬡</span>Estoque<span class="sb-badge">3</span></div>
  <div class="sb-item" data-page="clientes"><span class="sb-icon">◉</span>Clientes</div>
  <div class="sb-sep"></div>
  <div class="sb-group">Análise</div>
  <div class="sb-item" data-page="financeiro"><span class="sb-icon">▲</span>Financeiro</div>
  <div class="sb-item" data-page="fornecedores"><span class="sb-icon">⊞</span>Fornecedores</div>
  <div class="sb-item" data-page="novopedido"><span class="sb-icon">✚</span>Novo Pedido</div>
</aside>

<!-- ── Main ── -->
<main class="main" id="main" >

<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: DASHBOARD                             -->
<!-- ═══════════════════════════════════════════ -->
<div class="page active" id="p-dashboard">



  <div class="g21" style="margin-bottom:14px">
    <div class="card au" style="animation-delay:.24s">
      <div class="card-title">Receita por Categoria</div>
      <div class="card-sub">Últimos 6 meses · empilhado</div>
      <div class="legend"><div class="leg"><span class="leg-sq" style="background:#00e5a0"></span>Medicamentos</div><div class="leg"><span class="leg-sq" style="background:#005eff"></span>Insumos Agro</div><div class="leg"><span class="leg-sq" style="background:#ff6b35"></span>Rações</div><div class="leg"><span class="leg-sq" style="background:#f39c12"></span>Acessórios</div></div>
      <div style="position:relative;height:200px"><canvas id="c-rev"></canvas></div>
    </div>
    <div class="card au" style="animation-delay:.28s">
      <div class="card-title">Mix de Vendas</div>
      <div class="card-sub">Participação por segmento</div>
      <div style="position:relative;height:170px;display:flex;justify-content:center"><canvas id="c-dnt"></canvas></div>
      <div class="legend" style="margin-top:10px;justify-content:center"><div class="leg"><span class="leg-sq" style="background:#00e5a0"></span>Medic. 42%</div><div class="leg"><span class="leg-sq" style="background:#005eff"></span>Agro 31%</div><div class="leg"><span class="leg-sq" style="background:#ff6b35"></span>Rações 18%</div><div class="leg"><span class="leg-sq" style="background:#f39c12"></span>Acess. 9%</div></div>
    </div>
  </div>

  <div class="g21" style="margin-bottom:14px">
    <div class="card au" style="animation-delay:.3s">
      <div class="card-title">Evolução de Pedidos — 12 meses</div>
      <div class="card-sub">Petshop vs Agropecuária</div>
      <div class="legend"><div class="leg"><span class="leg-sq" style="background:#00e5a0"></span>Petshop</div><div class="leg"><span class="leg-sq" style="background:#005eff"></span>Agro</div></div>
      <div style="position:relative;height:180px"><canvas id="c-trend"></canvas></div>
    </div>
    <div class="card au" style="animation-delay:.34s">
      <div class="card-title">Top Clientes</div>
      <div class="card-sub">Receita acumulada no mês</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(0,229,160,.06);border:1px solid rgba(0,229,160,.15);border-radius:10px;cursor:pointer" onclick="nav('clientes')"><div class="av" style="background:linear-gradient(135deg,var(--accent),var(--accent2));color:#060a0f">PV</div><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600">PetVida Distribuidora</div><div style="font-size:10px;color:var(--muted)">48 pedidos</div></div><div style="font-size:13px;font-weight:700;color:var(--accent)">R$74K</div></div>
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;cursor:pointer" onclick="nav('clientes')"><div class="av" style="background:rgba(0,94,255,.2);color:#7ab3ff">AF</div><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600">AgroFértil Sul</div><div style="font-size:10px;color:var(--muted)">31 pedidos</div></div><div style="font-size:13px;font-weight:700;color:var(--accent2)">R$62K</div></div>
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;cursor:pointer" onclick="nav('clientes')"><div class="av" style="background:rgba(255,107,53,.18);color:#ff9c78">CR</div><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600">CãoRio Pet Center</div><div style="font-size:10px;color:var(--muted)">27 pedidos</div></div><div style="font-size:13px;font-weight:700;color:var(--warm)">R$51K</div></div>
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;cursor:pointer" onclick="nav('clientes')"><div class="av" style="background:rgba(243,156,18,.15);color:#f3bd5c">TA</div><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600">Terra Alta Insumos</div><div style="font-size:10px;color:var(--muted)">22 pedidos</div></div><div style="font-size:13px;font-weight:700;color:var(--amber)">R$39K</div></div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: PEDIDOS (Kanban)                      -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="p-pedidos">
  <div class="topbar au">
    <div class="topbar-left"><h1>Pedidos</h1><p>Gestão e acompanhamento em tempo real</p></div>
    <div class="topbar-right"><input class="inp" placeholder="Buscar pedido..." style="width:200px"><span class="pill pill-p" onclick="nav('novopedido')">+ Novo Pedido</span></div>
  </div>

  <div class="g4" style="margin-bottom:18px">
    <div class="kpi au" style="--c:#7b8099;animation-delay:.05s"><div class="kpi-lbl">Aguardando</div><div class="kpi-val" style="color:var(--muted)">12</div><div class="kpi-sub">pedidos na fila</div></div>
    <div class="kpi au" style="--c:var(--amber);animation-delay:.09s"><div class="kpi-lbl">Separando</div><div class="kpi-val" style="color:var(--amber)">8</div><div class="kpi-sub">no galpão</div></div>
    <div class="kpi au" style="--c:var(--accent2);animation-delay:.13s"><div class="kpi-lbl">Em Trânsito</div><div class="kpi-val" style="color:var(--accent2)">19</div><div class="kpi-sub">saídas hoje</div></div>
    <div class="kpi au" style="--c:var(--accent);animation-delay:.17s"><div class="kpi-lbl">Entregues Hoje</div><div class="kpi-val" style="color:var(--accent)">34</div><div class="kpi-sub"><span class="up">↑ 6</span> vs ontem</div></div>
  </div>

  <div class="kanban au" style="animation-delay:.2s">
    <div class="kancol">
      <div class="kancol-title" style="color:var(--muted)">Aguardando <span class="tag tag-warn">12</span></div>
      <div class="kancard"><div class="kancard-id">#PD-4831</div><div class="kancard-title">Ivermectina 50ml × 200un</div><div class="kancard-footer"><span class="tag tag-blue">Agro</span><span style="font-size:11px;color:var(--muted)">R$4.800</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4830</div><div class="kancard-title">Antipulgas Frontline × 48cx</div><div class="kancard-footer"><span class="tag tag-ok">Petshop</span><span style="font-size:11px;color:var(--muted)">R$2.100</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4829</div><div class="kancard-title">Shampoo Dermatol. × 36un</div><div class="kancard-footer"><span class="tag tag-ok">Petshop</span><span style="font-size:11px;color:var(--muted)">R$980</span></div></div>
    </div>
    <div class="kancol">
      <div class="kancol-title" style="color:var(--amber)">Separando <span class="tag tag-warn">8</span></div>
      <div class="kancard"><div class="kancard-id">#PD-4826</div><div class="kancard-title">Vacina Polivalente Bov. × 500</div><div class="kancard-footer"><span class="tag tag-blue">Agro</span><span style="font-size:11px;color:var(--muted)">R$8.920</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4825</div><div class="kancard-title">Ração Hills S.D. 15kg × 20</div><div class="kancard-footer"><span class="tag tag-ok">Petshop</span><span style="font-size:11px;color:var(--muted)">R$3.400</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4824</div><div class="kancard-title">Amoxicilina Vet 250mg × 100</div><div class="kancard-footer"><span class="tag tag-ok">Petshop</span><span style="font-size:11px;color:var(--muted)">R$1.560</span></div></div>
    </div>
    <div class="kancol">
      <div class="kancol-title" style="color:#7ab3ff">Em Trânsito <span class="tag tag-blue">19</span></div>
      <div class="kancard"><div class="kancard-id">#PD-4821</div><div class="kancard-title">Collar Seresto × 60un</div><div class="kancard-footer"><span class="tag tag-ok">Petshop</span><span style="font-size:11px;color:var(--muted)">R$5.400</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4820</div><div class="kancard-title">Herbicida Nativo 1L × 80</div><div class="kancard-footer"><span class="tag tag-blue">Agro</span><span style="font-size:11px;color:var(--muted)">R$6.200</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4819</div><div class="kancard-title">Suplemento Aminoforte × 24</div><div class="kancard-footer"><span class="tag tag-ok">Petshop</span><span style="font-size:11px;color:var(--muted)">R$1.820</span></div></div>
    </div>
    <div class="kancol">
      <div class="kancol-title" style="color:var(--accent)">Entregue <span class="tag tag-ok">34</span></div>
      <div class="kancard"><div class="kancard-id">#PD-4818</div><div class="kancard-title">Antipulgas Frontline Plus × 36</div><div class="kancard-footer"><span class="tag tag-ok">Petshop</span><span style="font-size:11px;color:var(--muted)">R$3.240</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4817</div><div class="kancard-title">Ivermectina injetável × 100</div><div class="kancard-footer"><span class="tag tag-blue">Agro</span><span style="font-size:11px;color:var(--muted)">R$5.780</span></div></div>
      <div class="kancard"><div class="kancard-id">#PD-4816</div><div class="kancard-title">Ração Agro Premium × 30</div><div class="kancard-footer"><span class="tag tag-blue">Agro</span><span style="font-size:11px;color:var(--muted)">R$2.700</span></div></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: ESTOQUE                               -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="p-estoque">
  <div class="topbar au">
    <div class="topbar-left"><h1>Estoque</h1><p>Controle de inventário e alertas</p></div>
    <div class="topbar-right"><input class="inp" placeholder="Buscar produto..." style="width:200px"><span class="pill pill-p">+ Entrada</span></div>
  </div>

  <div class="alert alert-err au">
    <span style="font-size:15px">⊗</span>
    <span>3 produtos abaixo do estoque mínimo — reposição urgente necessária</span>
  </div>

  <div class="g4" style="margin-bottom:18px">
    <div class="kpi au" style="--c:var(--accent);animation-delay:.05s"><div class="kpi-lbl">Total Itens</div><div class="kpi-val" style="color:var(--accent)">847</div><div class="kpi-sub">SKUs ativos</div></div>
    <div class="kpi au" style="--c:var(--warm);animation-delay:.09s"><div class="kpi-lbl">Críticos</div><div class="kpi-val" style="color:var(--warm)">3</div><div class="kpi-sub">abaixo do mínimo</div></div>
    <div class="kpi au" style="--c:var(--amber);animation-delay:.13s"><div class="kpi-lbl">Alerta</div><div class="kpi-val" style="color:var(--amber)">11</div><div class="kpi-sub">abaixo de 30%</div></div>
    <div class="kpi au" style="--c:var(--accent2);animation-delay:.17s"><div class="kpi-lbl">Valor em Estoque</div><div class="kpi-val" style="color:var(--accent2)">R$2.3M</div><div class="kpi-sub">custo médio</div></div>
  </div>

  <div class="tabs au" style="animation-delay:.2s">
    <div class="tab on">Todos</div><div class="tab">Petshop</div><div class="tab">Agro</div><div class="tab">Críticos</div>
  </div>

  <div class="prod-grid au" style="animation-delay:.22s">
    <div class="prod-card"><div class="prod-card-top"><div class="prod-icon" style="background:rgba(255,107,53,.15)">💊</div><span class="tag tag-err">Crítico</span></div><div style="font-size:13px;font-weight:600;margin-bottom:4px">Vermífugo Caninus Pro</div><div style="font-size:11px;color:var(--muted);margin-bottom:10px">Medicamento · Petshop</div><div class="prog-wrap" style="margin-bottom:6px"><div class="prog-bar" style="width:12%;background:var(--warm)"></div></div><div style="display:flex;justify-content:space-between;font-size:11px"><span style="color:var(--warm);font-weight:700">12 un restantes</span><span style="color:var(--muted)">mín: 80 un</span></div></div>
    <div class="prod-card"><div class="prod-card-top"><div class="prod-icon" style="background:rgba(255,107,53,.15)">💉</div><span class="tag tag-err">Crítico</span></div><div style="font-size:13px;font-weight:600;margin-bottom:4px">Vacina Polivalente Bovina</div><div style="font-size:11px;color:var(--muted);margin-bottom:10px">Biológico · Agro</div><div class="prog-wrap" style="margin-bottom:6px"><div class="prog-bar" style="width:18%;background:var(--warm)"></div></div><div style="display:flex;justify-content:space-between;font-size:11px"><span style="color:var(--warm);font-weight:700">36 doses restantes</span><span style="color:var(--muted)">mín: 200 doses</span></div></div>
    <div class="prod-card"><div class="prod-card-top"><div class="prod-icon" style="background:rgba(243,156,18,.12)">🌾</div><span class="tag tag-err">Crítico</span></div><div style="font-size:13px;font-weight:600;margin-bottom:4px">Ração Agro Premium 25kg</div><div style="font-size:11px;color:var(--muted);margin-bottom:10px">Ração · Agro</div><div class="prog-wrap" style="margin-bottom:6px"><div class="prog-bar" style="width:22%;background:var(--warm)"></div></div><div style="display:flex;justify-content:space-between;font-size:11px"><span style="color:var(--warm);font-weight:700">44 sacos restantes</span><span style="color:var(--muted)">mín: 200 sacos</span></div></div>
    <div class="prod-card"><div class="prod-card-top"><div class="prod-icon" style="background:rgba(243,156,18,.12)">🐾</div><span class="tag tag-warn">Alerta</span></div><div style="font-size:13px;font-weight:600;margin-bottom:4px">Antipulgas Frontline Plus</div><div style="font-size:11px;color:var(--muted);margin-bottom:10px">Antipulgas · Petshop</div><div class="prog-wrap" style="margin-bottom:6px"><div class="prog-bar" style="width:35%;background:var(--amber)"></div></div><div style="display:flex;justify-content:space-between;font-size:11px"><span style="color:var(--amber);font-weight:700">140 cx restantes</span><span style="color:var(--muted)">mín: 120 cx</span></div></div>
    <div class="prod-card"><div class="prod-card-top"><div class="prod-icon" style="background:rgba(0,229,160,.1)">🧴</div><span class="tag tag-ok">OK</span></div><div style="font-size:13px;font-weight:600;margin-bottom:4px">Shampoo Dermatológico</div><div style="font-size:11px;color:var(--muted);margin-bottom:10px">Higiene · Petshop</div><div class="prog-wrap" style="margin-bottom:6px"><div class="prog-bar" style="width:68%;background:var(--accent)"></div></div><div style="display:flex;justify-content:space-between;font-size:11px"><span style="color:var(--accent);font-weight:700">272 un restantes</span><span style="color:var(--muted)">mín: 100 un</span></div></div>
    <div class="prod-card"><div class="prod-card-top"><div class="prod-icon" style="background:rgba(0,94,255,.1)">🌱</div><span class="tag tag-ok">OK</span></div><div style="font-size:13px;font-weight:600;margin-bottom:4px">Herbicida Nativo 1L</div><div style="font-size:11px;color:var(--muted);margin-bottom:10px">Insumo · Agro</div><div class="prog-wrap" style="margin-bottom:6px"><div class="prog-bar" style="width:81%;background:var(--accent2)"></div></div><div style="display:flex;justify-content:space-between;font-size:11px"><span style="color:#7ab3ff;font-weight:700">324 un restantes</span><span style="color:var(--muted)">mín: 100 un</span></div></div>
  </div>
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: CLIENTES                              -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="p-clientes">
  <div class="topbar au">
    <div class="topbar-left"><h1>Clientes</h1><p>CRM — 318 clientes ativos</p></div>
    <div class="topbar-right"><input class="inp" placeholder="Buscar cliente..." style="width:200px"><span class="pill pill-p">+ Novo Cliente</span></div>
  </div>

  <div class="g4" style="margin-bottom:18px">
    <div class="kpi au" style="--c:var(--accent)"><div class="kpi-lbl">Total Ativos</div><div class="kpi-val" style="color:var(--accent)">318</div><div class="kpi-sub"><span class="up">+24</span> este mês</div></div>
    <div class="kpi au" style="--c:var(--accent2);animation-delay:.06s"><div class="kpi-lbl">Petshops</div><div class="kpi-val" style="color:var(--accent2)">201</div><div class="kpi-sub">63% da base</div></div>
    <div class="kpi au" style="--c:var(--warm);animation-delay:.12s"><div class="kpi-lbl">Agropecuárias</div><div class="kpi-val" style="color:var(--warm)">117</div><div class="kpi-sub">37% da base</div></div>
    <div class="kpi au" style="--c:var(--amber);animation-delay:.18s"><div class="kpi-lbl">LTV Médio</div><div class="kpi-val" style="color:var(--amber)">R$18K</div><div class="kpi-sub">por cliente/ano</div></div>
  </div>

  <div class="tbl-wrap au" style="animation-delay:.22s">
    <div class="tbl-head"><h3>Lista de Clientes</h3><div style="display:flex;gap:8px"><span class="pill">Filtrar</span><span class="pill">Exportar</span></div></div>
    <table>
      <thead><tr><th>Cliente</th><th>Segmento</th><th>Cidade</th><th>Pedidos</th><th>Receita Total</th><th>Último Pedido</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="width:28px;height:28px;font-size:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#060a0f">PV</div><div><div style="font-weight:600">PetVida Distribuidora</div><div style="font-size:10px;color:var(--muted)">CNPJ 12.345.678/0001-90</div></div></div></td><td><span class="tag tag-ok">Petshop</span></td><td>São Paulo, SP</td><td style="font-weight:600">48</td><td style="color:var(--accent);font-weight:700">R$74.200</td><td style="color:var(--muted)">02/04/2026</td><td><span class="tag tag-ok">Ativo</span></td></tr>
        <tr><td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="width:28px;height:28px;font-size:10px;background:rgba(0,94,255,.2);color:#7ab3ff">AF</div><div><div style="font-weight:600">AgroFértil Sul</div><div style="font-size:10px;color:var(--muted)">CNPJ 98.765.432/0001-11</div></div></div></td><td><span class="tag tag-blue">Agro</span></td><td>Cascavel, PR</td><td style="font-weight:600">31</td><td style="color:var(--accent2);font-weight:700">R$62.800</td><td style="color:var(--muted)">01/04/2026</td><td><span class="tag tag-ok">Ativo</span></td></tr>
        <tr><td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="width:28px;height:28px;font-size:10px;background:rgba(255,107,53,.18);color:#ff9c78">CR</div><div><div style="font-weight:600">CãoRio Pet Center</div><div style="font-size:10px;color:var(--muted)">CNPJ 55.443.221/0001-88</div></div></div></td><td><span class="tag tag-ok">Petshop</span></td><td>Rio de Janeiro, RJ</td><td style="font-weight:600">27</td><td style="color:var(--warm);font-weight:700">R$51.400</td><td style="color:var(--muted)">01/04/2026</td><td><span class="tag tag-ok">Ativo</span></td></tr>
        <tr><td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="width:28px;height:28px;font-size:10px;background:rgba(243,156,18,.15);color:#f3bd5c">TA</div><div><div style="font-weight:600">Terra Alta Insumos</div><div style="font-size:10px;color:var(--muted)">CNPJ 33.221.099/0001-77</div></div></div></td><td><span class="tag tag-blue">Agro</span></td><td>Londrina, PR</td><td style="font-weight:600">22</td><td style="color:var(--amber);font-weight:700">R$39.600</td><td style="color:var(--muted)">30/03/2026</td><td><span class="tag tag-ok">Ativo</span></td></tr>
        <tr><td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="width:28px;height:28px;font-size:10px;background:rgba(155,93,229,.15);color:var(--purple)">VC</div><div><div style="font-weight:600">VetClínica Boa Vista</div><div style="font-size:10px;color:var(--muted)">CNPJ 77.654.321/0001-44</div></div></div></td><td><span class="tag tag-ok">Petshop</span></td><td>Curitiba, PR</td><td style="font-weight:600">18</td><td style="color:var(--purple);font-weight:700">R$28.900</td><td style="color:var(--muted)">29/03/2026</td><td><span class="tag tag-warn">Inativo 30d</span></td></tr>
        <tr><td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="width:28px;height:28px;font-size:10px;background:rgba(232,67,147,.13);color:var(--pink)">PC</div><div><div style="font-weight:600">PetCenter Campinas</div><div style="font-size:10px;color:var(--muted)">CNPJ 22.110.998/0001-33</div></div></div></td><td><span class="tag tag-ok">Petshop</span></td><td>Campinas, SP</td><td style="font-weight:600">15</td><td style="color:var(--pink);font-weight:700">R$22.100</td><td style="color:var(--muted)">25/03/2026</td><td><span class="tag tag-ok">Ativo</span></td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: FINANCEIRO                            -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="p-financeiro">
  <div class="topbar au">
    <div class="topbar-left"><h1>Financeiro</h1><p>Fluxo de caixa e análise de margens</p></div>
    <div class="topbar-right"><span class="pill">Exportar PDF</span><span class="pill pill-p">DRE Completo</span></div>
  </div>

  <div class="g4" style="margin-bottom:18px">
    <div class="kpi au" style="--c:var(--accent)"><div class="kpi-lbl">Receita Bruta</div><div class="kpi-val rec">R$847K</div><div class="kpi-sub"><span class="up">↑ 18.3%</span> vs mês ant.</div></div>
    <div class="kpi au" style="--c:var(--warm);animation-delay:.06s"><div class="kpi-lbl">Custo CMV</div><div class="kpi-val exp">R$508K</div><div class="kpi-sub">60% da receita</div></div>
    <div class="kpi au" style="--c:var(--accent2);animation-delay:.12s"><div class="kpi-lbl">Margem Bruta</div><div class="kpi-val" style="color:var(--accent2)">40%</div><div class="kpi-sub"><span class="up">+2.1pp</span> vs mês ant.</div></div>
    <div class="kpi au" style="--c:var(--purple);animation-delay:.18s"><div class="kpi-lbl">Lucro Líquido</div><div class="kpi-val" style="color:var(--purple)">R$118K</div><div class="kpi-sub"><span class="up">↑ 22%</span> vs mês ant.</div></div>
  </div>

  <div class="g21" style="margin-bottom:14px">
    <div class="card au" style="animation-delay:.22s">
      <div class="card-title">Fluxo de Caixa — 6 meses</div>
      <div class="card-sub">Receita vs Despesas vs Lucro</div>
      <div class="legend"><div class="leg"><span class="leg-sq" style="background:#00e5a0"></span>Receita</div><div class="leg"><span class="leg-sq" style="background:#ff6b35"></span>Despesas</div><div class="leg"><span class="leg-sq" style="background:#9b5de5"></span>Lucro</div></div>
      <div style="position:relative;height:210px"><canvas id="c-fin"></canvas></div>
    </div>
    <div class="card au" style="animation-delay:.26s">
      <div class="card-title">DRE Resumido — Abril</div>
      <div class="card-sub">Demonstrativo de resultado</div>
      <div style="display:flex;flex-direction:column;gap:0;margin-top:6px">
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border)"><span style="color:var(--muted);font-size:12px">Receita Bruta</span><span class="rec" style="font-weight:700">R$ 847.000</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border)"><span style="color:var(--muted);font-size:12px">(-) Deduções e impostos</span><span class="exp">- R$ 67.760</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border)"><span style="color:var(--muted);font-size:12px">Receita Líquida</span><span class="rec" style="font-weight:700">R$ 779.240</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border)"><span style="color:var(--muted);font-size:12px">(-) CMV</span><span class="exp">- R$ 508.200</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(0,229,160,.2);background:rgba(0,229,160,.04)"><span style="font-weight:600;font-size:12px">Lucro Bruto (40%)</span><span class="rec" style="font-weight:700">R$ 271.040</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border)"><span style="color:var(--muted);font-size:12px">(-) Despesas Operac.</span><span class="exp">- R$ 153.000</span></div>
        <div style="display:flex;justify-content:space-between;padding:11px 0 0;"><span style="font-weight:700;font-size:13px">Lucro Líquido</span><span style="color:var(--purple);font-weight:700;font-size:15px">R$ 118.040</span></div>
      </div>
    </div>
  </div>

  <div class="card au" style="animation-delay:.3s">
    <div class="card-title">Margem por Categoria</div>
    <div class="card-sub">Receita, custo e margem bruta por linha de produto</div>
    <div style="position:relative;height:180px"><canvas id="c-margin"></canvas></div>
  </div>
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: FORNECEDORES                          -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="p-fornecedores">
  <div class="topbar au">
    <div class="topbar-left"><h1>Fornecedores</h1><p>Gestão de parceiros e compras</p></div>
    <div class="topbar-right"><span class="pill pill-p">+ Novo Fornecedor</span></div>
  </div>

  <div class="g3" style="margin-bottom:18px">
    <div class="kpi au" style="--c:var(--accent)"><div class="kpi-lbl">Fornecedores</div><div class="kpi-val" style="color:var(--accent)">42</div><div class="kpi-sub">cadastrados e ativos</div></div>
    <div class="kpi au" style="--c:var(--amber);animation-delay:.08s"><div class="kpi-lbl">Pedidos em Aberto</div><div class="kpi-val" style="color:var(--amber)">7</div><div class="kpi-sub">aguardando entrega</div></div>
    <div class="kpi au" style="--c:var(--accent2);animation-delay:.16s"><div class="kpi-lbl">Volume Compras/Mês</div><div class="kpi-val" style="color:var(--accent2)">R$508K</div><div class="kpi-sub">custo total</div></div>
  </div>

  <div style="display:flex;flex-direction:column;gap:10px" class="au" style="animation-delay:.2s">
    <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);transition:border-color .2s" onmouseover="this.style.borderColor='rgba(255,255,255,.14)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
      <div class="av" style="width:42px;height:42px;font-size:14px;background:rgba(0,229,160,.12);color:var(--accent)">BM</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">Boehringer Ingelheim</div><div style="font-size:11px;color:var(--muted)">Vacinas e biológicos · Multinacional</div></div>
      <div style="text-align:right;min-width:90px"><div style="font-size:13px;font-weight:700;color:var(--accent)">R$182K</div><div style="font-size:10px;color:var(--muted)">volume mensal</div></div>
      <span class="tag tag-ok" style="flex-shrink:0">Ativo</span>
      <div style="text-align:right;min-width:60px;font-size:11px;color:var(--muted)">Prazo 30d</div>
    </div>
    <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);transition:border-color .2s" onmouseover="this.style.borderColor='rgba(255,255,255,.14)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
      <div class="av" style="width:42px;height:42px;font-size:14px;background:rgba(0,94,255,.13);color:#7ab3ff">MR</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">MSD Saúde Animal</div><div style="font-size:11px;color:var(--muted)">Antiparasitários · Multinacional</div></div>
      <div style="text-align:right;min-width:90px"><div style="font-size:13px;font-weight:700;color:var(--accent2)">R$134K</div><div style="font-size:10px;color:var(--muted)">volume mensal</div></div>
      <span class="tag tag-ok" style="flex-shrink:0">Ativo</span>
      <div style="text-align:right;min-width:60px;font-size:11px;color:var(--muted)">Prazo 45d</div>
    </div>
    <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);transition:border-color .2s" onmouseover="this.style.borderColor='rgba(255,255,255,.14)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
      <div class="av" style="width:42px;height:42px;font-size:14px;background:rgba(243,156,18,.12);color:var(--amber)">HL</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">Hills Pet Nutrition</div><div style="font-size:11px;color:var(--muted)">Rações premium · EUA</div></div>
      <div style="text-align:right;min-width:90px"><div style="font-size:13px;font-weight:700;color:var(--amber)">R$98K</div><div style="font-size:10px;color:var(--muted)">volume mensal</div></div>
      <span class="tag tag-warn" style="flex-shrink:0">Revisão</span>
      <div style="text-align:right;min-width:60px;font-size:11px;color:var(--muted)">Prazo 60d</div>
    </div>
    <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);transition:border-color .2s" onmouseover="this.style.borderColor='rgba(255,255,255,.14)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
      <div class="av" style="width:42px;height:42px;font-size:14px;background:rgba(255,107,53,.15);color:#ff9c78">SY</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">Syngenta Agro</div><div style="font-size:11px;color:var(--muted)">Herbicidas e defensivos · Multinacional</div></div>
      <div style="text-align:right;min-width:90px"><div style="font-size:13px;font-weight:700;color:var(--warm)">R$94K</div><div style="font-size:10px;color:var(--muted)">volume mensal</div></div>
      <span class="tag tag-ok" style="flex-shrink:0">Ativo</span>
      <div style="text-align:right;min-width:60px;font-size:11px;color:var(--muted)">Prazo 30d</div>
    </div>
    <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);transition:border-color .2s" onmouseover="this.style.borderColor='rgba(255,255,255,.14)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
      <div class="av" style="width:42px;height:42px;font-size:14px;background:rgba(155,93,229,.13);color:var(--purple)">ZV</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">Zoetis Saúde Animal</div><div style="font-size:11px;color:var(--muted)">Medicamentos gerais · EUA</div></div>
      <div style="text-align:right;min-width:90px"><div style="font-size:13px;font-weight:700;color:var(--purple)">R$87K</div><div style="font-size:10px;color:var(--muted)">volume mensal</div></div>
      <span class="tag tag-ok" style="flex-shrink:0">Ativo</span>
      <div style="text-align:right;min-width:60px;font-size:11px;color:var(--muted)">Prazo 45d</div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- PAGE: NOVO PEDIDO                           -->
<!-- ═══════════════════════════════════════════ -->
<div class="page" id="p-novopedido">
  <div class="topbar au">
    <div class="topbar-left"><h1>Novo Pedido</h1><p>Preencha os dados para registrar</p></div>
    <div class="topbar-right"><span class="pill" onclick="nav('pedidos')">← Voltar</span></div>
  </div>

  <div class="g21 au" style="animation-delay:.1s">
    <div>
      <div class="card" style="margin-bottom:14px">
        <div class="card-title">Dados do Cliente</div>
        <div class="card-sub">Selecione ou cadastre um cliente</div>
        <div class="form-row">
          <div class="form-group"><div class="form-label">Cliente</div><select class="inp"><option>PetVida Distribuidora</option><option>AgroFértil Sul</option><option>CãoRio Pet Center</option><option>Terra Alta Insumos</option></select></div>
          <div class="form-group"><div class="form-label">Segmento</div><select class="inp"><option>Petshop</option><option>Agropecuária</option><option>Clínica Veterinária</option></select></div>
        </div>
        <div class="form-row">
          <div class="form-group"><div class="form-label">Condição Pagamento</div><select class="inp"><option>30 dias</option><option>60 dias</option><option>À vista</option><option>30/60/90</option></select></div>
          <div class="form-group"><div class="form-label">Tipo de Entrega</div><select class="inp"><option>Entrega normal (5-7d)</option><option>Entrega expressa (1-2d)</option><option>Retirada</option></select></div>
        </div>
        <div class="form-group"><div class="form-label">Observações</div><input class="inp" placeholder="Notas adicionais para o pedido..." style="width:100%"></div>
      </div>

      <div class="card" style="margin-bottom:14px">
        <div class="card-title">Itens do Pedido</div>
        <div class="card-sub">Adicione produtos ao pedido</div>
        <div style="display:flex;gap:8px;margin-bottom:12px">
          <select class="inp" style="flex:2"><option>Selecionar produto...</option><option>Vermífugo Caninus Pro</option><option>Antipulgas Frontline Plus</option><option>Vacina Polivalente Bovina</option><option>Ração Hills Science Diet 15kg</option><option>Ivermectina Injetável 1%</option><option>Herbicida Nativo 1L</option></select>
          <input class="inp" type="number" placeholder="Qtd" style="width:70px">
          <span class="pill pill-p">Adicionar</span>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.04)"><div><div style="font-size:13px;font-weight:600">Antipulgas Frontline Plus</div><div style="font-size:11px;color:var(--muted)">48 unidades · R$67,50/un</div></div><div style="font-weight:700;color:var(--accent)">R$3.240</div></div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.04)"><div><div style="font-size:13px;font-weight:600">Ração Hills Science Diet 15kg</div><div style="font-size:11px;color:var(--muted)">20 sacos · R$107/un</div></div><div style="font-weight:700;color:var(--accent)">R$2.140</div></div>
          <div style="display:flex;justify-content:space-between;padding:12px 0 0;border-top:1px solid rgba(0,229,160,.15);margin-top:4px"><span style="font-weight:700">Total do Pedido</span><span style="font-size:18px;font-weight:700;color:var(--accent);font-family:var(--font-d)">R$5.380</span></div>
        </div>
      </div>
    </div>

    <div>
      <div class="card" style="margin-bottom:14px">
        <div class="card-title">Resumo</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--muted)">Cliente</span><span style="font-weight:600">PetVida Distrib.</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--muted)">Itens</span><span style="font-weight:600">2 produtos</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--muted)">Subtotal</span><span style="font-weight:600">R$5.380</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--muted)">Frete</span><span style="font-weight:600">R$85</span></div>
          <div style="height:1px;background:var(--border);margin:4px 0"></div>
          <div style="display:flex;justify-content:space-between"><span style="font-weight:700">Total</span><span style="font-size:18px;font-weight:700;color:var(--accent);font-family:var(--font-d)">R$5.465</span></div>
        </div>
        <button style="width:100%;margin-top:14px;padding:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;border-radius:var(--rfull);color:#060a0f;font-weight:700;font-size:14px;cursor:pointer;font-family:var(--font-d)" onclick="nav('pedidos')">Confirmar Pedido</button>
      </div>

      <div class="card">
        <div class="card-title">Histórico do Cliente</div>
        <div class="card-sub">PetVida Distribuidora</div>
        <div style="display:flex;flex-direction:column;gap:0;margin-top:2px">
          <div class="tl-item">
            <div class="tl-dot" style="background:rgba(0,229,160,.12);color:var(--accent);font-size:12px">✓</div>
            <div><div style="font-size:12px;font-weight:600">#PD-4821 · R$3.240</div><div style="font-size:10px;color:var(--muted)">02/04/2026 · Entregue</div></div>
          </div>
          <div class="tl-item">
            <div class="tl-dot" style="background:rgba(0,229,160,.12);color:var(--accent);font-size:12px">✓</div>
            <div><div style="font-size:12px;font-weight:600">#PD-4808 · R$5.100</div><div style="font-size:10px;color:var(--muted)">25/03/2026 · Entregue</div></div>
          </div>
          <div class="tl-item" style="padding-bottom:0">
            <div class="tl-dot" style="background:rgba(0,229,160,.12);color:var(--accent);font-size:12px">✓</div>
            <div><div style="font-size:12px;font-weight:600">#PD-4795 · R$2.800</div><div style="font-size:10px;color:var(--muted)">18/03/2026 · Entregue</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `
  await loadChartJS(); 
  controla()

  return {
    slots: {
      sidebar: el.querySelector("#sidebar"),
      main: el.querySelector("#main")
    }
  }

}