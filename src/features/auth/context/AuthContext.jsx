import { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/authService";
import Cookies from "js-cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para inicializar el usuario desde la cookie al cargar la app
  const loadUser = async () => {
    const token = Cookies.get("auth_token");
    if (token) {
      try {
        const profile = await authService.getProfile();
        setUser(profile);
      } catch (error) {
        console.error("No se pudo cargar el perfil:", error);
        logout();
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const login = async (credentials) => {
    try {
      const data = await authService.login(credentials);
      // Guardar token en cookie segura (HttpOnly no accesible por JS si backend lo hace)
      Cookies.set("auth_token", data.token, { expires: 1 });
      const profile = await authService.getProfile();
      setUser(profile);
      return profile;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const data = await authService.register(userData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setUser(null);
      Cookies.remove("auth_token");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext };
