import { api } from '/modules/api_client.js';
import { CONFIG } from "/config.js";

  let API;

  if (CONFIG.ENVIRONMENT === "production") {
    API = CONFIG.API_URL;
  } else {
    API = CONFIG.API_URL_LOCAL;
  }

function envio_de_dados() {
  const form = document.getElementById('tenantForm');

  form.addEventListener('submit', async (e) => {
    
    e.preventDefault();

    const tenantName = document.getElementById('tenant_name').value;

    try {
      
      const payload = {
        name: tenantName
      };

      const response = await api.post(
        API + '/data/tenant',
        JSON.stringify(payload), // força envio como JSON string
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Sucesso:', response);
      alert('Tenant criado com sucesso!');
      form.reset();

    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário');
    }
  });
}

function pegaTenants() {

  fetch(`${API}/api/tenant`)
    .then(response => response.text())
    .then(html => {
      document.querySelector('#clientes').innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
}

export function render(el, props = {}, content, config, ctx = {}) {

  el.innerHTML = `
    
  <h1>Cadastro de Clientes</h1>

    <form id="tenantForm" method="POST" >
      <p>
        <label for="tenant_name">Tenant Name:</label>
        <input type="text" name="tenant_name" id="tenant_name" required>
      </p>

      <p>
        <button type="submit">Enviar</button>
      </p>
    </form>

    <div id="clientes"></div>
  `

  envio_de_dados()
  pegaTenants()

}