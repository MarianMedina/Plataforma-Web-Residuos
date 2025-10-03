import React, { useState } from "react";

function ReporteIncidencias() {
  const [reporte, setReporte] = useState(""); // estado para el input
  const [reportesEnviados, setReportesEnviados] = useState([]); // lista de reportes
  const [error, setError] = useState(""); // estado para mensajes de error

  const handleEnviar = () => {
    if (!reporte.trim()) {
      setError("El reporte no puede estar vacío");
      return;
    }
    // agregar el nuevo reporte a la lista
    setReportesEnviados([...reportesEnviados, reporte]);
    setReporte(""); // limpiar el input
    setError(""); // limpiar mensaje de error
  };

  return (
    <div>
      <h2>Reporte de Incidencias</h2>
      <textarea
        placeholder="Escribe aquí tu reporte"
        value={reporte}
        onChange={(e) => setReporte(e.target.value)}
      />
      <br />
      <button onClick={handleEnviar}>Enviar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "20px" }}>
        <h3>Reportes enviados:</h3>
        {reportesEnviados.length === 0 ? (
          <p>No hay reportes aún.</p>
        ) : (
          <ul>
            {reportesEnviados.map((r, index) => (
              <li key={index}>{r}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ReporteIncidencias;

