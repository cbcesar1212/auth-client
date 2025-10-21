import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null); // ✅ crea el contexto

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Este hook personalizado es el que debes importar en todos tus componentes
export const useAuth = () => {
  return useContext(AuthContext);
};

// 👇 Esto soluciona tu error actual
export { AuthContext };
