import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import axios from "axios";
import { useState } from "react";

export default function ComboSectores() {
  const { baseURL, id_proyecto } = useContext(Context);
  const [Sectores, setSectores] = useState([]);

  const get_sectores = async (presupuesto = "") => {
    await axios
      .get(`${baseURL}/tb_sectores`, { params: { presupuesto } })
      .then(function (response) {
        setSectores(response.data);
      })
      .catch(function (error) {
        let result = [
          {
            presupuesto: "999999",
            codigo_sector: "#",
            descripcion: "No hay sectores",
          },
        ];
        setSectores(result);
        console.log("Error en Fetch Get Presupuesto");
        console.log(error);
      });
  };
  useEffect(() => {
    get_sectores(id_proyecto);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <label className="form-label" htmlFor="cmb_selectores"> Seleccione un Sector:</label>
      <select
        name=""
        id="cmb_sectores"
        className="form-select"
        aria-label="Default select example"
      >
        <option value="#"> Seleccione un sector</option>
        {Sectores.length > 0 ? (
          Sectores.map(({ codigo_sector, descripcion }, i) => (
            <option key={i} value={codigo_sector}>{descripcion}</option>
          ))
        ) : (
          <option value="#"> No existen datos, error!! </option>
        )}
      </select>
    </div>
  );
}
