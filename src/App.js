import { BrowserRouter, Route, Routes } from "react-router-dom";

/*Componentes */

import HeaderBar from "./components/HeaderBar";
import Login from "./pages/Login";
import Proyectos from "./pages/Proyectos";
import MySideNav from "./components/SideNav";

function App() {
  return (
    <div className="Container barra">
      <BrowserRouter>
        <div className="row ">
          <HeaderBar />
        </div>
        <div className="d-flex row fondo">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/app" element={<MySideNav />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
