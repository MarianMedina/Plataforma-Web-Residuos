import React, { useState } from "react";
import "../../styles/ReporteIncidencias.css";

const ReporteIncidencias = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [zona, setZona] = useState(""); 
  const [reportes, setReportes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !descripcion.trim() || !zona.trim()) {
      setMensaje(" Por favor, completa todos los campos antes de enviar.");
      return;
    }

    const nuevoReporte = { titulo, descripcion, zona, fecha: new Date().toLocaleString() };
    setReportes([...reportes, nuevoReporte]);
    setTitulo("");
    setDescripcion("");
    setZona("");
    setMensaje("¡Reporte enviado correctamente!");
  };

  return (
    <div className="max-width-container main-content-padding">
      <div className="info-section">
        <h2>Reporte de Incidencias</h2>
        <p>Usa este formulario para informar problemas o contratiempos en la recolección.</p>

        <form onSubmit={handleSubmit} className="search-form-grid">
          <div className="form-group">
            <label htmlFor="titulo">Título del Problema</label>
            <input
              id="titulo"
              type="text"
              placeholder="Ej. Basura no recolectada en la colonia X"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción Detallada</label>
            <textarea
              id="descripcion"
              rows="4"
              placeholder="Escribe aquí tu reporte con más detalle..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>

          {/* Seleccion de zona */}
          <div className="form-group">
            <label htmlFor="zona">Selecciona tu Zona</label>
            <select
              id="zona"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
            >
              <option value=""> *Selecciona una zona </option>
              <option value="Zona Norte">Norte</option>
              <option value="Zona Sur">Sur</option>
              <option value="Centro">Centro</option>
              
            </select>
          </div>

          <button type="submit" className="search-button">
            Enviar Reporte
          </button>
        </form>

        {mensaje && (
       <div
        className={`sin-resultados ${
        mensaje.includes("Por favor") ? "error" : "exito"
        }`}
  >
        {mensaje}
        </div>
        )}

        {reportes.length > 0 && (
          <div className="resultados-container" style={{ marginTop: "2rem" }}>
            <h3>Reportes Enviados</h3>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Zona</th> 
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {reportes.map((rep, index) => (
                  <tr key={index}>
                    <td>{rep.titulo}</td>
                    <td>{rep.descripcion}</td>
                    <td>{rep.zona}</td> 
                    <td>{rep.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReporteIncidencias;
