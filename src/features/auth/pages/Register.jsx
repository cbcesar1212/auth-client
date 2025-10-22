import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    document_number: "",
    name: "",
    paternal_lastname: "",
    maternal_lastname: "",
    email: "",
    phone: "",
    user_name: "",
    password: "",
    last_session: new Date().toISOString().slice(0, 10),
    account_statement: true,
    document_type_id: 1,
    country_id: 179,
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate("/login");
    } catch (err) {
      setError(err.message || "Error al registrar usuario");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <label>Documento</label>
          <input
            type="text"
            name="document_number"
            value={formData.document_number}
            onChange={handleChange}
            required
          />
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Apellido Paterno</label>
          <input
            type="text"
            name="paternal_lastname"
            value={formData.paternal_lastname}
            onChange={handleChange}
            required
          />
          <label>Apellido Materno</label>
          <input
            type="text"
            name="maternal_lastname"
            value={formData.maternal_lastname}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Teléfono</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Usuario</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Registrarse</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
