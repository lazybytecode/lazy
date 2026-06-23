function injectStyles() {
  if (!document.getElementById("estoque-styles")) {
    const style = document.createElement("style");
    style.id = "estoque-styles";
    style.textContent = `
/* ===================================================
   RESET
=================================================== */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Segoe UI,sans-serif;
  color:#fff;
  overflow:hidden;
}

/* ===================================================
   APP
=================================================== */

.app{
  display:flex;
  width:100%;
  height:100vh;
}

/* ===================================================
   SIDEBAR
=================================================== */

.sidebar{
  width:300px;
  background:#0f172a;
  border-right:1px solid #1e293b;
  padding:20px;
  overflow:auto;
}

.logo{
  font-size:32px;
  font-weight:bold;
  margin-bottom:20px;
}

.sidebar button{
  width:100%;
  height:48px;
  border:none;
  background:#1e293b;
  color:#fff;
  border-radius:12px;
  margin-bottom:10px;
  cursor:pointer;
  transition:.3s;
}

.sidebar button:hover{
  background:#334155;
}

.sidebar hr{
  border:none;
  border-top:1px solid #1e293b;
  margin:20px 0;
}

.slide-item{
  background:#1e293b;
  padding:14px;
  border-radius:12px;
  margin-bottom:10px;
  cursor:pointer;
  transition:.3s;
}

.slide-item:hover{
  background:#334155;
}

.slide-item.active{
  border:2px solid #60a5fa;
}

/* ===================================================
   EDITOR
=================================================== */

.editor{
  flex:1;
  display:flex;
  flex-direction:column;
}

.theme-dark{
  background:
  linear-gradient(135deg,#02061705,#0f172a05);
  color:#fff;
}

.theme-light{
  background:#fff;
  color:#0f172a;
}

/* ===================================================
   TOOLBAR
=================================================== */

.toolbar{
  background:#0f172a;
  border-bottom:1px solid #1e293b;
  padding:16px 20px;
  display:flex;
  flex-direction:column;
  gap:10px;
}

.toolbar-row{
  display:flex;
  gap:10px;
  align-items:center;
}

.toolbar input,
.toolbar select,
.toolbar textarea{
  border:none;
  background:#1e293b;
  color:#fff;
  border-radius:12px;
  padding:0 14px;
}

.toolbar input,
.toolbar select{
  height:40px;
}

.toolbar input{
  flex:1;
}

.toolbar textarea{
  flex:1;
  padding:10px 14px;
  resize:vertical;
  min-height:60px;
  font-family:inherit;
  font-size:14px;
  line-height:1.5;
}

.toolbar label{
  font-size:12px;
  color:#64748b;
  white-space:nowrap;
}

/* ===================================================
   FRONTMATTER PANEL
=================================================== */

.frontmatter-panel{
  background:#020617;
  border-bottom:1px solid #1e293b;
  padding:14px 20px;
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  align-items:center;
}

.frontmatter-panel input{
  height:36px;
  border:none;
  background:#1e293b;
  color:#fff;
  border-radius:10px;
  padding:0 12px;
  font-size:13px;
}

.frontmatter-panel input::placeholder{
  color:#475569;
}

.frontmatter-panel label{
  font-size:12px;
  color:#475569;
}

.frontmatter-group{
  display:flex;
  flex-direction:column;
  gap:4px;
}

/* ===================================================
   LIST FIELDS
=================================================== */

.list-field{
  display:flex;
  flex-direction:column;
  gap:6px;
  flex:1;
}

.list-field-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.list-field label{
  font-size:12px;
  color:#64748b;
}

.list-field .add-item-btn{
  background:#334155;
  border:none;
  color:#94a3b8;
  border-radius:8px;
  padding:2px 10px;
  cursor:pointer;
  font-size:12px;
}

.list-item-row{
  display:flex;
  gap:6px;
  align-items:center;
}

.list-item-row input{
  flex:1;
  height:34px;
  border:none;
  background:#1e293b;
  color:#fff;
  border-radius:8px;
  padding:0 10px;
  font-size:13px;
}

.list-item-row .remove-btn{
  background:#7f1d1d;
  border:none;
  color:#fca5a5;
  border-radius:8px;
  width:28px;
  height:28px;
  cursor:pointer;
  font-size:14px;
  flex-shrink:0;
}

/* ===================================================
   CANVAS
=================================================== */

.canvas-wrapper{
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:auto;
  padding:40px;
}

#slide-canvas{
  width:1280px;
  height:720px;
  background:linear-gradient(135deg,#020617,#0f172a);
  border-radius:24px;
  overflow:hidden;
  position:relative;
  box-shadow:0 10px 50px rgba(0,0,0,.5);
}

/* ===================================================
   SLIDE BASE
=================================================== */

.slide{
  width:100%;
  height:100%;
  padding:60px;
}

/* ===================================================
   CAPA
=================================================== */

.hero{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:40px;
  height:100%;
}

.hero-content{
  flex:1;
}

.hero-title{
  font-size:72px;
  margin-bottom:20px;
}

.hero-subtitle{
  font-size:28px;
  color:#94a3b8;
}

.hero-image{
  width:40%;
  border-radius:24px;
}

/* ===================================================
   FEATURES
=================================================== */

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
}

.card{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  border-radius:20px;
  padding:30px;
}

.card h2{
  margin-bottom:20px;
}

.card ul{
  list-style:none;
}

.card li{
  margin-bottom:10px;
  color:#cbd5e1;
}

/* ===================================================
   IMAGE
=================================================== */

.full-image{
  width:100%;
  height:100%;
  object-fit:cover;
}

.slide-item{
  background:#1e293b;
  padding:14px;
  border-radius:12px;
  margin-bottom:10px;
  cursor:grab;
  transition:.3s;
  user-select:none;
}

.slide-item.dragging{
  opacity:.4;
}

.slide-item.drag-over{
  border:2px dashed #60a5fa;
}

.slide-item.hidden-slide{
  opacity:.45;
  border:1px dashed #ef4444;
}

.capa-image {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: .3;
  z-index: -1;
}

/* ======================================================
   HOME
====================================================== */

#home{
  width:100%;
  height:100vh;
  overflow:auto;
  padding:40px;
}

.home-header{
  margin-bottom:40px;
}

.home-header h1{
  font-size:48px;
  margin-bottom:10px;
}

.home-header p{
  color:#94a3b8;
  font-size:18px;
}

.gist-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
  gap:20px;
}

.gist-card{
  background:rgba(15,23,42,.7);
  border:1px solid #1e293b;
  border-radius:20px;
  padding:24px;
  cursor:pointer;
  transition:.3s;
  position:relative;
  overflow:hidden;
}

.gist-card:hover{
  transform:translateY(-5px);
  border-color:#60a5fa;
  box-shadow:0 10px 40px rgba(96,165,250,.2);
}

.gist-card h2{
  margin-bottom:10px;
  font-size:24px;
}

.gist-card p{
  color:#94a3b8;
  line-height:1.6;
}

.gist-tag{
  display:inline-flex;
  align-items:center;
  gap:8px;
  margin-top:20px;
  padding:8px 14px;
  border-radius:999px;
  background:#1e293b;
  font-size:14px;
}

.gist-bg{
  position:absolute;
  right:-40px;
  bottom:-40px;
  font-size:120px;
  opacity:.05;
}

/* ======================================================
   SLIDES
====================================================== */

#viewer{
  width:100%;
  height:100vh;
  display:none;
  position:relative;
}

#app{
  width:100%;
  height:100%;
  overflow:auto;
}

/* ======================================================
   NAV
====================================================== */

.nav-btn{
  position:fixed;
  top:0;
  width:80px;
  height:100vh;
  border:none;
  background:transparent;
  color:#fff;
  font-size:28px;
  cursor:pointer;
  z-index:999;
  transition:.3s;
}

.nav-btn:hover{
  background:rgba(255,255,255,.05);
}

.next{
  right:0;
}

.prev{
  left:0;
}

.home-btn{
  position:fixed;
  top:20px;
  right:20px;
  z-index:9999;
  border:none;
  background:#111827;
  border:1px solid #334155;
  color:#fff;
  width:50px;
  height:50px;
  border-radius:14px;
  cursor:pointer;
  font-size:20px;
}

/* ======================================================
   SLIDE BASE
====================================================== */

.slide{
  min-height:100vh;
  padding:60px;
}

.header{
  margin-bottom:40px;
}

.header h1{
  font-size:54px;
  margin-bottom:10px;
}

.subtitle{
  font-size:22px;
  color:#94a3b8;
}

/* ======================================================
   CAPA
====================================================== */

.hero{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:40px;
  min-height:80vh;
}

.hero-content{
  flex:1;
}

.topline{
  color:#A020F0;
  font-size:22px;
  margin-bottom:20px;
}

.hero-title{
  font-size:80px;
  line-height:1;
  margin-bottom:20px;
}

.hero-subtitle{
  color:#94a3b8;
  font-size:28px;
  max-width:700px;
}

.hero-image{
  width:40%;
  border-radius:30px;
  border:1px solid #1e293b;
}

 .capa-image {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: .3;
  z-index: -1;
  aspect-ratio:  16/9;
}




/* ======================================================
   FEATURES
====================================================== */

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
}

.card{
  background:rgba(15,23,42,.7);
  border:1px solid #1e293b;
  border-radius:20px;
  padding:24px;
}

.problem{
  border-left:5px solid #ef4444;
}

.solution{
  border-left:5px solid #22c55e;
}

.card h3{
  margin-bottom:20px;
  font-size:24px;
}

.card ul{
  list-style:none;
}

.card li{
  margin-bottom:14px;
  color:#cbd5e1;
  line-height:1.5;
}

/* ======================================================
   IMAGE
====================================================== */

.image-slide{
  padding:0;
  position:relative;
}

.full-image{
  width:100%;
  height:100vh;
  object-fit:cover;
}

.overlay{
  position:absolute;
  left:60px;
  bottom:60px;
  background:rgba(0,0,0,.5);
  border:1px solid rgba(255,255,255,.1);
  backdrop-filter:blur(20px);
  padding:30px;
  border-radius:24px;
  max-width:700px;
}

.overlay h1{
  font-size:56px;
  margin-bottom:10px;
}

.overlay p{
  color:#cbd5e1;
  font-size:22px;
}

/* ======================================================
   ANIMAÇÃO
====================================================== */

.fade-in{
  animation:fade .6s ease;
}

@keyframes fade{

  from{
    opacity:0;
    transform:translateY(20px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }

}

/* ======================================================
   RESPONSIVO
====================================================== */

@media(max-width:900px){

  .hero{
    flex-direction:column;
  }

  .hero-image{
    width:100%;
  }

  .hero-title{
    font-size:52px;
  }

  .grid{
    grid-template-columns:1fr;
  }

  .overlay h1{
    font-size:38px;
  }

}

/* =========================================================
BASE
========================================================= */

.slide{
  min-height:100vh;
  padding:60px;
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.theme-dark{
  background:
  linear-gradient(135deg,#02061705,#0f172a05);
  color:#fff;
}

.theme-light{
  background:#fff;
  color:#0f172a;
}

.theme-cyberpunk{
  background:
  radial-gradient(circle at top,#6d28d9,#020617);
  color:#fff;
}

.theme-corporate{
  background:
  linear-gradient(135deg,#0f172a,#1e3a8a);
  color:#fff;
}

.theme-ted{
  background:#111;
  color:#fff;
}

.theme-cinematic{
  background:#000;
  color:#fff;
}

/* =========================================================
TYPO
========================================================= */

.title{
  font-size:72px;
  line-height:1;
  margin-bottom:20px;
  font-weight:800;
}

.subtitle{
  font-size:28px;
  color:#94a3b8;
  max-width:800px;
}

.topline{
  color:#A020F0;
  font-size:22px;
  margin-bottom:20px;
}

/* =========================================================
LAYOUTS
========================================================= */

.layout-center{
  text-align:center;
  align-items:center;
}

.layout-split-left{
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:40px;
}

.layout-split-right{
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:40px;
}

.layout-grid-2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
}

.layout-grid-3{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
}

.layout-stack{
  display:flex;
  flex-direction:column;
  gap:24px;
}

.layout-hero{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:40px;
}

.layout-fullscreen{
  padding:0;
}

/* =========================================================
CARDS
========================================================= */

.card{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  border-radius:24px;
  padding:30px;
  backdrop-filter:blur(20px);
}

.card h3{
  margin-bottom:20px;
  font-size:28px;
}

.card ul{
  list-style:none;
}

.card li{
  margin-bottom:12px;
  color:#cbd5e1;
}

/* =========================================================
IMAGES
========================================================= */

.hero-image{
  width:45%;
  border-radius:30px;
  object-fit:cover;
}

.full-image{
  width:100%;
  height:100vh;
  object-fit:cover;
}

.overlay{
  position:absolute;
  left:60px;
  bottom:60px;
  background:rgba(0,0,0,.5);
  backdrop-filter:blur(20px);
  padding:30px;
  border-radius:24px;
  max-width:700px;
}

/* =========================================================
TIMELINE
========================================================= */

.timeline{
  position:relative;
  margin-top:60px;
}

.timeline::before{
  content:"";
  position:absolute;
  left:20px;
  top:0;
  bottom:0;
  width:4px;
  background:#A020F0;
}

.timeline-item{
  position:relative;
  padding-left:70px;
  margin-bottom:40px;
}

.timeline-item::before{
  content:"";
  position:absolute;
  left:8px;
  top:8px;
  width:24px;
  height:24px;
  border-radius:50%;
  background:#A020F0;
}

/* =========================================================
STATS
========================================================= */

.stat{
  text-align:center;
}

.stat-number{
  font-size:72px;
  font-weight:900;
  color:#60a5fa;
}

.stat-label{
  font-size:22px;
  color:#94a3b8;
}

/* =========================================================
QUOTE
========================================================= */

.quote{
  max-width:1000px;
  margin:auto;
  text-align:center;
}

.quote-text{
  font-size:64px;
  line-height:1.3;
  margin-bottom:40px;
}

.quote-author{
  font-size:28px;
  color:#94a3b8;
}

/* =========================================================
CODE
========================================================= */

.code-block{
  background:#020617;
  border-radius:24px;
  padding:30px;
  font-family:monospace;
  font-size:20px;
  line-height:1.8;
  border:1px solid #1e293b;
}

/* =========================================================
PRICING
========================================================= */

.price{
  font-size:72px;
  font-weight:900;
  margin:20px 0;
}

/* =========================================================
BUTTON
========================================================= */

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:18px 34px;
  border-radius:999px;
  background:#A020F0;
  color:#fff;
  text-decoration:none;
  font-size:20px;
  margin-top:30px;
}

/* =========================================================
RESPONSIVE
========================================================= */

@media(max-width:900px){

  .layout-split-left,
  .layout-split-right,
  .layout-grid-2,
  .layout-grid-3,
  .layout-hero{
    grid-template-columns:1fr;
    flex-direction:column;
  }

  .title{
    font-size:48px;
  }

  .subtitle{
    font-size:22px;
  }

  .hero-image{
    width:100%;
  }

}

    `;
    document.head.appendChild(style);
  }
}



/* ===================================================
   RENDER CAPA
=================================================== */

export function renderCapa(slide){
  return `
  <section class="slide">
    <div class="hero">
      <div class="hero-content">
        ${slide.topline ? `<p style="color:#A020F0;font-size:20px;margin-bottom:16px;">${slide.topline}</p>` : ''}
        <h1 class="hero-title">${slide.titulo || ''}</h1>
        <p class="hero-subtitle">${(slide.subtitulo || '').replace(/\n/g,'<br>')}</p>
      </div>
      ${
        slide.imagem
          ? `<img src="${getImageUrl(slide.imagem)}"
                  class="capa-image">`
          : ""
      }
    </div>
  </section>
  `;
}

function getImageUrl(path) {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  return `/static/${path}`;
}

/* ===================================================
   CAPA HERO
=================================================== */

export function renderCapaHero(slide){
  return `
  <section class="slide">
    <div class="hero">
      <div class="hero-content">
        ${slide.topline ? `<p style="color:#A020F0;font-size:20px;margin-bottom:16px;">${slide.topline}</p>` : ''}
        <h1 class="hero-title">${(slide.titulo || '').replace(/\n/g,'<br>')}</h1>
        <p class="hero-subtitle">${(slide.subtitulo || '').replace(/\n/g,'<br>')}</p>
      </div>

      ${
  slide.imagem
    ? `<img src="${getImageUrl(slide.imagem)}"
            class="hero-image">`
    : ""
}

    </div>
  </section>
  `;
}

/* ===================================================
   FEATURES
=================================================== */

export function renderFeatures(slide){
  return `
  <section class="slide">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <p class="hero-subtitle">${slide.subtitulo || ''}</p>
    <br><br>
    <div class="grid">
      <div class="card">
        <h2>❌ Problemas</h2>
        <ul>${(slide.problema || []).map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <h2>✅ Soluções</h2>
        <ul>${(slide.solucao || []).map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
    </div>
  </section>
  `;
}

/* ===================================================
   IMAGE
=================================================== */

export function renderImagem(slide){
  return `
  <section class="slide" style="padding:0;position:relative;">
    ${
  slide.imagem
    ? `<img src="${getImageUrl(slide.imagem)}"
            class="full-image">`
    : ""
}
    <div style="position:absolute;left:60px;bottom:60px;background:rgba(0,0,0,.5);backdrop-filter:blur(20px);padding:30px;border-radius:24px;max-width:700px;">
      <h1 style="font-size:56px;margin-bottom:10px;">${slide.titulo || ''}</h1>
      <p style="color:#cbd5e1;font-size:22px;">${slide.subtitulo || ''}</p>
    </div>
  </section>
  `;
}

/* ===================================================
   STATS
=================================================== */

export function renderStats(slide){
  const cards = (slide.stats || []).map(item => {
    const [valor, label] = item.split('|');
    return `
      <div class="card" style="text-align:center;padding:40px 24px;">
        <div style="font-size:64px;font-weight:700;margin-bottom:12px;">${valor || ''}</div>
        <div style="color:#94a3b8;font-size:20px;">${label || ''}</div>
      </div>
    `;
  }).join('');
  return `
  <section class="slide">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <p class="hero-subtitle">${slide.subtitulo || ''}</p>
    <br><br>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr));">${cards}</div>
  </section>
  `;
}

/* ===================================================
   QUOTE
=================================================== */

export function renderQuote(slide){
  return `
  <section class="slide" style="display:flex;align-items:center;justify-content:center;">
    <div style="max-width:1000px;text-align:center;">
      <div style="font-size:64px;line-height:1.3;margin-bottom:40px;">"${slide.frase || ''}"</div>
      <div style="font-size:28px;color:#94a3b8;">${slide.autor || ''}</div>
    </div>
  </section>
  `;
}

/* ===================================================
   TIMELINE
=================================================== */

export function renderTimeline(slide){
  return `
  <section class="slide">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <div style="position:relative;margin-top:40px;padding-left:50px;">
      <div style="position:absolute;left:10px;top:0;bottom:0;width:4px;background:#A020F0;border-radius:4px;"></div>
      ${(slide.item || []).map(i=>`
        <div style="position:relative;margin-bottom:32px;">
          <div style="position:absolute;left:-46px;top:8px;width:20px;height:20px;border-radius:50%;background:#A020F0;"></div>
          <h2 style="font-size:24px;color:#e2e8f0;">${i}</h2>
        </div>
      `).join('')}
    </div>
  </section>
  `;
}

/* ===================================================
   COMPARISON
=================================================== */

export function renderComparison(slide){
  return `
  <section class="slide">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <br>
    <div class="grid">
      <div class="card">
        <h2 style="margin-bottom:20px;">${slide.left_title || 'Antes'}</h2>
        <ul>${(slide.left_items || []).map(i=>`<li style="margin-bottom:10px;color:#cbd5e1;">${i}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <h2 style="margin-bottom:20px;">${slide.right_title || 'Depois'}</h2>
        <ul>${(slide.right_items || []).map(i=>`<li style="margin-bottom:10px;color:#cbd5e1;">${i}</li>`).join('')}</ul>
      </div>
    </div>
  </section>
  `;
}

/* ===================================================
   PRICING
=================================================== */

export function renderPricing(slide){
  return `
  <section class="slide">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <br>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">
      ${(slide.plano || []).map(i => {
        const parts = i.split('|');
        return `
          <div class="card" style="text-align:center;">
            <h2 style="margin-bottom:10px;">${parts[0] || ''}</h2>
            <div style="font-size:64px;font-weight:900;margin:20px 0;">R$ ${parts[1] || ''}</div>
            <div style="display:inline-block;padding:14px 28px;border-radius:999px;background:#A020F0;cursor:pointer;">Escolher</div>
          </div>
        `;
      }).join('')}
    </div>
  </section>
  `;
}

/* ===================================================
   TEAM
=================================================== */

export function renderTeam(slide){
  return `
  <section class="slide">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <br>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;">
      ${(slide.membro || []).map(i => {
        const parts = i.split('|');
        return `
          <div class="card" style="text-align:center;">
            <div style="width:100px;height:100px;border-radius:50%;background:#1e293b;margin:0 auto 20px;"></div>
            <h2 style="margin-bottom:6px;">${parts[0] || ''}</h2>
            <p style="color:#94a3b8;">${parts[1] || ''}</p>
          </div>
        `;
      }).join('')}
    </div>
  </section>
  `;
}

/* ===================================================
   CODE
=================================================== */

export function renderCode(slide){
  return `
  <section class="slide">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <br>
    <div style="background:#020617;border-radius:20px;padding:30px;font-family:monospace;font-size:18px;line-height:1.8;border:1px solid #1e293b;">
      ${(slide.codigo || []).join('<br>')}
    </div>
  </section>
  `;
}

/* ===================================================
   CTA
=================================================== */

export function renderCTA(slide){
  return `
  <section class="slide" style="display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;">
    <h1 class="hero-title">${slide.titulo || ''}</h1>
    <p class="hero-subtitle">${slide.subtitulo || ''}</p>
    <div style="display:inline-block;padding:18px 34px;border-radius:999px;background:#A020F0;cursor:pointer;font-size:20px;margin-top:30px;">
      ${slide.botao || 'Começar'}
    </div>
  </section>
  `;
}

/* ===================================================
   RENDER SLIDE
=================================================== */

export function renderSlide(){
  const slide = slides[slideAtual];
  const fn = layouts[slide.tipo] || layouts[slide.layout];
  document.getElementById('slide-canvas').innerHTML = fn
    ? fn(slide)
    : `<div style="padding:40px;color:red;">Layout "<strong>${slide.tipo}</strong>" não encontrado.</div>`;
}

/* ===================================================
   LIST
=================================================== */

export function moverSlide(origem, destino){

  if(origem === destino) return;

  const slideMovido = slides.splice(origem, 1)[0];

  slides.splice(destino, 0, slideMovido);

  if(slideAtual === origem){
    slideAtual = destino;
  }
  else if(
    slideAtual > origem &&
    slideAtual <= destino
  ){
    slideAtual--;
  }
  else if(
    slideAtual < origem &&
    slideAtual >= destino
  ){
    slideAtual++;
  }

  atualizarEstado();
}

export function renderSlidesList(){

  const list = document.getElementById('slides-list');

  list.innerHTML = '';

  slides.forEach((slide,index)=>{

    const div = document.createElement('div');

    div.className =
    `
    slide-item
    ${index === slideAtual ? 'active' : ''}
    ${slide.oculto ? ' hidden-slide' : ''}
    `;

    div.draggable = true;

    const oculto = slide.oculto
      ? ' 🚫'
      : '';

    div.innerHTML =
      `${index + 1}. ${slide.titulo || slide.tipo}${oculto}`; 

    // selecionar slide
    div.onclick = () => {

      slideAtual = index;

      preencherCampos();

      atualizarEstado();
    };

    // drag start
    div.addEventListener('dragstart',()=>{

      dragIndex = index;

      div.classList.add('dragging');
    });

    // drag end
    div.addEventListener('dragend',()=>{

      div.classList.remove('dragging');

      document
        .querySelectorAll('.slide-item')
        .forEach(el => el.classList.remove('drag-over'));
    });

    // permitir drop
    div.addEventListener('dragover',(e)=>{

      e.preventDefault();

      div.classList.add('drag-over');
    });

    div.addEventListener('dragleave',()=>{

      div.classList.remove('drag-over');
    });

    // drop
    div.addEventListener('drop',(e)=>{

      e.preventDefault();

      div.classList.remove('drag-over');

      moverSlide(dragIndex,index);
    });

    list.appendChild(div);
  });
}


// export function renderSlidesList(){
//   const list = document.getElementById('slides-list');
//   list.innerHTML = '';
//   slides.forEach((slide, index) => {
//     const div = document.createElement('div');
//     div.className = `slide-item ${index === slideAtual ? 'active' : ''}`;
//     div.innerHTML = `${index + 1}. ${slide.titulo || slide.tipo}`;
//     div.onclick = () => {
//       slideAtual = index;
//       preencherCampos();
//       atualizarEstado();
//     };
//     list.appendChild(div);
//   });
// }

/* ===================================================
   PREENCHER CAMPOS
=================================================== */

export function preencherCampos(){
  const slide = slides[slideAtual];

  document.getElementById('slide-type').value = slide.tipo || 'capa';
  document.getElementById('slide-tema').value = slide.tema || 'dark';
  document.getElementById('titulo').value = slide.titulo || '';
  document.getElementById('subtitulo').value = slide.subtitulo || '';
  document.getElementById('topline').value = slide.topline || '';
  document.getElementById('imagem').value = slide.imagem || '';

  // Campos extras dinâmicos
  renderCamposExtras(slide);
}

/* ===================================================
   CAMPOS EXTRAS POR TIPO
=================================================== */

const extraFieldsDef = {
  capa:      ['topline','imagem'],
  capahero:  ['topline','imagem'],
  features:  ['problema','solucao'],
  imagem:    ['imagem'],
  stats:     ['stats'],
  quote:     ['frase','autor'],
  timeline:  ['item'],
  comparison:['left_title','left_items','right_title','right_items'],
  pricing:   ['plano'],
  team:      ['membro'],
  code:      ['codigo'],
  cta:       ['botao'],
};

// Campos que são listas
const listFields = new Set([
  'problema','solucao','stats','item',
  'left_items','right_items','plano','membro','codigo'
]);

// Campos simples (string) extras além dos fixos (titulo,subtitulo,topline,imagem)
const simpleExtras = new Set(['frase','autor','botao','left_title','right_title']);

export function renderCamposExtras(slide){
  const container = document.getElementById('extra-fields');
  if(!container) return;
  container.innerHTML = '';

  const tipo = slide.tipo || 'capa';
  const campos = extraFieldsDef[tipo] || [];

  // Filtra campos já cobertos pelos fixos
  const fixed = new Set(['titulo','subtitulo','topline','imagem']);
  const extras = campos.filter(c => !fixed.has(c));

  extras.forEach(campo => {
    if(listFields.has(campo)){
      container.appendChild(criarListField(campo, slide[campo] || []));
    } else if(simpleExtras.has(campo)){
      container.appendChild(criarSimpleField(campo, slide[campo] || ''));
    }
  });
}

function criarSimpleField(campo, valor){
  const wrapper = document.createElement('div');
  wrapper.className = 'toolbar-row';
  wrapper.innerHTML = `
    <label>${campo}</label>
    <input
      id="extra-${campo}"
      value="${valor}"
      placeholder="${campo}"
      oninput="atualizarCampoExtra('${campo}', this.value)"
    >
  `;
  return wrapper;
}

function criarListField(campo, itens){
  const div = document.createElement('div');
  div.className = 'list-field';
  div.id = `list-field-${campo}`;

  div.innerHTML = `
    <div class="list-field-header">
      <label>${campo}</label>
      <button class="add-item-btn" onclick="adicionarItemLista('${campo}')">+ item</button>
    </div>
    <div id="list-items-${campo}">
      ${itens.map((item, i) => criarListItemHTML(campo, item, i)).join('')}
    </div>
  `;
  return div;
}

function criarListItemHTML(campo, valor, index){
  return `
    <div class="list-item-row" id="list-item-${campo}-${index}">
      <input
        value="${valor.replace(/"/g, '&quot;')}"
        placeholder="item ${index + 1}"
        oninput="atualizarItemLista('${campo}', ${index}, this.value)"
      >
      <button class="remove-btn" onclick="removerItemLista('${campo}', ${index})">✕</button>
    </div>
  `;
}

/* ===================================================
   ATUALIZAR SLIDE
=================================================== */

export function atualizarSlide(){
  const slide = slides[slideAtual];
  slide.titulo    = document.getElementById('titulo').value;
  slide.subtitulo = document.getElementById('subtitulo').value;
  slide.topline   = document.getElementById('topline').value;
  slide.imagem    = document.getElementById('imagem').value;
  atualizarEstado();
}

export function atualizarCampoExtra(campo, valor){
  slides[slideAtual][campo] = valor;
  atualizarEstado();
}

export function adicionarItemLista(campo){
  if(!Array.isArray(slides[slideAtual][campo])){
    slides[slideAtual][campo] = [];
  }
  slides[slideAtual][campo].push('');
  preencherCampos();
  atualizarEstado();
}

export function removerItemLista(campo, index){
  slides[slideAtual][campo].splice(index, 1);
  preencherCampos();
  atualizarEstado();
}

export function atualizarItemLista(campo, index, valor){
  slides[slideAtual][campo][index] = valor;
  atualizarEstado();
}

/* ===================================================
   LAYOUT / TEMA
=================================================== */

export function trocarLayout(){
  slides[slideAtual].tipo = document.getElementById('slide-type').value;
  slides[slideAtual].layout = slides[slideAtual].tipo;
  preencherCampos();
  atualizarEstado();
}

export function trocarTema(){
  slides[slideAtual].tema = document.getElementById('slide-tema').value;
  atualizarEstado();
}

/* ===================================================
   CRUD
=================================================== */

export function novoSlide(){
  slides.push({
    tipo: 'capa',
    layout: 'capa',
    tema: 'dark',
    titulo: 'Novo Slide',
    subtitulo: 'Descrição',
    topline: '',
    imagem: ''
  });
  slideAtual = slides.length - 1;
  preencherCampos();
  atualizarEstado();
}

export function duplicarSlide(){
  const clone = JSON.parse(JSON.stringify(slides[slideAtual]));
  slides.splice(slideAtual + 1, 0, clone);
  slideAtual++;
  preencherCampos();
  atualizarEstado();
}

export function removerSlide(){
  if(slides.length === 1) return;
  slides.splice(slideAtual, 1);
  slideAtual = Math.max(0, slideAtual - 1);
  preencherCampos();
  atualizarEstado();
}

/* ===================================================
   GERAR MARKDOWN COM FRONTMATTER
=================================================== */

export function gerarMarkdown(){

  // ---- FRONTMATTER ----
  const fm = frontmatter;
  let md = `---\n`;
  md += `slug: "${fm.slug || ''}"\n`;
  md += `titulo: "${fm.titulo || ''}"\n`;
  md += `descricao: "${fm.descricao || ''}"\n`;
  md += `categoria: "${fm.categoria || ''}"\n`;
  md += `icone: "${fm.icone || ''}"\n`;
  md += `source: "${fm.source || 'local'}"\n`;
  md += `---\n`;

  // ---- SLIDES ----
  slides.forEach(slide => {

    md += `#slide:${slide.tipo}\n`;

    const skip = new Set(['tipo','layout']);

    Object.entries(slide).forEach(([key, val]) => {
      if(skip.has(key)) return;

      if(Array.isArray(val)){
        md += `${key}:\n`;
        val.forEach(item => { md += `- ${item}\n`; });
      } else {
        // Valores multi-linha (titulo/subtitulo com quebras)
        if(typeof val === 'string' && val.includes('\n')){
          md += `${key}:\n`;
          val.split('\n').forEach(line => { md += `${line}\n`; });
        } else {
          md += `${key}: ${val}\n`;
        }
      }
    });

    md += '\n';
  });

  return md;
}

/* ===================================================
   SALVAR .MD
=================================================== */

export async function salvarMarkdown(){

  const markdown =
    gerarMarkdown();

  const blob =
    new Blob(
      [markdown],
      {type:"text/markdown"}
    );

  try{

    // arquivo já aberto anteriormente
    if(arquivoHandle){

      const writable =
        await arquivoHandle.createWritable();

      await writable.write(blob);

      await writable.close();

      console.log("Arquivo atualizado");

      return;
    }

    // primeira gravação
    if(window.showSaveFilePicker){

      arquivoHandle =
        await window.showSaveFilePicker({

          suggestedName:
            gerarNomeIncremental(),

          types:[
            {
              description:"Markdown",
              accept:{
                "text/markdown":[".md"]
              }
            }
          ]

        });

      const writable =
        await arquivoHandle.createWritable();

      await writable.write(blob);

      await writable.close();

      versaoArquivo++;

      console.log("Arquivo salvo");

      return;
    }

    // fallback
    const a =
      document.createElement("a");

    a.href =
      URL.createObjectURL(blob);

    a.download =
      gerarNomeIncremental();

    a.click();

    versaoArquivo++;

  }
  catch(err){

    console.error(err);

  }
}

// export async function salvarMarkdown(){

//   const markdown = gerarMarkdown();
//   const blob = new Blob([markdown], {type:'text/markdown'});

//   if(window.showSaveFilePicker){
//     try{
//       const handle = await window.showSaveFilePicker({
//         suggestedName: (frontmatter.slug || 'slides') + '.md',
//         types:[{description:'Markdown',accept:{'text/markdown':['.md']}}]
//       });
//       const writable = await handle.createWritable();
//       await writable.write(blob);
//       await writable.close();
//       alert('Arquivo salvo.');
//     }catch(err){ console.log(err); }
//   } else {
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = (frontmatter.slug || 'slides') + '.md';
//     a.click();
//     URL.revokeObjectURL(url);
//   }
// }

/* ===================================================
   ABRIR / CARREGAR .MD
=================================================== */

export function abrirMarkdown(){
  document.getElementById('abrir-md').click();
}

export async function carregarMarkdown(event){
  const file = event.target.files[0];

  arquivoHandle = null;

  if(!file) return;
  const texto = await file.text();

  const fm = parseFrontmatter(texto);
  if(fm){
    Object.assign(frontmatter, fm);
    preencherFrontmatter();
  }

  slides = parseSlides(texto);
  slideAtual = 0;
  preencherCampos();
  atualizarEstado();
}

function gerarNomeIncremental(){

  const slug =
    frontmatter.slug || "slides";

  const versao =
    String(versaoArquivo)
      .padStart(3,"0");

  return `${slug}-v${versao}.md`;
}

/* ===================================================
   PARSER FRONTMATTER
=================================================== */

export function parseFrontmatter(md){
  const match = md.match(/^---\n([\s\S]*?)\n---/);
  if(!match) return null;
  const fm = {};
  match[1].split('\n').forEach(line => {
    const m = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if(m) fm[m[1]] = m[2];
  });
  return fm;
}

/* ===================================================
   PARSER SLIDES
=================================================== */

export function parseSlides(md){
  // Remove frontmatter
  const semFM = md.replace(/^---[\s\S]*?---\n?/, '');

  const blocos = semFM
    .split(/^#slide:/gm)
    .filter(b => b.trim().length > 0 && /^\w/.test(b.trim()));

  return blocos.map(bloco => {
    const linhas = bloco.trim().split('\n');
    const tipo = linhas.shift().trim();
    const slide = { tipo, layout: tipo };
    let chaveAtual = null;

    linhas.forEach(linha => {
      if(!linha.trim()) return;

      const matchChave = linha.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.*)/);

      if(linha.startsWith('- ')){
        if(!Array.isArray(slide[chaveAtual])) slide[chaveAtual] = [];
        slide[chaveAtual].push(linha.replace(/^-\s*/,'').trim());
      } else if(matchChave){
        chaveAtual = matchChave[1].trim();
        const valor = matchChave[2].trim();
        if(valor === 'true'){
          slide[chaveAtual] = true;
        }
        else if(valor === 'false'){
          slide[chaveAtual] = false;
        }
        else{
          slide[chaveAtual] = valor;
        }
      } else {
        if(chaveAtual !== null){
          if(slide[chaveAtual] === ''){
            slide[chaveAtual] = linha.trim();
          } else if(typeof slide[chaveAtual] === 'string'){
            slide[chaveAtual] += '\n' + linha.trim();
          }
        }
      }
    });

    return slide;
  });
}

/* ===================================================
   EXPORT PNG
=================================================== */

export async function exportarPNG(){
  const canvas = await html2canvas(
    document.getElementById('slide-canvas'),
    {scale:2}
  );
  const a = document.createElement('a');
  a.href = canvas.toDataURL();
  a.download = `slide-${slideAtual+1}.png`;
  a.click();
}

/* ===================================================
   EXPORT PDF
=================================================== */

export async function exportarPDF(){
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({orientation:'landscape',unit:'px',format:[1280,720]});

  for(let i=0;i<slides.length;i++){

    if(slides[i].oculto){
      continue;
    }
    slideAtual = i;
    atualizarEstado();
    await esperar(300);
    const canvas = await html2canvas(document.getElementById('slide-canvas'),{scale:2});
    const img = canvas.toDataURL('image/png');
    if(i>0) pdf.addPage();
    pdf.addImage(img,'PNG',0,0,1280,720);
  }
  pdf.save((frontmatter.slug || 'slides') + '.pdf');
}

/* ===================================================
   EXPORT GIF
=================================================== */

export async function exportarGIF(){
  const imagens = [];
  for(let i=0;i<slides.length;i++){
    
    if(slides[i].oculto){
      continue;
    }

    slideAtual = i;
    atualizarEstado();
    await esperar(300);
    const canvas = await html2canvas(document.getElementById('slide-canvas'));
    imagens.push(canvas.toDataURL('image/png'));
  }
  gifshot.createGIF({images:imagens,interval:2}, function(obj){
    if(!obj.error){
      const a = document.createElement('a');
      a.href = obj.image;
      a.download = (frontmatter.slug || 'slides') + '.gif';
      a.click();
    }
  });
}

/* ===================================================
   UTILS
=================================================== */

export function esperar(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function iniciarApresentacao(){
  const el = document.getElementById('slide-canvas');
  if(el.requestFullscreen) el.requestFullscreen();
  window.apresentacaoAtiva = true;
  document.addEventListener('keydown', controlarSlidesApresentacao);
}

export function controlarSlidesApresentacao(e){
  if(!window.apresentacaoAtiva) return;
  if(e.key === 'ArrowRight' || e.key === ' ') proximoSlide();
  if(e.key === 'ArrowLeft') slideAnterior();
  if(e.key === 'Escape') encerrarApresentacao();
}

export function proximoSlide(){

  const novo =
    proximoSlideVisivel(slideAtual);

  if(novo !== slideAtual){

    slideAtual = novo;

    atualizarEstado();
  }
}

export function slideAnterior(){

  const novo =
    slideAnteriorVisivel(slideAtual);

  if(novo !== slideAtual){

    slideAtual = novo;

    atualizarEstado();
  }
}

export function encerrarApresentacao(){
  window.apresentacaoAtiva = false;
  document.removeEventListener('keydown', controlarSlidesApresentacao);
  if(document.exitFullscreen) document.exitFullscreen();
}

function proximoSlideVisivel(indice){

  let i = indice + 1;

  while(i < slides.length){

    if(!slides[i].oculto){
      return i;
    }

    i++;
  }

  return indice;
}

function slideAnteriorVisivel(indice){

  let i = indice - 1;

  while(i >= 0){

    if(!slides[i].oculto){
      return i;
    }

    i--;
  }

  return indice;
}

/* ===================================================
   INIT STATE
=================================================== */

let frontmatter = {
  slug: 'minha-apresentacao',
  titulo: 'Minha Apresentação',
  descricao: 'Descrição da apresentação',
  categoria: 'Categoria',
  icone: 'fa-solid fa-star',
  source: 'local'
};

let slides = [
  {
    tipo: 'capa',
    layout: 'capa',
    tema: 'dark',
    titulo: 'Meu SaaS',
    subtitulo: 'Plataforma inteligente',
    topline: '',
    imagem: 'https://picsum.photos/600/600'
  }
];

let slideAtual = 0;

let dragIndex = null;

let arquivoHandle = null;

let versaoArquivo = 1;

/* ===================================================
   LAYOUTS MAP
=================================================== */

const layouts = {
  capa:       renderCapa,
  capahero:   renderCapaHero,
  features:   renderFeatures,
  imagem:     renderImagem,
  stats:      renderStats,
  quote:      renderQuote,
  timeline:   renderTimeline,
  comparison: renderComparison,
  pricing:    renderPricing,
  team:       renderTeam,
  code:       renderCode,
  cta:        renderCTA
};

/* ===================================================
   LOCAL STORAGE
=================================================== */

const STORAGE_KEY = 'slide-engine-data';

function salvarLocalStorage(){

  localStorage.setItem(
    STORAGE_KEY,

    JSON.stringify({

      slides,
      slideAtual,
      frontmatter,
      versaoArquivo

    })
  );

}

function carregarLocalStorage(){
  const dados = localStorage.getItem(STORAGE_KEY);
  if(!dados) return;
  try{
    const parsed = JSON.parse(dados);
    if(Array.isArray(parsed.slides) && parsed.slides.length) slides = parsed.slides;
    if(typeof parsed.slideAtual === 'number') slideAtual = parsed.slideAtual;
    if(parsed.frontmatter) Object.assign(frontmatter, parsed.frontmatter);
    if(parsed.versaoArquivo){

      versaoArquivo =
        parsed.versaoArquivo;

    }
  }catch(err){ console.error(err); }
}

/* ===================================================
   URL STATE
=================================================== */

function atualizarURLSlide(){
  const params = new URLSearchParams(window.location.search);
  if(String(slideAtual) === params.get('slide')) return;
  const url = new URL(window.location.href);
  url.searchParams.set('slide', slideAtual);
  history.replaceState(null, '', url.pathname + url.search);
}

function carregarSlideDaURL(){
  const params = new URLSearchParams(window.location.search);
  const slideURL = parseInt(params.get('slide'), 10);
  if(!isNaN(slideURL) && slideURL >= 0 && slideURL < slides.length){
    slideAtual = slideURL;
  }
}

/* ===================================================
   ATUALIZAR ESTADO
=================================================== */

function atualizarEstado(){
  salvarLocalStorage();
  atualizarURLSlide();
  renderSlide();
  renderSlidesList();
}

/* ===================================================
   FRONTMATTER UI
=================================================== */

function preencherFrontmatter(){
  document.getElementById('fm-slug').value       = frontmatter.slug       || '';
  document.getElementById('fm-titulo').value     = frontmatter.titulo     || '';
  document.getElementById('fm-descricao').value  = frontmatter.descricao  || '';
  document.getElementById('fm-categoria').value  = frontmatter.categoria  || '';
  document.getElementById('fm-icone').value      = frontmatter.icone      || '';
  document.getElementById('fm-source').value     = frontmatter.source     || 'local';
}

function atualizarFrontmatter(){
  frontmatter.slug       = document.getElementById('fm-slug').value;
  frontmatter.titulo     = document.getElementById('fm-titulo').value;
  frontmatter.descricao  = document.getElementById('fm-descricao').value;
  frontmatter.categoria  = document.getElementById('fm-categoria').value;
  frontmatter.icone      = document.getElementById('fm-icone').value;
  frontmatter.source     = document.getElementById('fm-source').value;
  salvarLocalStorage();
}

export function alternarOculto(){

  slides[slideAtual].oculto =
    !slides[slideAtual].oculto;

  atualizarEstado();
}

async function carregarScript(src){

  return new Promise((resolve,reject)=>{

    const existente =
      document.querySelector(
        `script[src="${src}"]`
      );

    if(existente){
      resolve();
      return;
    }

    const script =
      document.createElement("script");

    script.src = src;

    script.onload = () => {

      console.log(
        "Script carregado:",
        src
      );

      resolve();
    };

    script.onerror = (err) => {

      console.error(
        "Erro carregando:",
        src
      );

      reject(err);
    };

    document.head.appendChild(script);

  });

}

/* ===================================================
   RENDER (ENTRY POINT)
=================================================== */

export async function render(el, props = {}, content, config, ctx = {}){

  injectStyles();

  el.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"/>

  <div class="app">

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="logo">Slide Engine</div>

      <button onclick="iniciarApresentacao()">▶ Apresentação</button>
      <button onclick="novoSlide()">+ Novo Slide</button>
      <button onclick="duplicarSlide()">Duplicar Slide</button>
      <button onclick="removerSlide()">Remover Slide</button>
      <button onclick="alternarOculto()">
        👁 Ocultar / Mostrar Slide
      </button>

      <hr>

      <button onclick="salvarMarkdown()">Salvar .MD</button>
      <button onclick="abrirMarkdown()">Abrir .MD</button>
      <input type="file" id="abrir-md" accept=".md" hidden onchange="carregarMarkdown(event)">

      <hr>

      <button onclick="exportarPNG()">Exportar PNG</button>
      <button onclick="exportarPDF()">Exportar PDF</button>
      <button onclick="exportarGIF()">Exportar GIF</button>

      <hr>

      <div id="slides-list"></div>

    </aside>

    <!-- EDITOR -->
    <main class="editor">

      <!-- FRONTMATTER -->
      <div class="frontmatter-panel">
        <div class="frontmatter-group">
          <label>slug</label>
          <input id="fm-slug" placeholder="slug" oninput="atualizarFrontmatter()">
        </div>
        <div class="frontmatter-group">
          <label>título</label>
          <input id="fm-titulo" placeholder="Título" oninput="atualizarFrontmatter()">
        </div>
        <div class="frontmatter-group">
          <label>descrição</label>
          <input id="fm-descricao" placeholder="Descrição" style="width:200px;" oninput="atualizarFrontmatter()">
        </div>
        <div class="frontmatter-group">
          <label>categoria</label>
          <input id="fm-categoria" placeholder="Categoria" oninput="atualizarFrontmatter()">
        </div>
        <div class="frontmatter-group">
          <label>ícone (FA)</label>
          <input id="fm-icone" placeholder="fa-solid fa-star" oninput="atualizarFrontmatter()">
        </div>
        <div class="frontmatter-group">
          <label>source</label>
          <select id="fm-source" onchange="atualizarFrontmatter()" style="height:36px;border:none;background:#1e293b;color:#fff;border-radius:10px;padding:0 10px;">
            <option value="local">local</option>
            <option value="gist">gist</option>
          </select>
        </div>
      </div>

      <!-- TOOLBAR -->
      <div class="toolbar">

        <div class="toolbar-row">

          <label>tipo</label>
          <select id="slide-type" onchange="trocarLayout()">
            <option value="capa">capa</option>
            <option value="capahero">capahero</option>
            <option value="features">features</option>
            <option value="imagem">imagem</option>
            <option value="stats">stats</option>
            <option value="quote">quote</option>
            <option value="timeline">timeline</option>
            <option value="comparison">comparison</option>
            <option value="pricing">pricing</option>
            <option value="team">team</option>
            <option value="code">code</option>
            <option value="cta">cta</option>
          </select>

          <label>tema</label>
          <select id="slide-tema" onchange="trocarTema()">
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="cyberpunk">cyberpunk</option>
            <option value="corporate">corporate</option>
            <option value="ted">ted</option>
            <option value="cinematic">cinematic</option>
          </select>

          <input id="titulo"    placeholder="Título"    oninput="atualizarSlide()">
          <input id="subtitulo" placeholder="Subtítulo" oninput="atualizarSlide()">
          <input id="topline"   placeholder="Topline"   oninput="atualizarSlide()">
          <input id="imagem"    placeholder="Imagem URL" oninput="atualizarSlide()">

        </div>

        <!-- Campos extras dinâmicos por tipo -->
        <div id="extra-fields"></div>

      </div>

      <div class="canvas-wrapper">
        <div id="slide-canvas"></div>
      </div>

    </main>

  </div>

  `;

  await carregarScript(
    "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"
  );

  await carregarScript(
    "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"
  );

  await carregarScript(
    "https://cdnjs.cloudflare.com/ajax/libs/gifshot/0.3.2/gifshot.min.js"
  );

  carregarLocalStorage();
  carregarSlideDaURL();
  preencherFrontmatter();
  preencherCampos();
  atualizarEstado();

  // Expõe funções no window
  const fns = {
    moverSlide,novoSlide, duplicarSlide, removerSlide,
    salvarMarkdown, abrirMarkdown, carregarMarkdown,
    exportarPNG, exportarPDF, exportarGIF,
    trocarLayout, trocarTema,
    atualizarSlide, atualizarCampoExtra,
    adicionarItemLista, removerItemLista, atualizarItemLista,
    iniciarApresentacao, controlarSlidesApresentacao,
    proximoSlide, slideAnterior, encerrarApresentacao,
    atualizarFrontmatter,
    atualizarEstado, salvarLocalStorage,
    carregarLocalStorage, atualizarURLSlide, carregarSlideDaURL, alternarOculto
  };

  Object.assign(window, fns);

  document.addEventListener(
  "keydown",
    async e => {

      if(
        (e.ctrlKey || e.metaKey)
        &&
        e.key.toLowerCase() === "s"
      ){

        e.preventDefault();

        await salvarMarkdown();

      }

    }
  );

}
