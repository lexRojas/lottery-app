import React from "react";
import ComboSectores from "../components/ComboSectores"
import PrimeTable from "../components/PrimeTable";
import FormBoleta from "../components/FormBoleta";


function BoletaAsignacion() {


	return (
    <div className="fondo-windows bordes col-md-10 container-fluid">
      <div className="row g-2">
        <div className="col-md-8 bordes-div g-2"> <p className="fs-1" >Boleta de Asignación</p> </div>
        <div className="col-md-4 bordes-div g-2"><ComboSectores />  </div>
      </div>
      <div className="row g-2">
        <div className="col-md-6 bordes-div g-2"> <PrimeTable/> </div>
        <div className="col-md-6 bordes-div g-2"><FormBoleta/></div>
      </div>
      <div className="row g-2">
        <div className="col-md-5 bordes-div g-2"><h1>7</h1></div>
        <div className="col-md-2 bordes-div g-2">
          <div className="row g-2">
            <div className="col-md-12 bordes-div g-2"><h1>8</h1></div>
          </div>
          <div className="row g-2">
            <div className="col-md-12 bordes-div g-2"><h1>9</h1></div>
          </div>
        </div>
        <div className="col-md-5 bordes-div g-2"><h1>10</h1></div>
      </div>
      <div className="row g-2">
        <div className="col-md-12 bordes-div g-2"><h1>11</h1></div>
      </div>
    </div>
  );
}

export default BoletaAsignacion;
