import { fetchJSON, getTenant, withTenant } from "../../../router.js";
import { decrypt_response } from "../../../modules/crypto.js"

function injectStyles() {
  if (!document.getElementById("login-petai-styles")) {
    const style = document.createElement("style");
    style.id = "login-petai-styles";
    style.textContent = `

/* style.css */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root{
  --bg:#f4f4f4;
  --card:#ffffff14;
  --border:#ffffff22;
  --text:#f7f9fc;
  --muted:#b9c4d6;
  --green:#34d46a;
  --green-dark:#22b956;
  --input:#f7f7f7;
  --gradiente: linear-gradient(135deg,#34d46a,#22b956);
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  min-height:100vh;
  font-family:'Inter',sans-serif;
  background:var(--bg);
  overflow:hidden;
  color:var(--text);

}

.bg{

  position:fixed;
  inset:0;
    
  background:
    radial-gradient(circle at top left,#1de98233,transparent 25%),
    radial-gradient(circle at bottom right,#357dff33,transparent 25%),
    linear-gradient(135deg,#eee,#fff);

  z-index:-1;

}

.container{

  width:100%;
  min-height:100vh;

  display:grid;
  grid-template-columns:1fr 520px;

  padding:30px;

}

.left-panel{

  display:flex;
  flex-direction:column;
  justify-content:space-between;

  padding:40px;

}

.brand{

  display:flex;
  align-items:center;
  gap:16px;

}

.logo{

  width:70px;
  height:70px;

  border-radius:22px;

  display:grid;
  place-items:center;

  background:linear-gradient(135deg,#32d96d,#22b956);

  font-size:28px;

}

.brand h1{

  font-size:42px;
  font-weight:800;

}

.content{

  max-width:620px;

}

.badge{

  display:inline-flex;
  padding:10px 18px;

  border-radius:999px;

  background: rgba( 255,255,255, 0.4);
  border:1px solid #ffffff;

  margin-bottom:24px;

}

.content h2{

  font-size:58px;
  line-height:1.1;

  margin-bottom:24px;

}

.content p{

  font-size:18px;
  color:var(--muted);

  line-height:1.8;
  margin-bottom:40px;

}

.features{

  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;

}

.features div{

  background: rgba( 255,255,255, 0.4);
  border:1px solid #ffffff;

  padding:20px;
  border-radius:24px;

  display:flex;
  flex-direction:column;
  gap:14px;

  transition:.35s;

}

.features div:hover{

  transform:translateY(-8px);

}

.features i{

  font-size:22px;
  color:#3ee07a;

}

.glass{

  backdrop-filter:blur(18px);
  background:var(--card);
  border:1px solid var(--border);

  box-shadow:0 20px 50px rgba(0,0,0,.3);

}

.auth-container{

  border-radius:14px;

  padding:40px;

  display:flex;
  flex-direction:column;
  justify-content:center;

  position:relative;
  overflow:hidden;

}

.auth-container::before{

  content:'';

  position:absolute;
  width:300px;
  height:300px;

  background:#2cff6b22;
  border-radius:50%;

  top:-100px;
  right:-100px;

  filter:blur(60px);

}

.toggle-wrapper{

  display:flex;

  background:#ffffff10;
  border-radius:16px;

  padding:6px;
  margin-bottom:40px;

}

.toggle-btn{

  flex:1;
  border:none;

  background: #f4f4f4;

  padding:16px;

  border-radius:12px;

  color:var(--text);
  cursor:pointer;

  font-size:15px;
  font-weight:600;

  transition:.35s;

  margin-left: 1rem;

}

.toggle-btn.active{

  background: var( --gradiente );

}

.form{

  display:none;
  flex-direction:column;

  animation:fade .5s ease;

}

.active-form{

  display:flex;

}

.form h2{

  font-size:38px;
  margin-bottom:12px;

}

.subtitle{

  color:var(--muted);
  margin-bottom:30px;

}

.input-group{

  position:relative;
  margin-bottom:20px;

}

.input-group i{

  position:absolute;
  top:50%;
  left:18px;

  transform:translateY(-50%);

  color:#aeb9ce;

}

.input-group input{

  width:100%;

  height:62px;

  border:none;
  outline:none;

  border-radius:18px;

  background:var(--input);

  padding:0 20px 0 52px;

  color:#333;

  border:1px solid transparent;

  transition:.35s;

}

.input-group input:focus{

  border-color:#34d46a;
  box-shadow:0 0 0 4px #32d96d22;

}

.form-options{

  display:flex;
  justify-content:space-between;
  align-items:center;

  margin-bottom:30px;

  font-size:14px;

}

.form-options a{

  color:#55e184;
  text-decoration:none;

}

.submit-btn{

  width:100%;
  height:62px;

  border:none;
  border-radius:18px;

  background:linear-gradient(135deg,#34d46a,#22b956);

  color:#fff;

  font-size:16px;
  font-weight:700;

  cursor:pointer;

  transition:.35s;

}

.submit-btn:hover{

  transform:translateY(-4px);
  box-shadow:0 15px 35px #2cd05f55;

}

.lgpd-box{

  background:#ffffff08;

  border:1px solid #ffffff12;

  padding:18px;

  border-radius:18px;

  margin-bottom:18px;

  font-size:14px;
  color:var(--muted);

  line-height:1.6;

}

.lgpd-box a{

  color:#55e184;
  text-decoration:none;

}

.back-btn{

  margin-top:16px;

  background:transparent;
  border:none;

  color:#55e184;

  cursor:pointer;

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

@media(max-width:1100px){

  .container{

    grid-template-columns:1fr;

  }

  .left-panel{

    display:none;

  }

}

@media(max-width:600px){

  .container{

    padding:14px;

  }

  .auth-container{

    padding:24px;

  }

  .content h2{

    font-size:42px;

  }

  .features{

    grid-template-columns:1fr;

  }

}

h1 span, 
h2 span
{
    color: var(--primary);
    font-style: italic;
    font-size: 1.1em;

}

.auth-container 
{
    background: #fff;
}

    
    `;
    document.head.appendChild(style);
  }
}

function login()
{
    // script.js

    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const recoveryForm = document.getElementById('recoveryForm');

    const showRecovery = document.getElementById('showRecovery');
    const backLogin = document.getElementById('backLogin');

    /* TOGGLE LOGIN/CADASTRO */

    loginTab.addEventListener('click', () => {

    loginTab.classList.add('active');
    registerTab.classList.remove('active');

    loginForm.classList.add('active-form');
    registerForm.classList.remove('active-form');
    recoveryForm.classList.remove('active-form');

    });

    registerTab.addEventListener('click', () => {

    registerTab.classList.add('active');
    loginTab.classList.remove('active');

    registerForm.classList.add('active-form');
    loginForm.classList.remove('active-form');
    recoveryForm.classList.remove('active-form');

    });

    /* RECOVERY */

    showRecovery.addEventListener('click', (e) => {

    e.preventDefault();

    loginForm.classList.remove('active-form');
    registerForm.classList.remove('active-form');

    recoveryForm.classList.add('active-form');

    });

    backLogin.addEventListener('click', () => {

    recoveryForm.classList.remove('active-form');

    loginForm.classList.add('active-form');

    });

    /* PARALLAX */

    const parallaxElements =
    document.querySelectorAll('.parallax');

    window.addEventListener('mousemove', (e) => {

    const x =
        (window.innerWidth - e.pageX * 2) / 100;

    const y =
        (window.innerHeight - e.pageY * 2) / 100;

    parallaxElements.forEach(el => {

        const speed = el.dataset.speed;

        el.style.transform =
        `translateX(${x * speed}px)
        translateY(${y * speed}px)`;

    });

    });

    /* ANIMAÇÃO ENTRADA */

    const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

        entry.target.style.opacity = 1;
        entry.target.style.transform =
            'translateY(0px)';

        }

    });

    },{
    threshold:.1
    });

    document
    .querySelectorAll('.features div,.auth-container')
    .forEach(el=>{

    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = '.7s ease';

    observer.observe(el);

    });

    /* MOCK SUBMIT */

    document.querySelectorAll('form').forEach(form=>{

    form.addEventListener('submit',async (e)=>{

        e.preventDefault();

        const btn = form.querySelector('.submit-btn');

        const tenant = getTenant()

        if ( btn.id == "register" )
        {
          const dados = { }
          const res = await fetchJSON( 'sso/register', tenant, dados )
          
          let resp = await decrypt_response( res.payload, res.clientKeys, res.tenantId )

          btn_animado( btn, resp.mensagem, resp.next )

        }
        else
        {
          const dados = { }
          const res = await fetchJSON( 'sso/login', tenant, dados )
        }

    });

    });
}

function btn_animado( btn, mensagem = "Falha x", next ){
  
  btn.innerHTML =

        '<i class="fa-solid fa-spinner fa-spin"></i>';

        setTimeout(()=>{

        btn.innerHTML = mensagem;

        setTimeout(()=>{

          if( next != "")
          {
            location.href  = withTenant( next )
          }

        },1000);

        },1200);
}

export function render(el, props = {}, content, config, ctx = {}) {

    injectStyles()
    
    el.innerHTML = `

<div class="bg"></div>

  <main class="container">

    <!-- LEFT -->
    <section class="left-panel parallax" data-speed="0.04">

      <div class="brand">

        <div class="logo">
          🐾
        </div>

        <h1>Pet<span>AI</span></h1>

      </div>

      <div class="content">

        <span class="badge">
          Plataforma segura
        </span>

        <h2>
          Controle, gestão e inteligência para o <span> seu negócio </span>.
        </h2>

        <p>
          Plataforma desenvolvida com foco em segurança,
          privacidade de dados e conformidade com a LGPD.
        </p>

        <div class="features">

          <div>
            <i class="fa-solid fa-lock"></i>
            Criptografia de dados
          </div>

          <div>
            <i class="fa-solid fa-user-shield"></i>
            Consentimento do usuário
          </div>

          <div>
            <i class="fa-solid fa-shield-halved"></i>
            Segurança avançada
          </div>

        </div>

      </div>

    </section>

    <!-- RIGHT -->
    <section class="auth-container glass">

      <div class="brand" style="margin: 3rem auto; position: relative;" >

        <div class="logo">
          🐾
        </div>

        <h1>Pet<span>AI</span></h1>

      </div>

      <!-- TOGGLE -->
      <div class="toggle-wrapper">

        <button id="loginTab" class="toggle-btn active">
          Entrar
        </button>

        <button id="registerTab" class="toggle-btn">
          Criar conta
        </button>

      </div>

      <!-- LOGIN -->
      <form id="loginForm" class="form active-form">

        <h2>Bem-vindo novamente</h2>

        <p class="subtitle">
          Faça login na sua conta
        </p>

        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>

          <input
            type="email"
            placeholder="Seu e-mail"
            required
          />
        </div>

        <div class="input-group">
          <i class="fa-solid fa-lock"></i>

          <input
            type="password"
            placeholder="Sua senha"
            required
          />
        </div>

        <div class="form-options">

          <label>
            <input type="checkbox">
            Lembrar-me
          </label>

          <a href="#" id="showRecovery">
            Recuperar senha
          </a>

        </div>

        <button class="submit-btn">
          Entrar
        </button>

      </form>

      <!-- REGISTER -->
      <form id="registerForm" class="form">

        <h2>Criar conta</h2>

        <p class="subtitle">
          Cadastre-se na plataforma
        </p>

        <div class="input-group">
          <i class="fa-solid fa-user"></i>

          <input
            type="text"
            placeholder="Nome completo"
            required
          />
        </div>

        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>

          <input
            type="email"
            placeholder="Seu e-mail"
            required
          />
        </div>

        <div class="input-group">
          <i class="fa-solid fa-lock"></i>

          <input
            type="password"
            placeholder="Crie uma senha"
            required
          />
        </div>

        <div class="input-group">
          <i class="fa-solid fa-lock"></i>

          <input
            type="password"
            placeholder="Confirmar senha"
            required
          />
        </div>

        <!-- LGPD -->
        <div class="lgpd-box">

          <label>
            <input type="checkbox" required>

            Concordo com os
            <a href="#">
              Termos de Uso
            </a>
            e com a
            <a href="#">
              Política de Privacidade
            </a>.
          </label>

        </div>

        <div class="lgpd-box">

          <label>
            <input type="checkbox">

            Aceito receber comunicações,
            novidades e campanhas.
          </label>

        </div>

        <button id="register" class="submit-btn">
          Criar Conta
        </button>

      </form>

      <!-- RECOVERY -->
      <form id="recoveryForm" class="form">

        <h2>Recuperar senha</h2>

        <p class="subtitle">
          Enviaremos um link para redefinição
        </p>

        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>

          <input
            type="email"
            placeholder="Seu e-mail"
            required
          />
        </div>

        <button class="submit-btn">
          Enviar link
        </button>

        <button
          type="button"
          class="back-btn"
          id="backLogin"
        >
          Voltar ao login
        </button>

      </form>

    </section>

  </main>
  
  
    `;

    login()

    document.querySelectorAll("a[data-route]").forEach(link => {
        link.href = withTenant(link.getAttribute("href"))
    })
    
}