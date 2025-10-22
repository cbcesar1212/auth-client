import axios from 'axios';

// Usamos el proxy definido en vite.config.js
const BASE_URL = "https://reflexoperu-v3.marketingmedico.vip/backend/public/api";


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Si más adelante el backend configura CORS con credenciales, puedes reactivar:
  // withCredentials: true,
});

// Interceptor para agregar token (si existe)
api.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('auth_token='))
      ?.split('=')[1];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authService = {
  // Registrar usuario
  register: async (userData) => {
    try {
      const response = await api.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error("Error en register:", error);
      throw error.response?.data || error;
    }
  },

  // Iniciar sesión
  login: async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      return response.data;
    } catch (error) {
      console.error("Error en login:", error);
      throw error.response?.data || error;
    }
  },

  // Obtener perfil
  getProfile: async () => {
    try {
      const response = await api.get('/profile');
      return response.data;
    } catch (error) {
      console.error("Error en profile:", error);
      throw error.response?.data || error;
    }
  },

  // Cerrar sesión
  logout: async () => {
    try {
      const response = await api.delete('/logout');
      return response.data;
    } catch (error) {
      console.error("Error en logout:", error);
      throw error.response?.data || error;
    }
  },
};

export default authService;
