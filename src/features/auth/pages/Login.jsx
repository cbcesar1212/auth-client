import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="container bg-login">
      <div className="card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Contraseña</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Ingresar</button>
          {error && <p style={{ color: "yellow", marginTop: "0.5rem" }}>{error}</p>}
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
