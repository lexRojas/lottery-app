import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";

function ProyectoSelector() {
  const { get_presupuesto, tb_presupuesto, set_Id_proyecto } =
    useContext(Context);

    const [filtro, setfiltro] = useState("")

  // const { register, handleSubmit, watch } = useForm();
  const navegate = useNavigate();
  //const [isOpen,openModal,closeModal] = useModal(false)

  const [selectedProyect, setSelectedProyect] = useState(null);

  const handleClickSelectProyect = () => {
    const { presupuesto,proyecto } = selectedProyect;

    if (selectedProyect === null) {
      set_Id_proyecto("", "");
      console.log("llamado a openModal");
      //    openModal();
    } else {
   
      set_Id_proyecto(proyecto, presupuesto);
      navegate("/App");
    }
  };

  const handleClickFilter = () => {
    get_presupuesto(filtro.toUpperCase())

  }


  useEffect(() => {
    get_presupuesto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (tb_presupuesto.length == 0){
      setSelectedProyect(null)
    }
  }, [tb_presupuesto]);



  return (
    <div className="col-12 md:col-5 card">
      <div className="flex flex-row flex-wrap align-items-center">
        <div className="flex flex-column gap-2 col md:col-9">
          <label htmlFor="txtFiltro"> Filtrar los proyectos por:</label>
          <InputText
            id="txtFiltro"
            label="Filtro de Busquedad"
            aria-describedby="aria-filtro"
            onChange={(e)=> setfiltro(e.target.value)}
          />
          <small id="aria-filtro">
            {" "}
            Digite palabras que describan el proyecto{" "}
          </small>
        </div>
        <div className="flex flex-column gap-2 col md:col-3">
          <Button 
            label="Filtrar"
            onClick={handleClickFilter} />
        </div>
      </div>
      <div className="flex flex-column gap-2 pt-2">
        <label htmlFor="cmdFiltro"> Seleccione el filtro </label>
        <Dropdown
          id="cmdFiltro"
          value={selectedProyect}
          onChange={(e) => setSelectedProyect(e.value)}
          options={tb_presupuesto}
          optionLabel="proyecto"
          placeholder="Selecciones un presupuesto"
          className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
        />
      </div>
      <Divider />
      <div className="flex flex-row justify-content-center">
        <Button
          label="Seleccionar proyecto"
          onClick={handleClickSelectProyect}
        />
      </div>
    </div>
  );
}

export default ProyectoSelector;
