import { brand } from '/modules/brand.js'
import { getTenant, fetchJSON } from '../router.js'
import { decrypt_response } from '../modules/crypto.js'
import { mensagem } from '../modules/utils.js'

/* =========================================================
   STYLES
========================================================= */

function injectStyles() {

  if (document.getElementById("login-styles")) return

  const style = document.createElement("style")

  style.id = "login-styles"

  style.textContent = `

    #page-login{
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:24px;
    }

    .login-card{
      width:100%;
      max-width:450px;
      background:var(--color-surface);
      border:1px solid var(--color-border);
      border-radius:var(--radius-sm);
      padding:40px 36px;
      position:relative;
      overflow:hidden;
    }

    .login-card::before{
      content:'';
      position:absolute;
      top:-60px;
      left:50%;
      transform:translateX(-50%);
      width:260px;
      height:120px;
      background:radial-gradient(
        ellipse,
        rgba(79,126,255,.18) 0%,
        transparent 70%
      );
      pointer-events:none;
    }

    .login-logo{
      display:flex;
      align-items:center;
      gap:10px;
      margin-bottom:32px;
    }

    .logo-icon{
      width:36px;
      height:36px;
      background:var(--color-accent);
      border-radius:8px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family:var(--font-display);
      font-weight:800;
      font-size:18px;
      color:#fff;
      letter-spacing:-1px;
    }

    .logo-text{
      font-family:var(--font-display);
      font-weight:700;
      font-size:20px;
      letter-spacing:.04em;
    }

    .login-title{
      font-family:var(--font-display);
      font-size:26px;
      font-weight:800;
      letter-spacing:-.02em;
      margin-bottom:6px;
    }

    .login-sub{
      color:var(--color-muted);
      font-size:12.5px;
      margin-bottom:28px;
    }

    .field{
      margin-bottom:18px;
    }

    .field label{
      display:block;
      font-size:11px;
      letter-spacing:.08em;
      text-transform:uppercase;
      color:var(--color-muted);
      margin-bottom:7px;
    }

    .field input{
      width:100%;
      background:var(--color-bg);
      border:1px solid var(--color-border);
      border-radius:8px;
      padding:11px 14px;
      color:var(--color-text);
      font-family:var(--font-body);
      font-size:14px;
      outline:none;
      transition:border-color .2s, box-shadow .2s;
    }

    .field input:focus{
      border-color:var(--color-accent);
      box-shadow:0 0 0 3px rgba(79,126,255,.15);
    }

    .field input.error{
      border-color:#ff5f5f;
      box-shadow:0 0 0 3px rgba(255,95,95,.12);
    }

    .btn{
      width:100%;
      padding:12px;
      border-radius:8px;
      border:none;
      cursor:pointer;
      font-family:var(--font-display);
      font-weight:700;
      font-size:14px;
      letter-spacing:.04em;
      transition:opacity .2s, transform .1s;
      justify-content: center;
    }

    .btn:active{
      transform:scale(.98);
    }

    .btn-primary{
      background:var(--color-accent);
      color:#fff;
    }

    .btn-primary:hover{
      opacity:.88;
    }

    .btn-primary:disabled{
      opacity:.4;
      cursor:not-allowed;
    }

    .status-bar{
      margin-top:16px;
      padding:10px 14px;
      border-radius:8px;
      font-size:12.5px;
      display:none;
      align-items:center;
      gap:8px;
    }

    .status-bar.show{
      display:flex;
    }

    .api-hint{
      margin-top:24px;
      padding:12px 14px;
      background:rgba(243,156,18,.06);
      border:1px solid rgba(243,156,18,.2);
      border-radius:8px;
      font-size:11.5px;
      color:var(--color-amber);
      line-height:1.7;
      display:none;
    }

    .api-hint.show{
      display:block;
    }

    .tabes{
      display:flex;
      gap:4px;
      margin-bottom:24px;
      background:var(--bg);
      border-radius:8px;
      padding:4px;
    }

    .tabe-btn{
      flex:1;
      padding:8px;
      border:none;
      border-radius:6px;
      background:none;
      color:var(--text-dim);
      cursor:pointer;
      font-size:.78rem;
      letter-spacing:.5px;
      transition:all .18s;
    }

    .tabe-btn.active{
      background:#1e1e2e;
      color:#e8e8f0;
    }

    div.tabe-panel{
      display:none !important;
    }

    div.tabe-panel.active{
      display:block !important;
    }

    .password-rules{
      margin-top:10px;
      font-size:12px;
      line-height:1.8;
    }

    .password-rules div{
      color:#999;
      transition:.2s;
    }

    .password-rules div.ok{
      color:#4ade80;
    }

    .password-rules div.error{
      color:#ff6b6b;
    }

    .lgpd-box{
      margin:20px 0;
      padding:14px;
      border:1px solid var(--color-border);
      border-radius:8px;
      background:rgba(255,255,255,.02);
    }

    .lgpd-box label{
      display:flex;
      gap:10px;
      align-items:flex-start;
      font-size:13px;
      line-height:1.5;
      color:var(--color-text);
    }

    .lgpd-box a{
      color:var(--color-accent);
      text-decoration:none;
      font-weight:600;
    }

    .modal-overlay{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.7);
      display:none;
      align-items:center;
      justify-content:center;
      z-index:9999;
      padding:20px;
    }

    .modal-overlay.show{
      display:flex;
    }

    .modal-box{
      width:100%;
      max-width:700px;
      max-height:85vh;
      background:#15151d;
      border:1px solid var(--color-border);
      border-radius:12px;
      overflow:hidden;
      display:flex;
      flex-direction:column;
    }

    .modal-header{
      padding:18px 20px;
      border-bottom:1px solid var(--color-border);
      font-size:18px;
      font-weight:700;
      color: #d8d8e0;
    }

    .modal-content{
      padding:20px;
      overflow-y:auto;
      line-height:1.7;
      font-size:14px;
      color:#d8d8e0;
    }

    .modal-footer{
      padding:16px 20px;
      border-top:1px solid var(--color-border);
      display:flex;
      justify-content:flex-end;
      gap:10px;
    }

    .btn-secondary{
      background:#2a2a38;
      color:#fff;
    }

  `

  document.head.appendChild(style)
}

/* =========================================================
   VALIDAR SENHA
========================================================= */

export function validatePassword(password) {

  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  }

  const valid =
    rules.length &&
    rules.upper &&
    rules.number &&
    rules.special

  let message = 'Senha válida'

  if (!rules.length) {
    message = 'Mínimo 8 caracteres'
  } else if (!rules.upper) {
    message = 'Precisa de letra maiúscula'
  } else if (!rules.number) {
    message = 'Precisa de número'
  } else if (!rules.special) {
    message = 'Precisa de caractere especial'
  }

  return {
    valid,
    message,
    rules
  }
}

/* =========================================================
   PASSWORD UI
========================================================= */

function updatePasswordUI(password) {

  const result = validatePassword(password)

  const passInput = document.getElementById('register-pass')

  if (!passInput) return

  if (result.valid) {
    passInput.classList.remove('error')
  } else {
    passInput.classList.add('error')
  }

  document.getElementById('rule-length')
    ?.classList.toggle('ok', result.rules.length)

  document.getElementById('rule-upper')
    ?.classList.toggle('ok', result.rules.upper)

  document.getElementById('rule-number')
    ?.classList.toggle('ok', result.rules.number)

  document.getElementById('rule-special')
    ?.classList.toggle('ok', result.rules.special)

}

/* =========================================================
   TABS AUTH
========================================================= */

export async function tabsAuth() {

  const buttons = document.querySelectorAll('.tabe-btn')

  const cadastrarBtn = document.getElementById('cadastrar')

  const passEl = document.getElementById('register-pass')

  /* ======================================================
     PASSWORD INPUT
  ====================================================== */

  if (passEl && !passEl.dataset.bound) {

    passEl.dataset.bound = "true"

    passEl.addEventListener('input', () => {

      updatePasswordUI(passEl.value)

    })
  }

  /* ======================================================
     CADASTRO
  ====================================================== */

  if (cadastrarBtn && !cadastrarBtn.dataset.bound) {

    cadastrarBtn.dataset.bound = "true"

    cadastrarBtn.addEventListener('click', async (e) => {

      e.preventDefault()

      const email =
        document.getElementById('register-user')
        ?.value
        ?.trim()

      const senha =
        document.getElementById('register-pass')
        ?.value
        ?.trim()

      const aceito =
        document.getElementById('lgpd-check')
        ?.checked

      if (!aceito) {
        mensagem('Aceite os termos LGPD')
        return
      }

      if (!email || !senha) {
        mensagem('Preencha e-mail e senha')
        return
      }

      const validation = validatePassword(senha)

      if (!validation.valid) {
        mensagem(validation.message)
        return
      }

      try {

        cadastrarBtn.disabled = true

        const dados = {
          email,
          senha,
          lgpd: aceito,
          dataAceite: new Date().toISOString()
        }

        const retorno = await fetchJSON(
          'users',
          getTenant(),
          dados
        )

        const dadoss = await decrypt_response(
          retorno.payload,
          retorno.clientKeys
        )


        mensagem( dadoss,'api-hint', '/dashboard' )

        console.log( dadoss['erro'])

      } catch (erro) {

        console.log( erro )

      } finally {

        cadastrarBtn.disabled = false

      }

    })
  }

  /* ======================================================
     TABS
  ====================================================== */

  buttons.forEach(btn => {

    btn.addEventListener('click', (e) => {

      e.preventDefault()

      document
        .querySelectorAll('.tabe-btn')
        .forEach(b => b.classList.remove('active'))

      document
        .querySelectorAll('.tabe-panel')
        .forEach(p => p.classList.remove('active'))

      btn.classList.add('active')

      const target =
        document.getElementById(
          'tabe-' + btn.dataset.tabe
        )

      target?.classList.add('active')

      const title = document.getElementById('t')

      title.innerHTML =
        btn.dataset.tabe === 'register'
          ? 'Cadastrar'
          : 'Entrar'

    })

  })

}

/* =========================================================
   LGPD
========================================================= */

export async function initLGPDModal() {

  const modal = document.getElementById('lgpd-modal')
  const openBtn = document.getElementById('open-lgpd')
  const closeBtn = document.getElementById('close-lgpd')
  const acceptBtn = document.getElementById('accept-lgpd')
  const content = document.getElementById('lgpd-content')
  const checkbox = document.getElementById('lgpd-check')
  const cadastrar = document.getElementById('cadastrar')

  let aceitou = false

  cadastrar.disabled = true

  function validarScroll() {

    const temScroll = content.scrollHeight > content.clientHeight

    // Se não tiver scroll, habilita direto
    if (!temScroll) {
      acceptBtn.disabled = false
      return
    }

    // Se tiver scroll, verifica se chegou no final
    const chegouFinal =
      content.scrollTop + content.clientHeight >=
      content.scrollHeight - 10

    acceptBtn.disabled = !chegouFinal
  }

  openBtn.addEventListener('click', (e) => {

    e.preventDefault()

    modal.classList.add('show')

    content.scrollTop = 0

    // valida ao abrir
    validarScroll()
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show')
  })

  content.addEventListener('scroll', validarScroll)

  acceptBtn.addEventListener('click', () => {

    aceitou = true

    checkbox.checked = true

    cadastrar.disabled = false

    modal.classList.remove('show')
  })

  checkbox.addEventListener('click', (e) => {

    if (!aceitou) {

      e.preventDefault()

      modal.classList.add('show')

      content.scrollTop = 0

      validarScroll()
    }
  })
}

/* =========================================================
   RENDER
========================================================= */

export async function render(
  el,
  props = {},
  content,
  config,
  ctx = {}
) {

  injectStyles()

  const data = brand()

  const form = document.createElement("form")

  form.id = "login-form"

  form.innerHTML = `

    <div id="page-login" class="page">

      <div class="login-card">

        <div class="login-logo">

          <div class="logo-icon">
            ${data[0].icone}
          </div>

          <h1>
            <a href="/" class="nav-logo">
              ${data[0].marca}
            </a>
          </h1>

        </div>

        <div class="tabes">

          <button
            type="button"
            class="tabe-btn active"
            data-tabe="login"
          >
            Login
          </button>

          <button
            type="button"
            class="tabe-btn"
            data-tabe="register"
          >
            Cadastrar
          </button>

        </div>

        <h1 class="login-title">
          <span id="t">Entrar</span> na plataforma
        </h1>

        <p class="login-sub">
          Autenticação segura via cookie HttpOnly
        </p>

        <!-- LOGIN -->

        <div class="tabe-panel active" id="tabe-login">

          <div class="field">

            <label>Usuário</label>

            <input
              id="login-user"
              type="email"
              placeholder="seu@email.com"
              autocomplete="off"
            />

          </div>

          <div class="field">

            <label>Senha</label>

            <input
              id="login-pass"
              type="password"
              placeholder="••••••••"
            />

          </div>

          <button
            id="entrar"
            type="submit"
            class="btn btn-primary"
          >
            Entrar
          </button>

        </div>

        <!-- REGISTER -->

        <div class="tabe-panel" id="tabe-register">

          <div class="field">

            <label>E-mail</label>

            <input
              id="register-user"
              type="email"
              placeholder="seu@email.com"
              autocomplete="off"
            />

          </div>

          <div class="field">

            <label>Senha</label>

            <input
              id="register-pass"
              type="password"
              placeholder="••••••••"
            />

            <div class="password-rules">

              <div id="rule-length">
                • mínimo 8 caracteres
              </div>

              <div id="rule-upper">
                • letra maiúscula
              </div>

              <div id="rule-number">
                • número
              </div>

              <div id="rule-special">
                • caractere especial
              </div>

            </div>

          </div>

          <div class="lgpd-box">

            <label>

              <input
                id="lgpd-check"
                type="checkbox"
              >

              <span>

                Li e concordo com os

                <a href="#" id="open-lgpd">
                  Termos de Uso e Política de Privacidade
                </a>

              </span>

            </label>

          </div>

          <button
            id="cadastrar"
            type="submit"
            class="btn btn-primary"
          >
            Cadastrar
          </button>

        </div>

        <div id="api-hint" class="api-hint"></div>

      </div>

    </div>

    <!-- MODAL -->

    <div class="modal-overlay" id="lgpd-modal">

      <div class="modal-box">

        <div class="modal-header"> Política de Privacidade e Termos de Uso </div>

        <div class="modal-content" id="lgpd-content">
          <p>
              Ao utilizar esta plataforma, você concorda com a coleta, armazenamento e
              tratamento dos seus dados pessoais conforme a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018).
          </p>
          <h3>1. Dados coletados</h3>
          <p>
              Podemos coletar nome, e-mail, IP, navegador, data e hora de acesso e
              demais informações necessárias para autenticação e segurança da
              plataforma.
          </p>
          <h3>2. Finalidade</h3>
          <p>Os dados serão utilizados exclusivamente para:</p>
          <ul>
              <li>Autenticação de usuários</li>
              <li>Segurança da aplicação</li>
              <li>Melhoria da experiência do usuário</li>
              <li>Cumprimento de obrigações legais</li>
          </ul>
          <h3>3. Compartilhamento</h3>
          <p>
              Seus dados não serão comercializados ou compartilhados indevidamente com
              terceiros.
          </p>
          <h3>4. Direitos do titular</h3>
          <p>
              Você poderá solicitar atualização, correção ou exclusão dos seus dados
              pessoais a qualquer momento.
          </p>
          <h3>5. Segurança</h3>
          <p>
              Utilizamos medidas técnicas e administrativas para proteger seus dados
              contra acessos não autorizados.
          </p>
          <h3>6. Consentimento</h3>
          <p>
              O cadastro somente poderá ser concluído após a leitura integral e aceite
              dos termos apresentados.
          </p>
          <p style="margin-top: 40px">Fim do documento.</p>
        </div>


        <div class="modal-footer">

          <button
            type="button"
            id="close-lgpd"
            class="btn btn-secondary"
          >
            Fechar
          </button>

          <button
            type="button"
            id="accept-lgpd"
            class="btn btn-primary"
            disabled
          >
            Aceitar termos
          </button>

        </div>

      </div>

    </div>   `

    // [ ] TODO - puxar valor do DB

  el.appendChild(form)

  await tabsAuth()

  await initLGPDModal()

}