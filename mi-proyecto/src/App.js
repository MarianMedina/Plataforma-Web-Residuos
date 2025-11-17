import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Encabezado from "./components/Common/Encabezado";
import Menu from "./components/Common/Menu";
import PieDePagina from "./components/Common/PieDePagina";

import PaginaPrincipal from "./Pages/Ciudadano/PaginaPrincipal";
import ConsultaRutas from "./Pages/Ciudadano/ConsultaRutas";
import ReporteIncidencias from "./Pages/Ciudadano/ReporteIncidencias";

function App() {
  return (
    <Router>
      <div className="App">
      <Encabezado />
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<PaginaPrincipal />} />
        <Route path="/consulta-rutas" element={<ConsultaRutas />} />
        <Route path="/reportes" element={<ReporteIncidencias />} />
          {/* Redirección en caso de ruta no encontrada */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
         <PieDePagina />
      </div>
    </Router>
  );
}

export default App;
