// Lista de funções que serão notificadas quando o estado mudar
const listeners = [];

// Estado global da aplicação com fallback inicial
let state = {
  theme: "light"
};

/**
 * Retorna o estado atual da aplicação.
 * @returns {Object} Estado atual
 */
export function getState() {
  return state;
}

/**
 * Atualiza parcialmente o estado global.
 * - Mescla o estado atual com os novos dados recebidos
 * - Salva o estado atualizado no localStorage
 * - Notifica todos os inscritos (listeners)
 *
 * @param {Object} partial
 */
export function setState(partial) {
  const prev = state;

  state = Object.assign({}, state, partial);

  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (err) {
    console.warn("Erro ao salvar state:", err);
  }

  listeners.forEach(fn => fn(state, prev));

}

/**
 * Adiciona um listener para mudanças de estado
 */
export function subscribe(fn) {
  listeners.push(fn);
}

/**
 * Inicializa o estado a partir do localStorage
 * Deve ser chamada no início da aplicação
 */
export function initState() {
  const saved = localStorage.getItem("state");

  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);

    // 🔥 merge com fallback (evita quebrar theme inexistente)
    state = {
      theme: "light",
      ...parsed
    };
  } catch (err) {
    console.warn("Estado inválido no localStorage, resetando...");
    state = { theme: "light" };
  }
}