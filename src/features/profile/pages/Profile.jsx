import { useAuth } from "../../auth/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user)
    return (
      <div className="container">
        <div className="card">
          <p>Cargando perfil...</p>
        </div>
      </div>
    );

  return (
    <div className="container">
      <div className="card">
        <h2>Mi Perfil</h2>
        <div className="profile-card">
          <p>
            Nombre: <span>{user.user_name}</span>
          </p>
          <p>
            Email: <span>{user.email}</span>
          </p>
          <p>
            Teléfono: <span>{user.phone}</span>
          </p>
          <p>
            Rol: <span>{user.role?.name}</span>
          </p>
          <p>
            País: <span>{user.country?.name}</span>
          </p>
        </div>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Profile;
