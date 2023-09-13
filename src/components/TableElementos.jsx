import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useEffect, useContext } from "react";
import Context from "../context/Context";
import axios from "axios";

import React from "react";

function TableElementos() {
  const [datos, setdatos] = useState(null);
  const { baseURL, id_sector, id_proyecto,set_elemento} = useContext(Context);
  const [selectedElemento, setSelectedElemento] = useState(null);

  const get_elementos = async (
    presupuesto = '',
    sector = ''
  ) => {
    await axios
      .get(`${baseURL}/tb_elementos`, { params: { presupuesto, sector } })
      .then(function (response) {
        setdatos(response.data);
      })
      .catch(function (error) {
        let result = [];
        setdatos(result);
        console.log("Error en Fetch Get elementos");
        console.log(error);
      });
  };

  const fijoElemento=(valor)=>{
    set_elemento(valor)
    setSelectedElemento(valor)
  }



  useEffect(() => {
     get_elementos(id_proyecto,id_sector)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_sector]);

  return (
    <div className="card col">
      <DataTable
        value={datos}
        size="small"
        stripedRows
        tableStyle={{ minWidth: "10rem", Width: "20rem" }}
        selectionMode="single"
        onSelectionChange={(e) => fijoElemento(e.value)}
        dataKey="cod_ele_sec"
        selection={selectedElemento}
        scrollable
        scrollHeight={380}
      >
        <Column field="cod_ele_sec" header="Code"></Column>
        <Column
          field="descripcion"
          filter
          filterPlaceholder="Buscar por descripcion"
          sortable
          header="Name"
        ></Column>
        <Column field="unidad_medida" header="Category"></Column>
        <Column field="cantidad_elemento" header="Quantity"></Column>
      </DataTable>
    </div>
  );
}

export default TableElementos;
