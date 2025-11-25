import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

/* Comun */
import Encabezado from "./components/Common/Encabezado";
import Menu from "./components/Common/Menu"; /*  Menu paginas ciudadano*/
import PieDePagina from "./components/Common/PieDePagina";

/* Menu por rol */
import MenuAdministrador from "./components/Common/MenuAdministrador";
import MenuEmpleado from "./components/Common/MenuEmpleado";

/* Ciudadano */
import PaginaPrincipal from "./Pages/Ciudadano/PaginaPrincipal";
import ConsultaRutas from "./Pages/Ciudadano/ConsultaRutas";
import ReporteIncidencias from "./Pages/Ciudadano/ReporteIncidencias";

/* Autenticacion */
import InicioSesion from "./Pages/Auntenticacion/InicioSesion";
import Registro from "./Pages/Auntenticacion/Registro";

/* Administrador */
import PanelAdministrador from "./Pages/Administrador/PanelAdministrador";
import GestionRutas from "./Pages/Administrador/GestionRutas";
import Campañas from "./Pages/Administrador/Campañas";
import Retos from "./Pages/Administrador/Retos";

/* Empleado */
import PanelEmpleado from "./Pages/Empleado/PanelEmpleado";
import Alertas from "./Pages/Empleado/Alertas";
import RutasEmpleado from "./Pages/Empleado/Rutas";

/* Wrapper para elegir menú según rol/ruta */
function MenuWrapper() {
  const location = useLocation();

  if (location.pathname.startsWith("/administrador")) {
    return <MenuAdministrador />;
  } else if (location.pathname.startsWith("/empleado")) {
    return <MenuEmpleado />;
  }
  return <Menu />;
}

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Encabezado />
        <MenuWrapper />

        <div style={{ flex: 1 }}>
          <Routes>
            {/* Redirección inicial */}
            <Route path="/" element={<Navigate to="/inicio" replace />} />

            {/* Ciudadano */}
            <Route path="/inicio" element={<PaginaPrincipal />} />
            <Route path="/consulta-rutas" element={<ConsultaRutas />} />
            <Route path="/reportes" element={<ReporteIncidencias />} />

            {/* Autenticacion */}
            <Route path="/inicio-sesion" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />

            {/* Administrador */}
            <Route path="/administrador" element={<PanelAdministrador />} />
            <Route path="/administrador/rutas" element={<GestionRutas />} />
            <Route path="/administrador/campañas" element={<Campañas />} />
            <Route path="/administrador/retos" element={<Retos />} />

            {/* Empleado */}
            <Route path="/empleado" element={<PanelEmpleado />} />
            <Route path="/empleado/alertas" element={<Alertas />} />
            <Route path="/empleado/rutas" element={<RutasEmpleado />} />

            {/* Ruta no encontrada */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <PieDePagina />
      </div>
    </Router>
  );
}

export default App;
