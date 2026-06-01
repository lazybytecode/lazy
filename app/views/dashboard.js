import { brand } from '/modules/brand.js'

function injectStyles() {
  if (!document.getElementById("dashboard-styles")) {
    const style = document.createElement("style");
    style.id = "dashboard-styles";
    style.textContent = `

:root {
  --bg:#0a0c10;--surface:#111318;--surface2:#13151f;--surface3:#1a1d28;
  --border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.12);
  --text:#f0f2f8;--muted:#7b8099;--faint:#3a3f56;
  --accent:#00e5a0;--accent2:#005eff;--warm:#ff6b35;--amber:#f39c12;--pink:#e84393;--purple:#9b5de5;
  --font:'DM Sans',sans-serif;--font-d:'Syne',sans-serif;
  --r:16px;--rsm:10px;--rfull:9999px;
}
  
*{box-sizing:border-box;margin:0;padding:0;}
body{background:var(--bg);color:var(--text);font-family:var(--font);font-size:13px;line-height:1.6;}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes spin{to{transform:rotate(360deg)}}
.au{animation:fadeUp .4s ease backwards;}

h1 { text-transform: capitalize; }

a { text-decoration: none; }

.layout{display:flex;min-height:100vh;}

#app {
    padding: 0;
}

#logo
{ 
    font-size: var( --logo-size );
    text-align: center;
    width: 100%;
}

#slogan { text-indent: .5rem; }

/* ── Sidebar ── */
.sb{width:216px;flex-shrink:0;background:var(--surface);border-right:1px solid var(--border);display:flex;flex-direction:column;padding:20px 0;position:sticky;top:0;height:100vh;}
.sb-logo{font-family:var(--font-d);font-size:19px;font-weight:800;letter-spacing:-.02em;padding:0 18px 20px;border-bottom:1px solid var(--border);margin-bottom:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.sb-logo span{font-size:10px;display:block;-webkit-text-fill-color:var(--muted);font-weight:400;letter-spacing:.09em;text-transform:uppercase;font-family:var(--font);}
.sb-group{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--faint);padding:10px 18px 6px;font-weight:600;}
.sb-item{display:flex;align-items:center;gap:9px;padding:9px 18px;margin:1px 10px;border-radius:var(--rsm);color:var(--muted);font-size:12px;font-weight:500;cursor:pointer;transition:all .18s;border:1px solid transparent;}
.sb-item:hover{color:var(--text);background:var(--surface2);}
.sb-item.active{color:var(--accent);background:rgba(0,229,160,.08);border-color:rgba(0,229,160,.18);}
.sb-icon{width:16px;text-align:center;font-size:14px;}
.sb-sep{height:1px;background:var(--border);margin:10px 18px;}
.sb-badge{margin-left:auto;background:rgba(255,107,53,.15);color:var(--warm);font-size:10px;font-weight:700;padding:1px 7px;border-radius:var(--rfull);}

/* ── Main ── */
.main{flex:1;min-width:0;padding:26px 30px 48px;}

/* ── Page ── */
.page{display:none;}.page.active{display:block;}


/* ── Grid helpers ── */
.g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;}
.g3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;}
.g4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;}
.g21{display:grid;grid-template-columns:2fr 1fr;gap:14px;}
.g12{display:grid;grid-template-columns:1fr 2fr;gap:14px;}
.g31{display:grid;grid-template-columns:3fr 1fr;gap:14px;}

/* ── Card ── */
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:20px 22px;transition:border-color .2s;}
.card:hover{border-color:var(--border2);}
.card-title{font-size:14px;font-weight:600;margin-bottom:3px;}
.card-sub{font-size:11px;color:var(--muted);margin-bottom:16px;}

/* ── KPI ── */
.kpi{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:18px 20px 14px;position:relative;overflow:hidden;transition:all .2s;cursor:default;}
.kpi:hover{border-color:var(--border2);transform:translateY(-2px);}
.kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--c,var(--accent));}
.kpi-lbl{font-size:10px;text-transform:uppercase;letter-spacing:.09em;color:var(--muted);margin-bottom:7px;font-weight:600;}
.kpi-val{font-family:var(--font-d);font-size:26px;font-weight:700;letter-spacing:-.02em;}
.kpi-sub{font-size:11px;color:var(--muted);margin-top:5px;display:flex;align-items:center;gap:5px;}
.up{background:rgba(0,229,160,.13);color:var(--accent);font-size:10px;font-weight:700;padding:2px 7px;border-radius:var(--rfull);}
.dn{background:rgba(255,107,53,.13);color:var(--warm);font-size:10px;font-weight:700;padding:2px 7px;border-radius:var(--rfull);}
.warn{background:rgba(243,156,18,.13);color:var(--amber);font-size:10px;font-weight:700;padding:2px 7px;border-radius:var(--rfull);}

/* ── Table ── */
.tbl-wrap{border-radius:var(--r);border:1px solid var(--border);overflow:hidden;background:var(--surface);}
.tbl-head{padding:16px 20px 12px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);}
.tbl-head h3{font-size:14px;font-weight:600;}
table{width:100%;border-collapse:collapse;}
th{font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);padding:9px 20px;text-align:left;font-weight:600;border-bottom:1px solid var(--border);}
td{padding:11px 20px;font-size:12px;border-bottom:1px solid rgba(255,255,255,.04);}
tr:last-child td{border-bottom:none;}
tr:hover td{background:rgba(255,255,255,.02);}

/* ── Badges ── */
.tag{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:var(--rfull);font-size:10px;font-weight:700;}
.tag-ok{background:rgba(0,229,160,.1);color:var(--accent);}
.tag-warn{background:rgba(243,156,18,.1);color:var(--amber);}
.tag-err{background:rgba(255,107,53,.1);color:var(--warm);}
.tag-blue{background:rgba(0,94,255,.1);color:#7ab3ff;}
.tag-purple{background:rgba(155,93,229,.1);color:var(--purple);}
.tag-pink{background:rgba(232,67,147,.1);color:var(--pink);}

/* ── Progress ── */
.prog-wrap{height:5px;background:var(--surface2);border-radius:var(--rfull);overflow:hidden;}
.prog-bar{height:100%;border-radius:var(--rfull);transition:width 1s cubic-bezier(.34,1.56,.64,1);}

/* ── Legend ── */
.legend{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px;}
.leg{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--muted);}
.leg-sq{width:8px;height:8px;border-radius:2px;}

/* ── Avatar ── */
.av{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0;}

/* ── Input ── */
.inp{background:var(--surface2);border:1px solid var(--border);border-radius:var(--rsm);padding:8px 12px;color:var(--text);font-family:var(--font);font-size:13px;outline:none;transition:border-color .15s;}
.inp:focus{border-color:rgba(0,229,160,.4);}


/* ── Timeline ── */
.tl-item{display:flex;gap:14px;padding-bottom:18px;position:relative;}
.tl-item:not(:last-child)::before{content:'';position:absolute;left:15px;top:32px;bottom:0;width:1px;background:var(--border);}
.tl-dot{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;}

/* ── Tabs ── */
.tabs{display:flex;gap:3px;background:var(--surface2);border-radius:var(--rfull);padding:3px;width:fit-content;margin-bottom:18px;}
.tab{padding:5px 14px;border-radius:var(--rfull);font-size:11px;font-weight:600;cursor:pointer;transition:all .18s;color:var(--muted);}
.tab.on{background:var(--surface);color:var(--text);}

/* ── Estoque grid ── */
.prod-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;}
.prod-card{background:var(--surface2);border:1px solid var(--border);border-radius:var(--rsm);padding:14px;transition:all .2s;cursor:pointer;}
.prod-card:hover{border-color:var(--border2);transform:translateY(-2px);}
.prod-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;}
.prod-icon{width:38px;height:38px;border-radius:var(--rsm);display:flex;align-items:center;justify-content:center;font-size:18px;}

/* ── Kanban ── */
.kanban{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;}
.kancol{background:var(--surface2);border-radius:var(--r);padding:14px;}
.kancol-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;}
.kancard{background:var(--surface);border:1px solid var(--border);border-radius:var(--rsm);padding:12px;margin-bottom:8px;transition:border-color .2s;cursor:pointer;}
.kancard:hover{border-color:var(--border2);}
.kancard:last-child{margin-bottom:0;}
.kancard-id{font-size:10px;color:var(--muted);font-family:monospace;margin-bottom:5px;}
.kancard-title{font-size:12px;font-weight:600;margin-bottom:8px;line-height:1.4;}
.kancard-footer{display:flex;align-items:center;justify-content:space-between;}

/* ── Form ── */
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
.form-group{display:flex;flex-direction:column;gap:5px;}
.form-label{font-size:11px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.07em;}
select.inp{cursor:pointer;}

/* ── Finance colors ── */
.rec{color:var(--accent);}
.exp{color:var(--warm);}
.neu{color:var(--muted);}

@media(max-width:900px){
  .sb{display:none;}
  .g4{grid-template-columns:repeat(2,1fr);}
  .g3,.prod-grid{grid-template-columns:repeat(2,1fr);}
  .g21,.g12,.g31{grid-template-columns:1fr;}
  .kanban{grid-template-columns:repeat(2,1fr);}
}

   
    `;
    document.head.appendChild(style);
  }
}

export function render(el, props = {}, content, config, ctx = {}) {

  const data = props || {}

  injectStyles()

  el.innerHTML = `
  
      <div class="layout">

        <!-- ── Sidebar ── -->
        <aside class="sb">
            <div class="sb-logo">
              <h1>
                <a href="/" id="logo" class="nav-logo"> Logoo </a>
              </h1>
              <span id="slogan"></span>
            </div>
            <div id="sidebar"></div>
        </aside>

        <!-- ── Main ── -->
        <main class="main" id="main" > </main>

    </div>
  `

  const brand_ = brand()

  document.querySelector("#logo").innerHTML = brand_[0]["marca"];
  document.querySelector("#slogan").innerHTML = brand_[0]["sub"];
  
  return {
    slots: {
      sidebar: el.querySelector("#sidebar"),
      main: el.querySelector("#main")
    }
  }

}