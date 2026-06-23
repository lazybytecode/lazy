function injectStyles() {
  if (!document.getElementById("temas-styles")) {
    const style = document.createElement("style");
    style.id = "temas-styles";
    style.textContent = `

    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:var(--font-sans);font-size:14px;color:var(--color-text-primary); overflow-x: hidden;}
    .editor-wrap{display:grid;grid-template-columns:360px 1fr;min-height:600px;border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);overflow:hidden}
    .sidebar{background:var(--color-background-primary);border-right:0.5px solid var(--color-border-tertiary);display:flex;flex-direction:column;}
    .sidebar-header{padding:12px 16px;border-bottom:0.5px solid var(--color-border-tertiary);display:flex;flex-direction:column;gap:8px}
    .sidebar-header h2{font-size:15px;font-weight:500}
    .tabs{display:flex;gap:4px;flex-wrap:wrap}
    .tab{font-size:12px;padding:4px 10px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-secondary);background:transparent;cursor:pointer;color:var(--color-text-secondary);white-space:nowrap}
    .tab.active{background:var(--color-background-secondary);color:var(--color-text-primary);border-color:var(--color-border-primary)}
    .token-list{flex:1;overflow-y:auto;padding:8px}
    .token-row{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:var(--border-radius-md);margin-bottom:2px;border:0.5px solid transparent}
    .token-row:hover{background:var(--color-background-secondary)}
    .token-name{font-size:11px;color:var(--color-text-secondary);font-family:var(--font-mono);min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .token-val{flex:1;min-width:0}
    .token-val input[type=text]{width:100%;font-size:12px;padding:3px 7px;font-family:var(--font-mono)}
    .token-val input[type=color]{width:36px;height:28px;padding:2px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-tertiary);cursor:pointer;background:none}
    .color-wrap{display:flex;gap:4px;align-items:center}
    .color-wrap input[type=text]{flex:1;font-size:12px;padding:3px 7px;font-family:var(--font-mono)}
    .preview-pane{background:var(--color-background-secondary);display:flex;flex-direction:column;overflow:hidden}
    .preview-header{padding:10px 16px;background:var(--color-background-primary);border-bottom:0.5px solid var(--color-border-tertiary);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
    .preview-header span{font-size:13px;font-weight:500}
    .preview-sizes{display:flex;gap:4px}
    .sz-btn{font-size:11px;padding:3px 9px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-secondary);background:transparent;cursor:pointer;color:var(--color-text-secondary)}
    .sz-btn.active{background:var(--color-background-secondary);color:var(--color-text-primary)}
    .preview-scroll{flex:1;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:16px}
    iframe{border:none;border-radius:8px;box-shadow:0 2px 16px rgba(0,0,0,0.15);transition:width .3s;background:#0a0c10}
    .actions{padding:10px 16px;border-top:0.5px solid var(--color-border-tertiary);display:flex; justify-content: space-between; flex-wrap: wrap; gap:8px; width: 100%; overflow: hidden;}
    .btn-primary{font-size:13px;padding:6px 16px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-secondary);background:var(--color-background-secondary);cursor:pointer;color:var(--color-text-primary)}
    .btn-primary:hover{background:var(--color-background-tertiary)}
    .btn-danger{font-size:13px;padding:6px 16px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-secondary);background:transparent;cursor:pointer;color:var(--color-text-danger)}
    .section-label{font-size:10px;font-weight:500;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.06em;padding:8px 8px 4px;margin-top:4px}

    /* COLORS SWATCH */

    .swatches {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem 3rem;
      display: flex;
      gap: .75rem;
      flex-wrap: wrap;
    }

    .swatch {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
    }
    .swatch-dot {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-md);
      border: 1px solid var(--color-border);
    }
    .swatch span {
      font-size: var(--text-xs);
      color: var(--color-text-muted);
      text-align: center;
      max-width: 56px;
    }

    /* DIVIDER */
    .divider {
      border: none;
      border-top: 1px solid var(--color-border);
      max-width: var(--max-width);
      margin: 0 auto var(--space-6);
    }

    .idswa,
    .idswa2 
    {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 0rem;
      position: relative;
    }

    .routes-wrap{
      padding:10px;
      display:flex;
      flex-direction:column;
      gap:12px;
    }

    .route-card{
      border:1px solid var(--color-border-tertiary);
      border-radius:12px;
      padding:12px;
      display:flex;
      flex-direction:column;
      gap:8px;
      background:var(--color-background-primary);
    }

    .route-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:8px;
    }

    .route-card input,
    .route-card textarea{
      width:100%;
      padding:8px;
      border-radius:8px;
      border:1px solid var(--color-border-secondary);
      background:transparent;
      color:inherit;
      font-size:12px;
    }

    .route-actions{
      display:flex;
      gap:8px;
      margin-top:4px;
    }

    .route-btn{
      padding:7px 10px;
      border-radius:8px;
      border:1px solid var(--color-border-secondary);
      background:transparent;
      cursor:pointer;
      font-size:12px;
    }

    .route-remove{
      color:#ff5d5d;
    }

    .content-wrap{
      padding:10px;
      display:flex;
      flex-direction:column;
      gap:14px;
    }

    .content-page{
      border:1px solid var(--color-border-tertiary);
      border-radius:14px;
      overflow:hidden;
    }

    .content-page-head{
      padding:10px 12px;
      background:var(--color-background-secondary);
      border-bottom:1px solid var(--color-border-tertiary);
      display:flex;
      align-items:center;
      justify-content:space-between;
    }

    .content-page-title{
      font-size:13px;
      font-weight:600;
    }

    .content-layouts{
      padding:12px;
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .layout-card{
      border:1px solid var(--color-border-tertiary);
      border-radius:12px;
      padding:10px;
      display:flex;
      flex-direction:column;
      gap:8px;
    }

    .layout-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:8px;
    }

    .layout-card input,
    .layout-card textarea{
      width:100%;
      padding:8px;
      border-radius:8px;
      border:1px solid var(--color-border-secondary);
      background:transparent;
      color:inherit;
      font-size:12px;
    }

    .layout-actions{
      display:flex;
      gap:8px;
    }

    .layout-btn{
      padding:7px 10px;
      border-radius:8px;
      border:1px solid var(--color-border-secondary);
      background:transparent;
      cursor:pointer;
      font-size:12px;
    }

    .layout-remove{
      color:#ff5d5d;
    }

    .field-group{
      display:flex;
      flex-direction:column;
      gap:4px;
    }

    .field-group label{
      font-size:11px;
      color:var(--color-text-secondary);
      font-weight:500;
    }

    .sidebar
    {
      min-width: 350px;
    }

    .content-layouts{
      background: rgba(255,255,255,0.6);
      padding: 1rem;
      border: solid 1px rgba(255,255,255,0.8);
    }

    .layout-card{
      background: #f1f1f1;
      padding: 1rem;
    }

    .layout-card input,
    .layout-card textarea {
      background: rgba(255,255,255,0.6);
      border: solid 1px rgba(255,255,255,0.8);
    }
        
    `;
    document.head.appendChild(style);
  }
}

  let lightTokens = {};

  let appConfig = {
    routes: [],
    content: {}
  };

  const DEFAULTS = {
    brand:[
      ['--brand-name','"Pet<i>AI</i>"'],
      ['--logo-size','2.3rem'],
    ],
    cores:[
      ['--color-bg','#0a0c10'],
      ['--color-surface','#111318'],
      ['--color-surface-2','#13151f'],
      ['--color-border','#1e2130'],
      ['--color-border-hover','rgba(230,190,190,0.18)'],
      ['--color-muted','#5a607a'],
      ['--color-amber','#f39c12'],
      ['--color-accent','#00e5a0'],
      ['--color-accent-rgb','0,229,160'],
      ['--color-accent-2','#005eff'],
      ['--color-accent-2-rgb','0,94,255'],
      ['--color-accent-warm','#ff6b35'],
      ['--color-text','#f0f2f8'],
      ['--color-text-muted','#7b8099'],
      ['--color-text-faint','#3a3f56'],
    ],
    tipografia:[
      ['--font-display',"'Sora', sans-serif"],
      ['--font-body',"'DM Sans', sans-serif"],
      ['--text-xs','0.75rem'],
      ['--text-sm','0.875rem'],
      ['--text-base','1rem'],
      ['--text-lg','1.125rem'],
      ['--text-xl','1.25rem'],
      ['--text-2xl','1.5rem'],
      ['--text-3xl','1.875rem'],
      ['--text-4xl','2.25rem'],
      ['--text-5xl','3rem'],
      ['--text-6xl','3.75rem'],
      ['--text-7xl','4.5rem'],
    ],
    espacamento:[
      ['--space-1','0.25rem'],
      ['--space-2','0.5rem'],
      ['--space-3','0.75rem'],
      ['--space-4','1rem'],
      ['--space-6','1.5rem'],
      ['--space-8','2rem'],
      ['--space-12','3rem'],
      ['--space-16','4rem'],
      ['--space-24','6rem'],
      ['--space-32','8rem'],
    ],
    bordas:[
      ['--radius-sm','6px'],
      ['--radius-md','12px'],
      ['--radius-lg','20px'],
      ['--radius-xl','32px'],
      ['--radius-full','9999px'],
    ],
    sombras:[
      ['--shadow-glow','0 0 40px rgba(var(--color-accent-rgb),0.25)'],
      ['--shadow-card','0 4px 24px rgba(0,0,0,0.4),0 1px 2px rgba(0,0,0,0.6)'],
      ['--shadow-float','0 20px 60px rgba(0,0,0,0.5)'],
    ],
    animacoes:[
      ['--ease-spring','cubic-bezier(0.34,1.56,0.64,1)'],
      ['--ease-out','cubic-bezier(0.22,1,0.36,1)'],
      ['--dur-fast','200ms'],
      ['--dur-med','400ms'],
      ['--dur-slow','700ms'],
    ],
    layout:[
      ['--max-width','1200px'],
      ['--nav-height','72px'],
    ],
    textos:[
      ['--cta-primary','"Começar grátis"'],
      ['--cta-secondary','"Ver demo"'],
      ['--hero-tag','"Plataforma #1 em produtividade"'],
      ['--hero-title','"Escale seu negócio sem limites"'],
      ['--hero-sub','"A plataforma inteligente que automatiza, analisa e acelera cada etapa da sua operação."'],
    ],
    content:[
      ['brand-slogan','Texto Slogan'],
      ['brand-icone','P'],

      ['hero-title','Escale seu negócio sem limites'],
      ['hero-sub','A plataforma inteligente que automatiza...'],
      ['hero-tag','Plataforma #1 em produtividade'],

      ['cta-primary','Começar grátis'],
      ['cta-secondary','Ver demo']
    ],
    config: [
      ['routes', 'Routes'],
      ['content', 'Content']
    ],
    routes:[
      ['routes','routes']
    ],
    content:[
      ['content','content']
    ],
  };

  let currentTheme = 'dark';

  const LIGHT_OVERRIDES = {
    '--color-bg':'#f5f6fa',
    '--color-surface':'#ffffff',
    '--color-surface-2':'#eef0f7',
    '--color-border':'#dde0ee',
    '--color-text':'#161926',
    '--color-text-muted':'#5a607a',
    '--color-text-faint':'#adb3cc',
    '--color-accent':'#00b87a',
    '--color-accent-2':'#0050e0',
    '--color-accent-warm':'#e84e1b',
    '--color-amber':'#e08b00'
  };

  const DEFAULT_JSON = {
    routes: [
      {
        "path": "/",
        "view": "home",
        "title": "Home Cliente 1"
      },

      {
        "path": "/home",
        "view": "home",
        "title": "Home Cliente 1"
      },

      {
        "path": "/login",
        "view": "login",
        "title": "Conecte-se"
      },

      {
        "path": "/dashboard",
        "view": "dashboard",
        "title": "Painel",
        "resolverKey": "dashboard"
      },

      {
        "path": "/temas",
        "view": "dashboard",
        "title": "Editor de Temas",
        "resolverKey": "temas"
      },

      {
        "path": "/tenant",
        "view": "dashboard",
        "title": "Tenant",
        "resolverKey": "tenant",
        "roles": ["admin"]
      },

      {
        "path": "/dbml",
        "view": "dashboard",
        "title": "DBML Editor",
        "resolverKey": "dbml"
      },

      {
        "path": "/estoque",
        "view": "dashboard",
        "title": "Estoque",
        "resolverKey": "estoque",
        "roles": ["admin"]
      }
    ],   // seu JSON original
    content: {
      "login": {
            "layout": [

                {
                    "id": "login-form",
                    "component": "LoginForm",
                    "type": "append:#content",
                    "props": {
                        "icon": "P"
                    }
                }

            ]
        },

        "home": {
            "layout": [

                {
                    "id": "nav",
                    "component": "Nav",
                    "type": "slot:topo"
                },

                {
                    "id": "nav-links",
                    "component": "Nav_links",
                    "type": "append:#navLinks",
                    "props": {
                        "links": {
                            "Home": { "href": "/" }
                        }
                    }
                },

                {
                    "id": "theme-switch",
                    "component": "Switch",
                    "type": "append:#tswitch"
                },

                {
                    "id": "hero",
                    "component": "Hero",
                    "type": "slot:hero",
                    "props": {
                        "titulo": "Escale seu negócio",
                        "sub": "Automatize e cresça",
                        "upline": "Automatize e cresça"
                    }
                }

            ]
        },

        "dashboard": {
          "layout": [
            {
              "id": "sidebar",
              "component": "Nav_links",
              "type": "slot:sidebar",
              "static": true,
              "props": {
                "links": {
                    "lazybyte - DEV": { "classe":"sb-group" },
                    "": { "classe":"sb-sep" },
                    "Dashboard": { "page": "/dashboard", "icon": "⬡", "classe":"sb-item" },
                    "Tenant": { "page": "/tenant", "icon": "⬡", "classe":"sb-item" },
                    "Editor de Temas": { "page": "/temas", "icon": "⬡", "classe":"sb-item" },
                    "DBML Editor": { "page": "/dbml", "icon": "⬡", "classe":"sb-item" },
                    "Estoque": { "page": "/estoque", "icon": "⬡", "badge": 5, "classe":"sb-item" }
                  }
              }
            },

            {
              "id": "main",
              "component": "_telas/dashboard",
              "type": "slot:main",
              "resolver": {
                "type": "route",
                "map": {
                  "dashboard": "_telas/dashboard",
                  "tenant": "_telas/tenant",
                  "dbml": "_telas/dbml",
                  "temas": "_telas/temas"

                }
              }
            }

          ]
        }
      }
  };

  function getToken(name){
    if(currentTheme === 'light'){
      return lightTokens[name] || tokens[name];
    }
    return tokens[name];
}

  const LABELS = {brand:'Brand',cores:'Cores',tipografia:'Tipografia',espacamento:'Espaçamento',bordas:'Bordas',sombras:'Sombras',animacoes:'Animações',layout:'Layout',textos:'Textos CTA', content:'Conteúdo', routes:'Routes',content:'Content', config: 'Config (JSON)',};

  let tokens = {};
  let activeTab = 'cores';


export function isColor(v){return /^#[0-9a-f]{3,8}$/i.test(v.trim())}

export function loadTokens(){
  const saved = localStorage.getItem('petai_design_tokens');
  const savedLight = localStorage.getItem('petai_design_tokens_light');
  const savedConfig = localStorage.getItem('petai_app_config');

  if (savedConfig) {
    appConfig = JSON.parse(savedConfig);
  } else {
    appConfig = {
      routes: JSON.parse(JSON.stringify(DEFAULT_JSON.routes || [])),
      content: JSON.parse(JSON.stringify(DEFAULT_JSON.content || {}))
    };
  }

  if(saved){
    tokens = JSON.parse(saved);
  } else {
    Object.keys(DEFAULTS).forEach(k=>{
      DEFAULTS[k].forEach(([n,v])=>{tokens[n]=v;});
    });
  }

  if(!saved){
    Object.keys(DEFAULTS).forEach(k=>{
      DEFAULTS[k].forEach(([n,v])=>{
        tokens[n]=v;
      });
    });
  }

  if(savedLight){
    lightTokens = JSON.parse(savedLight);
  } else {
    lightTokens = {...LIGHT_OVERRIDES};
  }
}

export function saveTokens(){
  localStorage.setItem('petai_design_tokens', JSON.stringify(tokens));
  localStorage.setItem('petai_design_tokens_light', JSON.stringify(lightTokens));
  localStorage.setItem('petai_app_config', JSON.stringify(appConfig));

  const btn=document.querySelector('.btn-primary');
  const orig=btn.textContent;
  btn.textContent='Salvo!';
  setTimeout(()=>btn.textContent=orig,1200);

  updatePreview();
}

export function resetTokens(){
  Object.keys(DEFAULTS).forEach(k=>{DEFAULTS[k].forEach(([n,v])=>{tokens[n]=v;});});
  localStorage.removeItem('petai_design_tokens');
  renderTab(activeTab);
  updatePreview();
}

export function exportCSS(){
  let css=':root {\n';
  Object.keys(tokens).forEach(k=>{css+=`  ${k}: ${tokens[k]};\n`;});
  css+='}';
  const b=document.createElement('a');
  b.href='data:text/css;charset=utf-8,'+encodeURIComponent(css);
  b.download='design-tokens.css';b.click();
}

export function exportJSON() {
  const json = {
    design_pattern: {
      theme: {
        dark: {},
        light: {}
      }
    },
    routes: appConfig.routes || [],
    content: appConfig.content || {}
  };

  // monta theme.dark (tokens)
  Object.keys(tokens).forEach(k => {
    json.design_pattern.theme.dark[k.replace(/^--/, '')] = tokens[k];
  });

  // monta theme.light
  Object.keys(lightTokens).forEach(k => {
    json.design_pattern.theme.light[k.replace(/^--/, '')] = lightTokens[k];
  });

  const blob = new Blob([JSON.stringify(json, null, 2)], {
    type: 'application/json'
  });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'theme-export.json';
  a.click();
}

export function renderTabs(){
  const el=document.getElementById('tabs');
  el.innerHTML='';
  Object.keys(DEFAULTS).forEach(k=>{
    const b=document.createElement('button');
    b.className='tab'+(k===activeTab?' active':'');
    b.textContent=LABELS[k];
    b.onclick=()=>{activeTab=k;renderTabs();renderTab(k);};
    el.appendChild(b);
  });
}

export function renderTab(tab){
  const el=document.getElementById('tokenList');
  el.innerHTML='';

  if (tab === 'config') {
    const el = document.getElementById('tokenList');

    const pre = document.createElement('textarea');
    pre.style.width = '100%';
    pre.style.height = '500px';
    pre.style.fontFamily = 'monospace';
    pre.value = JSON.stringify(appConfig, null, 2);

    pre.oninput = () => {
      try {
        appConfig = JSON.parse(pre.value);
        updatePreview();
      } catch (e) {}
    };

    el.appendChild(pre);
    return;
  }

  if(tab === 'routes'){
    renderRoutesEditor();
    return;
  }

  if(tab === 'content'){
    renderContentEditor();
    return;
  }
  
  DEFAULTS[tab].forEach(([name])=>{

    const val = currentTheme === 'light'
      ? (lightTokens[name] || tokens[name])
      : tokens[name];

    const row=document.createElement('div');
    row.className='token-row';

    const nm=document.createElement('div');
    nm.className='token-name';
    nm.title=name;
    nm.textContent=name;

    const vw=document.createElement('div');
    vw.className='token-val';

    if(isColor(val)){
      const wrap=document.createElement('div');
      wrap.className='color-wrap';
      const cp=document.createElement('input');
      cp.type='color';cp.value=val;
      const ti=document.createElement('input');
      ti.type='text';ti.value=val;

      cp.oninput = () => {
        ti.value = cp.value;

        if(currentTheme === 'light'){
          lightTokens[name] = cp.value;
        } else {
          tokens[name] = cp.value;
        }

        updatePreview();
        updateSwatches();
      };

      ti.oninput = () => {
        if(isColor(ti.value)) cp.value = ti.value;

        if(currentTheme === 'light'){
          lightTokens[name] = ti.value;
        } else {
          tokens[name] = ti.value;
        }

        updatePreview();
        updateSwatches();

      };

      wrap.appendChild(cp);wrap.appendChild(ti);
      vw.appendChild(wrap);
    } else {
      const ti=document.createElement('input');
      ti.type='text';ti.value=val;
      ti.oninput=()=>{tokens[name]=ti.value;updatePreview();};
      vw.appendChild(ti);
    }
    row.appendChild(nm);row.appendChild(vw);
    el.appendChild(row);
  });

}

function renderRoutesEditor(){

  const el = document.getElementById('tokenList');

  el.innerHTML = '';

  const wrap = document.createElement('div');

  wrap.className = 'routes-wrap';

  (appConfig.routes || []).forEach((route, index) => {

    const card = document.createElement('div');

    card.className = 'route-card';

    card.innerHTML = `

      <div class="route-grid">

        <div class="field-group">
          <label>Path</label>
          <input 
            data-field="path"
            value="${route.path || ''}"
          />
        </div>

        <div class="field-group">
          <label>View</label>
          <input 
            data-field="view"
            value="${route.view || ''}"
          />
        </div>

        <div class="field-group">
          <label>Title</label>
          <input 
            data-field="title"
            value="${route.title || ''}"
          />
        </div>

        <div class="field-group">
          <label>Resolver Key</label>
          <input 
            data-field="resolverKey"
            value="${route.resolverKey || ''}"
          />
        </div>

      </div>

      <div class="field-group">
        <label>Roles (JSON Array)</label>
        <textarea 
          data-field="roles"
          rows="2"
        >${JSON.stringify(route.roles || [])}</textarea>
      </div>

      <div class="route-actions">

        <button class="route-btn route-remove">
          Remover
        </button>

      </div>

    `;

    // INPUTS
    card.querySelectorAll('input').forEach(input => {

      input.addEventListener('input', () => {

        const field = input.dataset.field;

        appConfig.routes[index][field] = input.value;

      });

    });

    // ROLES
    const rolesEl = card.querySelector('[data-field="roles"]');

    rolesEl.addEventListener('input', () => {

      try{

        appConfig.routes[index].roles =
          JSON.parse(rolesEl.value);

      }catch(e){}

    });

    // REMOVE
    card.querySelector('.route-remove')
      .addEventListener('click', () => {

        appConfig.routes.splice(index, 1);

        renderRoutesEditor();

      });

    wrap.appendChild(card);

  });

  // ADD BUTTON
  const add = document.createElement('button');

  add.className = 'route-btn';

  add.textContent = '+ Adicionar rota';

  add.onclick = () => {

    appConfig.routes.push({
      path:'',
      view:'',
      title:'',
      resolverKey:''
    });

    renderRoutesEditor();

  };

  wrap.appendChild(add);

  el.appendChild(wrap);

}

function renderContentEditor(){

  const el = document.getElementById('tokenList');

  el.innerHTML = '';

  const wrap = document.createElement('div');

  wrap.className = 'content-wrap';

  Object.entries(appConfig.content || {}).forEach(([pageKey, page]) => {

    const pageEl = document.createElement('div');

    pageEl.className = 'content-page';

    pageEl.innerHTML = `
      <div class="content-page-head">
        <div class="content-page-title">${pageKey}</div>

        <button class="layout-btn add-layout">
          + Layout
        </button>
      </div>

      <div class="content-layouts"></div>
    `;

    const layoutsWrap = pageEl.querySelector('.content-layouts');

    (page.layout || []).forEach((layout, index) => {

      const card = document.createElement('div');

      card.className = 'layout-card';

      card.innerHTML = `

        <div class="layout-grid">

          <div class="field-group">
            <label>ID</label>
            <input
              data-field="id"
              value="${layout.id || ''}"
            />
          </div>

          <div class="field-group">
            <label>Component</label>
            <input
              data-field="component"
              value="${layout.component || ''}"
            />
          </div>

          <div class="field-group">
            <label>Type</label>
            <input
              data-field="type"
              value="${layout.type || ''}"
            />
          </div>

        <div class="field-group">
          <label>Resolver (JSON)</label>
          <textarea
            data-field="resolver"
            rows="4"
          >${JSON.stringify(layout.resolver || {}, null, 2)}</textarea>
        </div>

        </div>

        <textarea
          data-field="props"
          rows="5"
          placeholder='{"titulo":"Hero"}'
        >${JSON.stringify(layout.props || {}, null, 2)}</textarea>

        <div class="field-group">
          <label>Props (JSON)</label>
          <textarea
            data-field="props"
            rows="5"
          >${JSON.stringify(layout.props || {}, null, 2)}</textarea>
        </div>

        <div class="layout-actions">

          <button class="layout-btn layout-remove">
            Remover
          </button>

        </div>

      `;

      // INPUTS
      card.querySelectorAll('input').forEach(input => {

        input.addEventListener('input', () => {

          const field = input.dataset.field;

          appConfig.content[pageKey]
            .layout[index][field] = input.value;

        });

      });

      // PROPS
      const propsEl = card.querySelector('[data-field="props"]');

      propsEl.addEventListener('input', () => {

        try{

          appConfig.content[pageKey]
            .layout[index].props =
              JSON.parse(propsEl.value);

        }catch(e){}

      });

      // RESOLVER
      const resolverEl =
        card.querySelector('[data-field="resolver"]');

      resolverEl.addEventListener('input', () => {

        try{

          appConfig.content[pageKey]
            .layout[index].resolver =
              JSON.parse(resolverEl.value);

        }catch(e){}

      });

      // REMOVE
      card.querySelector('.layout-remove')
        .addEventListener('click', () => {

          appConfig.content[pageKey]
            .layout.splice(index, 1);

          renderContentEditor();

        });

      layoutsWrap.appendChild(card);

    });

    // ADD LAYOUT
    pageEl.querySelector('.add-layout')
      .addEventListener('click', () => {

        appConfig.content[pageKey]
          .layout.push({
            id:'',
            component:'',
            type:'',
            props:{}
          });

        renderContentEditor();

      });

    wrap.appendChild(pageEl);

  });

  // ADD PAGE
  const addPage = document.createElement('button');

  addPage.className = 'layout-btn';

  addPage.textContent = '+ Adicionar página';

  addPage.onclick = () => {

    const name = prompt('Nome da página');

    if(!name) return;

    appConfig.content[name] = {
      layout:[]
    };

    renderContentEditor();

  };

  wrap.appendChild(addPage);

  el.appendChild(wrap);

}

export function setSize(w,btn){
  document.getElementById('preview').style.width=w;
  document.querySelectorAll('a').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

export function toggleTheme(btn){
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  updatePreview();
}

export function buildPreviewHTML(){
  const t=tokens;
  const brand=(t['--brand-name']||'PetAI').replace(/"/g,'').replace(/<i>(.*?)<\/i>/,'<i>$1</i>');
  const ctaPri=(t['--cta-primary']||'').replace(/"/g,'');
  const ctaSec=(t['--cta-secondary']||'').replace(/"/g,'');
  const heroTag=(t['--hero-tag']||'').replace(/"/g,'');
  const heroTitle=(t['--hero-title']||'').replace(/"/g,'');
  const heroSub=(t['--hero-sub']||'').replace(/"/g,'');
  const navH=t['--nav-height']||'72px';
  const rMd=t['--radius-md']||'12px';
  const rFull=t['--radius-full']||'9999px';
  const fontD=t['--font-display']||"'Sora',sans-serif";
  const fontB=t['--font-body']||"'DM Sans',sans-serif";
  const logoSz=t['--logo-size']||'2.3rem';
  const accent=getToken('--color-accent')||'#00e5a0';
  const accent2=getToken('--color-accent-2')||'#005eff';
  const bg=getToken('--color-bg')||'#0a0c10';
  const surf=getToken('--color-surface')||'#111318';
  const border=getToken('--color-border')||'#1e2130';
  const text=getToken('--color-text')||'#f0f2f8';
  const muted=getToken('--color-text-muted')||'#7b8099';
  const amber=getToken('--color-amber')||'#f39c12';
  const accentWarm=getToken('--color-accent-warm')||'#ff6b35';

  const routes = appConfig.routes || [];
  const content = appConfig.content || {};

  return `<!DOCTYPE html><html><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:${bg};color:${text};font-family:${fontB};min-height:100vh; overflow-x: hidden;}
a{color:inherit;text-decoration:none}
nav{height:${navH};background:${surf};border-bottom:1px solid ${border};display:flex;align-items:center;justify-content:space-between;padding:0 2rem;position:sticky;top:0;z-index:10}
.logo{font-family:${fontD};font-size:${logoSz};font-weight:700;background:linear-gradient(135deg,${accent},${accent2});-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:1.5rem;font-size:.9rem;color:${muted}}
.nav-cta{background:linear-gradient(135deg,${accent},${accent2});color:#000;padding:.5rem 1.2rem;border-radius:${rFull};font-weight:600;font-size:.875rem}
.hero{padding:5rem 2rem 4rem;text-align:center;background:radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,160,.15) 0%, transparent 70%)}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(0,229,160,.1);border:1px solid rgba(0,229,160,.25);color:${accent};padding:.35rem 1rem;border-radius:${rFull};font-size:.8rem;margin-bottom:1.5rem}
.hero h1{font-family:${fontD};font-size:clamp(2rem,5vw,3.5rem);font-weight:700;line-height:1.15;margin-bottom:1.25rem;max-width:700px;margin-inline:auto}
.hero p{color:${muted};font-size:1.05rem;max-width:540px;margin:0 auto 2.5rem;line-height:1.7}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn-pri{background:linear-gradient(135deg,${accent},${accent2});color:#000;padding:.75rem 1.75rem;border-radius:${rFull};font-weight:600;font-size:.9rem}
.btn-sec{background:transparent;border:1px solid ${border};color:${text};padding:.75rem 1.75rem;border-radius:${rFull};font-size:.9rem}
.features{padding:4rem 2rem;max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem}
.card{background:linear-gradient(160deg,${surf} 0%,${bg} 100%);border:1px solid ${border};border-radius:${rMd};padding:1.5rem}
.card-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;font-size:1.1rem}
.card h3{font-family:${fontD};font-size:1.05rem;font-weight:600;margin-bottom:.5rem}
.card p{color:${muted};font-size:.875rem;line-height:1.6}
.badge-green{background:rgba(0,229,160,.12);color:${accent}}
.badge-blue{background:rgba(0,94,255,.12);color:${accent2}}
.badge-warm{background:rgba(255,107,53,.12);color:${accentWarm}}
.stats{padding:3rem 2rem;background:${surf};border-top:1px solid ${border};border-bottom:1px solid ${border}}
.stats-inner{max-width:800px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;text-align:center}
.stat-val{font-family:${fontD};font-size:2rem;font-weight:700;background:linear-gradient(135deg,${accent},${accent2});-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-lbl{color:${muted};font-size:.85rem;margin-top:.25rem}
footer{padding:1.5rem 2rem;text-align:center;color:${muted};font-size:.8rem;border-top:1px solid ${border}}
</style></head><body>
<nav>
  <div class="logo">${brand}</div>
  <div class="nav-links"><span>Produto</span><span>Preços</span><span>Blog</span></div>
  <a class="nav-cta" href="#">${ctaPri}</a>
</nav>
<section class="hero">
  <div class="hero-tag">✦ ${heroTag}</div>
  <h1>${heroTitle}</h1>
  <p>${heroSub}</p>
  <div class="hero-btns">
    <a class="btn-pri" href="#">${ctaPri}</a>
    <a class="btn-sec" href="#">${ctaSec}</a>
  </div>
</section>
<section class="features">
  <div class="card"><div class="card-icon badge-green">⚡</div><h3>Automação inteligente</h3><p>Workflows automáticos que se adaptam ao seu negócio em tempo real.</p></div>
  <div class="card"><div class="card-icon badge-blue">📊</div><h3>Analytics avançado</h3><p>Dashboards com insights acionáveis e métricas que importam.</p></div>
  <div class="card"><div class="card-icon badge-warm">🔗</div><h3>Integrações nativas</h3><p>Conecte com mais de 200 ferramentas sem uma linha de código.</p></div>
</section>
<section class="stats">
  <div class="stats-inner">
    <div><div class="stat-val">98%</div><div class="stat-lbl">Satisfação</div></div>
    <div><div class="stat-val">10x</div><div class="stat-lbl">Mais rápido</div></div>
    <div><div class="stat-val">50k+</div><div class="stat-lbl">Usuários</div></div>
  </div>
</section>
<footer>© 2025 ${brand.replace(/<[^>]+>/g,'')} — Todos os direitos reservados</footer>
</body></html>`;
}

export function updatePreview(){
  const iframe=document.getElementById('preview');
  const html=buildPreviewHTML();
  const blob=new Blob([html],{type:'text/html'});
  const old=iframe.src;
  if(old&&old.startsWith('blob:'))URL.revokeObjectURL(old);
  iframe.src=URL.createObjectURL(blob);
  updateSwatches();
}

function updateSwatches(){

    const map = [
      ['bg','--color-bg'],
      ['surface','--color-surface'],
      ['surface-2','--color-surface-2'],
      ['border','--color-border'],
      ['text','--color-text'],
      ['muted','--color-text-muted'],
      ['faint','--color-text-faint'],
      ['accent','--color-accent'],
      ['accent-2','--color-accent-2'],
      ['warm','--color-accent-warm'],
      ['amber','--color-amber'],
    ];

    const lightWrap = document.querySelector('.idswa');
    const darkWrap  = document.querySelector('.idswa2');

    if(!lightWrap || !darkWrap) return;

    const lightDots = lightWrap.querySelectorAll('.swatch-dot');
    const darkDots  = darkWrap.querySelectorAll('.swatch-dot');

    map.forEach(([label, token], i) => {

      // DARK
      const darkVal = tokens[token];
      if(darkDots[i]) darkDots[i].style.background = darkVal;

      // LIGHT
      const lightVal = lightTokens[token] || tokens[token];
      if(lightDots[i]) lightDots[i].style.background = lightVal;

    });

  }

export async function render(el, props = {}, content, config, ctx = {}) {

    injectStyles()

    el.innerHTML = `
      <div class="editor-wrap">
        <div id="side" class="sidebar sb">
          <div class="sidebar-header">
            <h2>Design Tokens</h2>
            <div class="tabs" id="tabs"></div>
          </div>
          <div class="token-list" id="tokenList"></div>
          <div class="actions">
            <a href="javascript:;" class="sb-item" onclick="saveTokens()">Salvar</a>
            <a href="javascript:;" class="sb-item" onclick="resetTokens()">Resetar CSS</a>
            <a href="javascript:;" class="sb-item" onclick="exportJSON()">Exportar JSON</a>
            <a href="javascript:;" class="sb-item" onclick="exportCSS()">Exportar CSS</a>
          </div>
        </div>
        <div class="preview-pane">
          <div class="preview-header">
            <span>Pré-visualização</span>
            <div class="preview-sizes">
              <a href="javascript:;" class="sb-item" >Dark/Light</a>
              <a href="javascript:;" class="sb-item" >Desktop</a>
              <a href="javascript:;" class="sb-item" >Tablet</a>
              <a href="javascript:;" class="sb-item" >Mobile</a>
            </div>
          </div>
          <div class="preview-scroll"><iframe style="overflow-x: hidden;" id="preview" width="100%" height="520"></iframe></div>
      
          <hr class="divider">

          <div class="idswa">

            <!-- SWATCHES -->
            <div class="section-label">
              <h2>Paleta de cores — tema light</h2>
              <p>Tokens de cor adaptados para fundo claro</p>
            </div>
            <div class="swatches">
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-bg)"></div><span>bg</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-surface)"></div><span>surface</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-surface-2)"></div><span>surface-2</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-border)"></div><span>border</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-text)"></div><span>text</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-text-muted)"></div><span>muted</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-text-faint)"></div><span>faint</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-accent)"></div><span>accent</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-accent-2)"></div><span>accent-2</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-accent-warm)"></div><span>warm</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-amber)"></div><span>amber</span></div>
            </div>
          </div>

          <div class="idswa2">

            <!-- SWATCHES -->
            <div class="section-label">
              <h2>Paleta de cores — tema dark</h2>
              <p>Tokens de cor adaptados para fundo escuro</p>
            </div>
            <div class="swatches">
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-bg)"></div><span>bg</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-surface)"></div><span>surface</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-surface-2)"></div><span>surface-2</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-border)"></div><span>border</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-text)"></div><span>text</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-text-muted)"></div><span>muted</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-text-faint)"></div><span>faint</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-accent)"></div><span>accent</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-accent-2)"></div><span>accent-2</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-accent-warm)"></div><span>warm</span></div>
              <div class="swatch"><div class="swatch-dot" style="background:var(--color-amber)"></div><span>amber</span></div>
            </div>
          </div>

        </div>
      </div>

    `

    loadTokens();
    renderTabs();
    renderTab(activeTab);
    updatePreview();

    document.querySelectorAll('a.sb-item').forEach(el => {
      el.addEventListener('click', function() {

        switch( el.textContent )
        {
          case "Desktop" : setSize('100%', this);
          break

          case "Tablet" : setSize('768px', this);
          break

          case "Mobile" : setSize('375px', this);
          break

          case "Salvar" : saveTokens();
          break

          case "Exportar CSS" : exportCSS();
          break

           case "Exportar JSON" : exportJSON();
          break

          case "Resetar CSS" : resetTokens();
          break

          case "Dark/Light":
            toggleTheme(this);
          break;
        }


      });
    });
    
    function applySwatchesTheme(){

        const dark = document.querySelector('.idswa2');
        const light = document.querySelector('.idswa');

        if(!dark || !light) return;

        Object.keys(tokens).forEach(key => {

          // DARK
          dark.style.setProperty(key, tokens[key]);

          // LIGHT (agora editável!)
          light.style.setProperty(
            key,
            lightTokens[key] || tokens[key]
          );

        });

      }

    applySwatchesTheme();
    updateSwatches();

    console.log( props )


    // return {
    //   slots: {
    //     logo: el.querySelector("#logo"),
    //     sub: el.querySelector("#slogan"),
    //     icon: el.querySelector("#logo-icon")
    //   }
    // }
    
}

