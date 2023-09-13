import React from "react";
import ComboSectores from "../components/ComboSectores"
import PrimeTable from "../components/PrimeTable";
import FormBoleta from "../components/FormBoleta";


function BoletaAsignacion() {


	return (
    <div className="card col md:col-10">
      <div className="flex flex-row flex-wrap ">
        <div className="col"> <p className="font-bold  text-5xl text-primary" >Boleta de Asignación</p> </div>
        <div className="col"><ComboSectores />  </div>
      </div>

      <div className="flex flex-column  md:flex-row flex-wrap ">
        <div className="col"> <PrimeTable/> </div>
        <div className="col"  ><FormBoleta/></div>
      </div>

      <div className="flex flex-row flex-wrap ">
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
