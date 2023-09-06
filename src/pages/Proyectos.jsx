import React from "react";
import ProyectoSelector from "../components/ProyectoSelector";
import MySideNav from "../components/SideNav.jsx";

function Proyectos() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1">
          <MySideNav />
        </div>
        <div className="col-md-11">
          <ProyectoSelector />
        </div>
      </div>
    </div>
  );
}
export default Proyectos;
