import { fetchJSON, fileToBase64, mostrarToast, sha256File } from "../../router.js"
import { decrypt_response  } from "../../modules/crypto.js";  

function injectStyles() {
  if (!document.getElementById("estoque-styles")) {
    const style = document.createElement("style");
    style.id = "estoque-styles";
    style.textContent = `

    
    `;
    document.head.appendChild(style);
  }
}

async function etl(){

  const file = document.getElementById("file").files[0];

  const arquivoBase64 = await fileToBase64(file);

  const hash_file = await sha256File( file )

  console.log( "Arquivo", hash_file )

  const dados = {
    nome : file.name,
    tipo : file.type,
    tamanho : file.size,
    hash_arquivo : hash_file,
    conteudo : arquivoBase64
  }

  const { payload, clientKeys, tenantId } = await fetchJSON( "etl/upload", "default", dados )

  const res = JSON.parse ( await decrypt_response( payload, clientKeys, tenantId  ) )

  mostrarToast( res?.message || "Operação concluída", "top-center", "api-message" )

  console.log( res?.saida )

}

export async function render(el, props = {}, content, config, ctx = {}) {
    
  el.innerHTML = `
    
    <h2>Upload CSV/XLSX</h2>

    <div id="api-message"></div>

    <input type="file" id="file">

    <input id="btnEtl" type="submit" value="Enviar dados" >

    <h2>Dados</h2>

    <pre id="output"></pre>
    
    `;

    document.getElementById("btnEtl").addEventListener("click", etl);
}
