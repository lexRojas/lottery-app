import React from "react";
import ComboSectores from "../components/ComboSectores";
import TableElementos from "../components/TableElementos";
import FormBoleta from "../components/FormBoleta";
import TableEmpleados from "../components/TableEmpleados";

function BoletaAsignacion() {
  return (
    <div className="card flex flex-column md:card flex flex-row flex-row-wrap">
      <div className="flex flex-column gap-1 mb-2 md:flex-row ">
        <div className="flex column col-6 md:flex flex-row col">
          <p className="font-bold text-5xl text-primary">
            Boleta de Asignación
          </p>
        </div>
        <div className="flex column col-6 md:flex flex-row col">
          <ComboSectores />
        </div>
      </div>
      <div className="flex flex-column gap-1 mb-2 md:flex-row">
        <div className="flex flex-row col-6 md:flex flex-row col ">
          <TableElementos />
        </div>
        <div className="flex flex-row col-6 md:flex flex-row col ">
          <FormBoleta />
        </div>
      </div>
      <div className="flex flex-column gap-1 mb-2 md:flex-row">
        <TableEmpleados />
      </div>
    </div>
  );
}

export default BoletaAsignacion;
