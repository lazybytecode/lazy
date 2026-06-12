export async function render(app, params, content, config, ctx) {
  app.innerHTML = `
    <div class="not-found">
      <h1>404</h1>
      <p>Página não encontrada</p>
      <small>${ctx.path}</small>
    </div>
  `
}