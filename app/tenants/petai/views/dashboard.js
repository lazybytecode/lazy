import { dashboardPage } from "../pages/dashboardPage.js"
import { setupEtlPage } from "../pages/setupEtlPage.js"

function injectStyles() {
  if (!document.getElementById("dash-petai-styles")) {
    const style = document.createElement("style");
    style.id = "dash-petai-styles";
    style.textContent = `

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Syne:wght@400..800&display=swap');


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
  --bg-2: #ffffff;
  --bg-3: #eef1f7;
  --surface: #ffffff;
  --surface-2: #f4f6fa;
  --border: rgba(0,0,0,0.08);
  --border-strong: rgba(0,0,0,0.15);
  --text: #0f172a;
  --text-2: #475569;
  --text-3: #94a3b8;
  --shadow: 0 8px 32px rgba(0,0,0,0.12);
  --shadow-glow: 0 0 40px rgba(59,130,246,0.1);
  --accent: #39d66d;
  --accent-2: #29b35a
}

[data-theme="dark"] {
  --bg: #080c12;
  --bg-2: #0d1117;
  --bg-3: #111820;
  --surface: #141c26;
  --surface-2: #1a2333;
  --border: rgba(255,255,255,0.07);
  --border-strong: rgba(255,255,255,0.14);
  --text: #e8edf4;
  --text-2: #8899b0;
  --text-3: #4a5a70;
  --accent: #3b82f6;
  --accent-2: #8b5cf6;
  --accent-3: #06d6a0;
  --danger: #ef4444;
  --warning: #f59e0b;
  --success: #22c55e;
  --radius: 12px;
  --radius-lg: 18px;
  --shadow: 0 8px 32px rgba(0,0,0,0.5);
  --shadow-glow: 0 0 40px rgba(59,130,246,0.15);
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

/* ═══════════════════════════════════════
   DataFlow Onboarding 
═══════════════════════════════════════ */

/* ── Onboarding Layout ── */
#onboarding .onboarding {
  position: relative; z-index: 1;
  min-height: 100vh;
  padding-top: 56px;
  display: flex; flex-direction: column; align-items: center;
}

/* ── Step Nav ── */
#onboarding .step-nav {
  width: 100%; max-width: 1024px;
  padding: 28px 24px 0;
  position: relative;
  margin: 0 auto;
}
#onboarding .step-track {
  width: 100%; height: 2px;
  background: var(--border-strong);
  border-radius: 99px;
  margin-bottom: 16px;
}
#onboarding .step-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 99px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  width: 0%;
}
#onboarding .steps-list {
  display: flex; justify-content: space-between;
}
#onboarding .step-dot {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  cursor: default;
}
#onboarding .step-dot-circle {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--surface-2);
  border: 1.5px solid var(--border-strong);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 600; color: var(--text-3);
  transition: all 0.3s;
}
#onboarding .step-dot.active .step-dot-circle {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  box-shadow: 0 0 12px rgba(59,130,246,0.5);
}
#onboarding .step-dot.done .step-dot-circle {
  background: var(--accent-3);
  border-color: var(--accent-3);
  color: white;
}
#onboarding .step-dot-label {
  font-size: 10px; color: var(--text-3); font-weight: 500;
  text-align: center;
  transition: color 0.3s;
}
#onboarding .step-dot.active .step-dot-label { color: var(--accent); }
#onboarding .step-dot.done .step-dot-label { color: var(--accent-3); }

/* ── Steps Wrapper ── */
#onboarding .steps-wrapper {
  width: 100%; max-width: 1024px;
  padding: 20px 24px 60px;
  margin: 0 auto;
}

/* ── Step Sections ── */
#onboarding .step {
  display: none;
  animation: stepIn 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
#onboarding .step.active { display: block; }

@keyframes stepIn {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

#onboarding .step-inner {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow), var(--shadow-glow);
}
#onboarding .step-inner-wide { max-width: 100%; }

#onboarding .step-badge {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; font-weight: 500;
  color: var(--accent);
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.25);
  padding: 4px 10px;
  border-radius: 99px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
#onboarding .success-badge {
  color: var(--success);
  background: rgba(34,197,94,0.1);
  border-color: rgba(34,197,94,0.25);
}

#onboarding .step-title {
  font-size: 30px; font-weight: 800;
  line-height: 1.15;
  margin-bottom: 12px;
  letter-spacing: -1px;
}
#onboarding .gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
#onboarding .step-desc {
  color: var(--text-2); font-size: 15px;
  line-height: 1.6; margin-bottom: 28px;
}

/* ── Welcome Cards ── */
#onboarding .welcome-cards {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
  margin-bottom: 32px;
}
#onboarding .wcard {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
  animation: wCardIn 0.5s ease both;
  animation-delay: var(--d);
  transition: border-color 0.2s, transform 0.2s;
}
#onboarding .wcard:hover { border-color: var(--accent); transform: translateY(-2px); }
@keyframes wCardIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
#onboarding .wcard-icon { font-size: 22px; margin-bottom: 8px; }
#onboarding .wcard-label { font-weight: 700; font-size: 14px; margin-bottom: 3px; }
#onboarding .wcard-sub { font-size: 12px; color: var(--text-2); }

/* ── Source Grid ── */
#onboarding .source-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
  margin-bottom: 20px;
}
#onboarding .source-card {
  background: var(--surface-2);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 12px;
  text-align: center; cursor: pointer;
  transition: all 0.2s;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
}
#onboarding .source-card:hover { border-color: var(--accent); transform: translateY(-2px); }
#onboarding .source-card.selected {
  border-color: var(--accent);
  background: rgba(59,130,246,0.08);
  box-shadow: 0 0 16px rgba(59,130,246,0.2);
}
#onboarding .source-icon {
  width: 40px; height: 40px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}
#onboarding .source-name { font-size: 13px; font-weight: 600; }
#onboarding .source-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; color: var(--text-3);
  background: var(--bg-3);
  padding: 2px 6px; border-radius: 4px;
}

/* ── Form Styles ── */
#onboarding .conn-form { margin-bottom: 20px; }
#onboarding .form-row { display: flex; gap: 12px; margin-bottom: 14px; }
#onboarding .form-row .form-group { flex: 1; }
#onboarding .form-group { margin-bottom: 14px; }
#onboarding .form-group label {
  display: block; font-size: 12px; font-weight: 600;
  color: var(--text-2); margin-bottom: 6px;
  text-transform: uppercase; letter-spacing: 0.5px;
}
#onboarding .form-group input {
  width: 100%; padding: 10px 14px;
  background: var(--bg-3); border: 1px solid var(--border-strong);
  border-radius: 8px; color: var(--text);
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
#onboarding .form-group input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
}
#onboarding .form-group input::placeholder { color: var(--text-3); }

/* ── Upload Zone ── */
#onboarding .upload-zone {
  border: 2px dashed var(--border-strong);
  border-radius: var(--radius);
  padding: 40px 20px;
  text-align: center; cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 20px;
}
#onboarding .upload-zone:hover { border-color: var(--accent); background: rgba(59,130,246,0.04); }
#onboarding .upload-icon { color: var(--text-3); margin-bottom: 12px; }
#onboarding .upload-zone p { color: var(--text-2); font-size: 14px; margin-bottom: 4px; }
#onboarding .upload-hint { font-size: 12px !important; color: var(--text-3) !important; }
#onboarding .link-text { color: var(--accent); cursor: pointer; }
#onboarding .upload-progress { margin-top: 16px; }
#onboarding .progress-bar {
  width: 100%; height: 4px; background: var(--border);
  border-radius: 99px; overflow: hidden; margin-bottom: 6px;
}
#onboarding .progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 99px;
  transition: width 0.3s;
  width: 0%;
}
#onboarding #uploadStatus { font-size: 12px; color: var(--text-2); font-family: 'JetBrains Mono', monospace; }

/* ── Terminal ── */
#onboarding .schema-terminal {
  background: #060a10;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 24px;
  font-family: 'JetBrains Mono', monospace;
}
#onboarding .terminal-header {
  background: #0d1117;
  padding: 10px 14px;
  display: flex; align-items: center; gap: 6px;
  border-bottom: 1px solid var(--border);
}
#onboarding .dot { width: 10px; height: 10px; border-radius: 50%; }
#onboarding .dot.red { background: #ff5f57; }
#onboarding .dot.yellow { background: #febc2e; }
#onboarding .dot.green { background: #28c840; }
#onboarding .terminal-title { margin-left: 8px; font-size: 11px; color: var(--text-3); }
#onboarding .terminal-body { padding: 16px; min-height: 180px; max-height: 280px; overflow-y: auto; }
#onboarding .term-line {
  font-size: 12px; line-height: 1.8; color: #64a86e;
  opacity: 0; transform: translateY(4px);
  transition: opacity 0.3s, transform 0.3s;
}
#onboarding .term-line.visible { opacity: 1; transform: translateY(0); }
#onboarding .term-line.cmd { color: #3b82f6; }
#onboarding .term-line.info { color: #8899b0; }
#onboarding .term-line.success { color: #22c55e; }
#onboarding .term-line.error { color: #ef4444; }
#onboarding .term-cursor::after { content: '▋'; animation: blink 1s step-end infinite; }
@keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }

/* ── Schema Result ── */
#onboarding .schema-title, .transforms-title, .insights-title, .chart-label {
  font-size: 13px; font-weight: 700;
  color: var(--text-2); text-transform: uppercase;
  letter-spacing: 0.8px; margin-bottom: 12px;
  display: flex; align-items: center; gap: 6px;
}
#onboarding .schema-tables { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
#onboarding .schema-table-row {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  display: flex; align-items: center; justify-content: space-between;
  animation: fadeSlideIn 0.3s ease both;
}
#onboarding .schema-table-name { font-weight: 600; font-size: 14px; }
#onboarding .schema-table-meta {
  display: flex; gap: 12px;
  font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text-2);
}
#onboarding .schema-meta-tag {
  background: var(--bg-3); padding: 2px 8px; border-radius: 4px;
}
#onboarding .schema-summary {
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.2);
  border-radius: 8px; padding: 12px 16px;
  font-size: 13px; color: var(--success);
  font-family: 'JetBrains Mono', monospace;
}

/* ── Pipeline Viz ── */
.#onboarding pipeline-viz {
  display: flex; align-items: center; justify-content: center;
  gap: 0; padding: 24px 0; margin-bottom: 24px;
  overflow-x: auto;
}
#onboarding .pipe-node {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  min-width: 90px;
}
#onboarding .pipe-icon {
  width: 54px; height: 54px;
  background: var(--surface-2);
  border: 1.5px solid var(--border-strong);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  transition: all 0.3s;
}
#onboarding .source-node .pipe-icon { border-color: var(--accent); box-shadow: 0 0 16px rgba(59,130,246,0.2); }
#onboarding .dest-node .pipe-icon { border-color: var(--accent-3); box-shadow: 0 0 16px rgba(6,214,160,0.2); }
#onboarding .pipe-node span { font-size: 11px; font-weight: 600; color: var(--text-2); text-align: center; }
#onboarding .pipe-connector {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  flex: 1; min-width: 60px;
}
#onboarding .pipe-line {
  width: 100%; height: 2px;
  background: var(--border-strong);
  border-radius: 99px; position: relative; overflow: hidden;
}
#onboarding .pipe-dot {
  position: absolute; top: -3px; left: -10px;
  width: 8px; height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pipeDotFlow 2s linear infinite;
  box-shadow: 0 0 6px var(--accent);
}
@keyframes pipeDotFlow {
  from { left: -10px; }
  to   { left: 110%; }
}
#onboarding .pipe-step-label { font-size: 10px; font-family: 'JetBrains Mono', monospace; color: var(--text-3); }

/* ── Transforms ── */
#onboarding .transform-items { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
#onboarding .transform-item {
  background: var(--surface-2); border: 1px solid var(--border);
  border-radius: 8px; padding: 12px 16px;
  display: flex; align-items: center; gap: 12px;
  animation: fadeSlideIn 0.3s ease both;
}
#onboarding .transform-check {
  width: 20px; height: 20px;
  background: rgba(34,197,94,0.15);
  border: 1.5px solid var(--success);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; cursor: pointer;
  transition: all 0.2s;
}
#onboarding .transform-check.active::after { content: '✓'; font-size: 11px; color: var(--success); font-weight: 700; }
#onboarding .transform-info { flex: 1; }
#onboarding .transform-name { font-size: 13px; font-weight: 600; margin-bottom: 2px; }
#onboarding .transform-desc { font-size: 11px; color: var(--text-2); }
#onboarding .transform-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; padding: 2px 8px;
  border-radius: 4px;
  background: rgba(59,130,246,0.1); color: var(--accent);
  border: 1px solid rgba(59,130,246,0.2);
}

/* ── Schedule ── */
#onboarding .schedule-options { display: flex; gap: 10px; margin-bottom: 28px; flex-wrap: wrap; }
#onboarding .sched-opt { cursor: pointer; }
#onboarding .sched-opt input { display: none; }
#onboarding .sched-label {
  display: flex; flex-direction: column; gap: 2px;
  background: var(--surface-2);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 18px;
  min-width: 130px;
  transition: all 0.2s;
}
#onboarding .sched-opt:hover .sched-label { border-color: var(--accent); }
#onboarding .sched-opt.selected .sched-label {
  border-color: var(--accent);
  background: rgba(59,130,246,0.08);
}
#onboarding .sched-icon { font-size: 18px; margin-bottom: 4px; }
#onboarding .sched-name { font-size: 13px; font-weight: 700; }
#onboarding .sched-sub { font-size: 11px; color: var(--text-2); }

/* ── Preview Grid ── */
#onboarding .preview-grid {
  display: grid; grid-template-columns: repeat(3, 1fr) 1.4fr; gap: 12px;
  margin-bottom: 24px;
}
#onboarding .preview-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  animation: fadeSlideIn 0.4s ease both;
}
#onboarding .preview-card:nth-child(1){animation-delay:0.05s}
#onboarding .preview-card:nth-child(2){animation-delay:0.1s}
#onboarding .preview-card:nth-child(3){animation-delay:0.15s}
#onboarding .preview-card:nth-child(4){animation-delay:0.2s}
#onboarding .metric-label { font-size: 11px; font-weight: 600; color: var(--text-2); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
#onboarding .metric-value { font-size: 26px; font-weight: 800; letter-spacing: -1px; margin-bottom: 4px; }
#onboarding .metric-change { font-size: 11px; font-family: 'JetBrains Mono', monospace; }
#onboarding .metric-change.positive { color: var(--success); }
#onboarding .metric-change.neutral { color: var(--text-3); }
#onboarding .chart-card { grid-column: span 1; }
#onboarding canvas { display: block; }

/* ── Insights ── */
#onboarding .insights-section { margin-bottom: 28px; }
#onboarding .insights-list { display: flex; flex-direction: column; gap: 8px; }
#onboarding .insight-item {
  background: var(--surface-2); border: 1px solid var(--border);
  border-radius: 8px; padding: 12px 16px;
  display: flex; align-items: flex-start; gap: 12px;
  animation: fadeSlideIn 0.3s ease both;
}
#onboarding .insight-icon {
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; flex-shrink: 0;
}
#onboarding .insight-text .insight-title { font-size: 13px; font-weight: 700; margin-bottom: 2px; }
#onboarding .insight-text .insight-sub { font-size: 12px; color: var(--text-2); }

/* ── ETL Overlay ── */
#onboarding .etl-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
}
#onboarding .etl-modal {
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  padding: 40px;
  width: 100%; max-width: 440px;
  text-align: center;
  box-shadow: var(--shadow);
}
#onboarding .etl-spinner {
  width: 48px; height: 48px;
  border: 3px solid var(--border-strong);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 20px;
}
@keyframes spin { to { transform: rotate(360deg); } }
#onboarding .etl-title { font-size: 20px; font-weight: 800; margin-bottom: 24px; letter-spacing: -0.5px; }
#onboarding .etl-stages { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; text-align: left; }
#onboarding .etl-stage {
  display: flex; align-items: center; gap: 10px;
  font-size: 13px; color: var(--text-3);
  transition: color 0.3s;
}
#onboarding .etl-stage.active { color: var(--text); }
#onboarding .etl-stage.done { color: var(--success); }
#onboarding .etl-stage-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--border-strong);
  flex-shrink: 0; transition: background 0.3s;
}
#onboarding .etl-stage.active .etl-stage-dot { background: var(--accent); animation: pulseDot 0.8s ease infinite alternate; }
#onboarding .etl-stage.done .etl-stage-dot { background: var(--success); }
@keyframes pulseDot { from{transform:scale(1)}to{transform:scale(1.4)} }
#onboarding .etl-progress-wrap { display: flex; align-items: center; gap: 12px; }
#onboarding .etl-progress-bar {
  flex: 1; height: 6px;
  background: var(--border); border-radius: 99px; overflow: hidden;
}
#onboarding .etl-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 99px;
  transition: width 0.4s ease;
  width: 0%;
}
#onboarding .etl-percent {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px; color: var(--accent); min-width: 36px;
}

/* ── Buttons ── */
#onboarding .btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: white; border: none;
  padding: 12px 24px; border-radius: 10px;
  font-family: 'Syne', sans-serif;
  font-size: 14px; font-weight: 700;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(59,130,246,0.3);
}
#onboarding .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(59,130,246,0.4); }
#onboarding .btn-primary:active { transform: translateY(0); }
#onboarding .btn-primary:disabled {
  opacity: 0.4; cursor: not-allowed;
  transform: none; box-shadow: none;
}
#onboarding .btn-large { padding: 14px 32px; font-size: 15px; }
#onboarding .btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--surface-2); color: var(--text-2);
  border: 1px solid var(--border-strong);
  padding: 12px 20px; border-radius: 10px;
  font-family: 'Syne', sans-serif;
  font-size: 14px; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
#onboarding .btn-secondary:hover { border-color: var(--text-3); color: var(--text); }
#onboarding .step-actions {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  margin-top: 8px;
}
#onboarding .final-actions {
  display: flex; gap: 12px; align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

/* ── Animations ── */
@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Toast ── */
#onboarding .toast {
  position: fixed; bottom: 24px; right: 24px; z-index: 300;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  padding: 12px 18px;
  font-size: 13px; font-weight: 600;
  box-shadow: var(--shadow);
  animation: toastIn 0.3s ease;
  display: flex; align-items: center; gap: 8px;
}
#onboarding .toast.success { border-color: rgba(34,197,94,0.4); color: var(--success); }
#onboarding .toast.error { border-color: rgba(239,68,68,0.4); color: var(--danger); }
@keyframes toastIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive ── */
@media (max-width: 600px) {
  #onboarding .step-inner { padding: 24px 20px; }
  #onboarding .welcome-cards { grid-template-columns: 1fr 1fr; }
  #onboarding .source-grid { grid-template-columns: repeat(2, 1fr); }
  #onboarding .preview-grid { grid-template-columns: 1fr 1fr; }
  #onboarding .preview-card.chart-card { grid-column: span 2; }
  #onboarding .schedule-options { flex-direction: column; }
  #onboarding .step-title { font-size: 22px; }
  #onboarding .pipeline-viz { flex-wrap: wrap; justify-content: center; gap: 8px; }
}

    `;
    document.head.appendChild(style);
  }
}

const routes = {
    "dashboard":  dashboardPage,
    "configuracoes": configuracaoPage,
    "setup": setupEtlPage,
};

function getBasePath() {
    // Encontra a posição de "dashboard" e preserva até ele (inclusive)
    const parts = window.location.pathname.split("/");
    const dashIndex = parts.indexOf("dashboard");
    if (dashIndex === -1) return window.location.pathname;
    return parts.slice(0, dashIndex + 1).join("/"); // "/t/petai/dashboard"
}

function getCurrentRoute() {
  const parts = window.location.pathname.split("/");
  const dashIndex = parts.indexOf("dashboard");
  if (dashIndex === -1) return "dashboard";
  const sub = parts[dashIndex + 1];
  return sub && routes[sub] ? sub : "dashboard"; // valida se a rota existe
}

async function navigate(path, push = true) {
    const container = document.getElementById("page-container");
    const normalizedPath = path.replace(/^\/+|\/+$/g, "") || "dashboard";
    const page = routes[normalizedPath];

    if (!page) {
        container.innerHTML = "<h1>404 - Página não encontrada</h1>";
        return;
    }

    if (push) {
        const basePath = getBasePath();
        // /t/petai/dashboard  →  rota raiz (sem subpath)
        // /t/petai/dashboard/configuracoes  →  subrota
        const url = normalizedPath === "dashboard"
            ? basePath
            : `${basePath}/${normalizedPath}`;
        history.pushState({ path: normalizedPath }, "", url);
    }

    await page(container);

    // garante que o DOM está estável antes de marcar o menu
    requestAnimationFrame(() => updateActiveMenu(normalizedPath));
    requestAnimationFrame(() => disparo( path ));
}

/* =========================================================
   Páginas do Dashboard
========================================================= */



async function vendasPage(container) {
    container.innerHTML = `
        <h1>Vendas</h1>
        <div class="panel glass">
            Relatório de vendas
        </div>
    `;
}

async function produtosPage(container) {
    container.innerHTML = `
        <h1>Produtos</h1>
        <div class="panel glass">
            Lista de produtos
        </div>
    `;
}

async function estoquePage(container) {
    container.innerHTML = `
        <h1>Estoque</h1>
        <div class="panel glass">
            Controle de estoque
        </div>
    `;
}

async function configuracaoPage(container) {
  document.getElementById("titulo").innerHTML = 'Configurações'
  document.getElementById("subtitulo").innerHTML = 'Ajustes e aparência do sistema'
  container.innerHTML = `
      <div class="panel glass">
        <button class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">
          <svg class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          <svg class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
  `;
}

function updateActiveMenu(path = "dashboard") {

    path = path.replace(/^\/+|\/+$/g, "");

    document.querySelectorAll(".menu a").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.route === path
        );
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

      <a href="#" data-route="dashboard">
        <i class="fa-solid fa-house"></i>
        Dashboard
      </a>

      <a href="#" data-route="setup" >
        <i class="fa-solid fa-chart-line"></i>
        ETL Guiado
      </a>

      <a href="#" data-route="configuracoes">
          <i class="fa-solid fa-gear"></i>
          Configurações
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

  </aside>

  <main class="content">

    <header class="topbar glass">

      <div>
        <h1 id="titulo" >Dashboard</h1>
        <span id="subtitulo">Visão geral da sua operação</span>
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

    <div id="page-container"></div>

  </main> 
  `

  document.getElementById("page-container").innerHTML = ""

  el.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-route]");
    if (!link) return;
    e.preventDefault();
    e.stopPropagation();
    navigate(link.dataset.route, true);

  });

  window.addEventListener("popstate", async (e) => {
    const route = e.state?.path || getCurrentRoute();
    await navigate(route, false);
  });

  // ✅ Lê a rota da URL no momento do carregamento (F5, link direto)
  const initialRoute = getCurrentRoute();
  await navigate(initialRoute, false);

}

async function disparo( rota )
{
  switch( rota ){
    case "dashboard": dashboardPage()
    break

    case "setup": console.log("setup")
    break
  }
}