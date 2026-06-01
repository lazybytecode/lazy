const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

async function request(url, options = {}) {
  const {
    method = 'GET',
    headers = {},
    body = null,
    timeout = 15000, // 15s
    responseType = 'json' // 'json', 'text', 'blob'
  } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const config = {
    method,
    headers: { ...DEFAULT_HEADERS, ...headers },
    signal: controller.signal
  };

  // Trata body automaticamente
  if (body) {
    if (body instanceof FormData) {
      // Remove content-type para deixar o browser setar boundary
      delete config.headers['Content-Type'];
      config.body = body;
    } else if (typeof body === 'object') {
      config.body = JSON.stringify(body);
    } else {
      config.body = body;
    }
  }

  try {
    const response = await fetch(url, config);
    clearTimeout(id);

    let data;
    switch (responseType) {
      case 'text':
        data = await response.text();
        break;
      case 'blob':
        data = await response.blob();
        break;
      default:
        data = await response.json();
    }

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText,
        data
      };
    }

    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Timeout da requisição excedido');
    }
    throw error;
  }
}

// Métodos auxiliares
export const api = {
  get: (url, options = {}) =>
    request(url, { ...options, method: 'GET' }),

  post: (url, body, options = {}) =>
    request(url, { ...options, method: 'POST', body }),

  put: (url, body, options = {}) =>
    request(url, { ...options, method: 'PUT', body }),

  patch: (url, body, options = {}) =>
    request(url, { ...options, method: 'PATCH', body }),

  delete: (url, options = {}) =>
    request(url, { ...options, method: 'DELETE' }),

  request // acesso direto se precisar customizar mais
};

export default api;


/* USO

import api from './apiClient.js';

// GET
const users = await api.get('/api/users');

// POST JSON
await api.post('/api/users', {
  name: 'João',
  email: 'joao@email.com'
});

// Upload de arquivo
const formData = new FormData();
formData.append('file', fileInput.files[0]);

await api.post('/upload', formData);

// Custom headers
await api.get('/secure', {
  headers: {
    Authorization: 'Bearer TOKEN_AQUI'
  }
});

*/