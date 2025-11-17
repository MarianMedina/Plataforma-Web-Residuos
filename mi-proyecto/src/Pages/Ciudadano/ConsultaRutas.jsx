import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/ConsultaRutas.css";
import rutas from "../../data/rutas.json";

const ConsultaRutas = () => {
  const [sector, setSector] = useState("");
  const [dia, setDia] = useState("");
  const [resultados, setResultados] = useState([]);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  const manejarBusqueda = (e) => {
    e.preventDefault();
    const filtradas = rutas.filter((ruta) => {
      const matchSector =
        sector === "" || ruta.sector.toLowerCase().includes(sector.toLowerCase());
      const matchDia = dia === "" || ruta.dia === dia;
      return matchSector && matchDia;
    });
    setResultados(filtradas);
    setBusquedaRealizada(true);
  };

  const sectoresUnicos = [...new Set(rutas.map((r) => r.sector))];

  return (
    <div className="max-width-container main-content-padding">
      <div className="info-section">
        <h2>Consulta de Rutas y Horarios</h2>
        <p>Selecciona tu Zona y/o día para ver los horarios de recolección.</p>

        <form onSubmit={manejarBusqueda} className="search-form-grid">
          <div className="form-group">
            <label htmlFor="sector">Selecciona tu Zona</label>
            <select
              id="sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value="">-- Selecciona una zona --</option>
              {sectoresUnicos.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dia">Día de la Semana (Opcional)</label>
            <select id="dia" value={dia} onChange={(e) => setDia(e.target.value)}>
              <option value="">-- Selecciona un día --</option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miércoles">Miércoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sábado">Sábado</option>
            </select>
          </div>

          <button type="submit" className="search-button">
            Buscar
          </button>
        </form>

        {busquedaRealizada && (
          resultados.length > 0 ? (
            <div className="resultados-container">
              <table>
                <thead>
                  <tr>
                    <th>Sector</th>
                    <th>Día</th>
                    <th>Hora Aproximada</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {resultados.map((ruta) => (
                    <tr key={ruta.id}>
                      <td>{ruta.sector}</td>
                      <td>{ruta.dia}</td>
                      <td>{ruta.hora}</td>
                      <td>
                        <span
                          className={`tipo-ruta ${
                            ruta.tipo.includes("Orgánicos")
                              ? "tipo-org"
                              : "tipo-inorg"
                          }`}
                        >
                          {ruta.tipo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="sin-resultados">
              <p>No se encontraron rutas, intenta de nuevo.</p>
            </div>
          )
        )}
      </div>
        {/*Mapa Gdl estatico para simulacion */}
      <div className="mapa-container" style={{ marginTop: "20px" }}>
        <iframe
          title="Mapa de Guadalajara"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.360557320263!2d-103.34960978513677!3d20.659698905862787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f09e8c72b3%3A0xdef0b23a1c2b7a5b!2sGuadalajara%2C%20Jalisco!5e0!3m2!1ses-419!2smx!4v1698800000000!5m2!1ses-419!2smx"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="back-button">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default ConsultaRutas;
