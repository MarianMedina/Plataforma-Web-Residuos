import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Formularios.css";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (!nombre.trim()) nuevosErrores.nombre = "Por favor ingresa tu nombre";
    if (!email.trim()) nuevosErrores.email = "Por favor ingresa tu correo";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      nuevosErrores.email = "Correo electrónico inválido";
    if (!password.trim()) nuevosErrores.password = "Por favor ingresa tu contraseña";
    if (!rol) nuevosErrores.rol = "Por favor selecciona tu rol";

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      console.log({ nombre, email, password, rol });

      /* Redirigir según el rol */
      if (rol === "Empleado") navigate("/empleado");
      else if (rol === "Administrador") navigate("/administrador");
      else navigate("/usuario");
    }
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}

        <input
          type="text"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <span className="error">{errores.email}</span>}

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errores.password && <span className="error">{errores.password}</span>}

        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value=""> Selecciona tu rol </option>
          <option value="Ciudadano">Ciudadano</option>
          <option value="Empleado">Empleado</option>
          <option value="Administrador">Administrador</option>
        </select>
        {errores.rol && <span className="error">{errores.rol}</span>}

        <button type="submit">Registrarse</button>
      </form>

       <p className="login-link">
    ¿Ya tienes cuenta? <Link to="/inicio-sesion">Iniciar sesión</Link>

  </p>
    </div>
  );
};

export default Registro;
