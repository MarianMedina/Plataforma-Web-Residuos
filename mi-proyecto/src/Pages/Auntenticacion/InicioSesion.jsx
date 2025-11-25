import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Formularios.css";


const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!email.trim()) nuevosErrores.email = "Por favor ingresa tu correo";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      nuevosErrores.email = "Correo electrónico inválido";

    if (!password.trim()) nuevosErrores.password = "Por favor ingresa tu contraseña";

    if (!rol) nuevosErrores.rol = "Por favor selecciona tu rol";

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
  console.log({ email, password, rol });

  localStorage.setItem("rolUsuario", rol);

  if (rol === "Empleado") navigate("/empleado");
  else if (rol === "Administrador") navigate("/administrador");
  else navigate("/inicio"); 
}
  };

  return (
    <div className="form-container">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errores.email && <span className="error">{errores.email}</span>}
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errores.password && <span className="error">{errores.password}</span>}
        </div>

        <div className="input-group">
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="">* Selecciona tu rol </option>
            <option value="Ciudadano">Ciudadano</option>
            <option value="Empleado">Empleado</option>
            <option value="Administrador">Administrador</option>
          </select>
          {errores.rol && <span className="error">{errores.rol}</span>}
        </div>

        <button type="submit">Iniciar Sesión</button>
      </form>

      <p className="toggle-link">
        ¿No tienes cuenta? <Link to="/registro">Crear cuenta</Link>
      </p>
    </div>
  );
};

export default InicioSesion;