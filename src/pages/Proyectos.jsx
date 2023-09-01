import React from "react";
import ProyectoSelector from "../components/ProyectoSelector";
import MySideNav from "../components/SideNav.jsx";

function Proyectos() {
  return (
    <>
      <div className="barraLateral">
        <MySideNav />
      </div>
      <div className="contenedor">
      <ProyectoSelector />
       </div>
    </>
  );
}
export default Proyectos;
