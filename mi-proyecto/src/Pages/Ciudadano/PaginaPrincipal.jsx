import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/PaginaPrincipal.css";


import RutaIcon from "../../../../mi-proyecto/src/components/Imagenes/Iconos/ruta.png";
import IncidenciaIcon from "../../../../mi-proyecto/src/components/Imagenes/Iconos/incidente.png";
import RetoIcon from "../../../../mi-proyecto/src/components/Imagenes/Iconos/Reto.png";
import LibroIcon from "../../../../mi-proyecto/src/components/Imagenes/Iconos/Libro.png";

const PaginaPrincipal = () => {
  const [selected, setSelected] = useState(null);

  const tarjetas = [
    { id: 1, title: "Consulta de Rutas", path: "/consulta-rutas", icon: RutaIcon, desc: "Buscar horarios y rutas de recolección" },
    { id: 2, title: "Reporte de Incidencias", path: "/reportes", icon: IncidenciaIcon, desc: "Informar problemas o contratiempos puntuales" },
    { id: 3, title: "Educación Ambiental", path: "/educacion", icon: LibroIcon, desc: "Aprender sobre reciclaje y sustentabilidad" },
    { id: 4, title: "Campañas y Retos", path: "/campanas-retos", icon: RetoIcon, desc: "Participar en iniciativas ecológicas" },
  ];

  return (
    <div className="pagina-inicio">
      <section className="bienvenida">
        <h2>Bienvenido al Portal Ciudadano</h2>
        <p>Encuentra de forma rápida las rutas de recolección, reporta incidencias y participa en iniciativas ecológicas.</p>
      </section>

      <section className="tarjetas-container">
        {tarjetas.map((t) => (
          <Link
            key={t.id}
            to={t.path}
            className={`tarjeta ${selected === t.id ? "selected" : ""}`}
            onClick={() => setSelected(t.id)}
          >
            <img src={t.icon} className="icono-tarjeta" alt={t.title} />
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default PaginaPrincipal;
