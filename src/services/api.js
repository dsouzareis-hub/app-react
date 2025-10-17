// frontend/src/services/api.js
import axios from 'axios';

// Cria a instância base
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Adiciona o token automaticamente se existir
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Intercepta respostas 401 (token inválido ou expirado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn('Token inválido ou sessão expirada');
      localStorage.removeItem('token');
      window.location.href = '/'; // Redireciona pro login
    }
    return Promise.reject(error);
  }
);

export default api;
