import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Context from "../context/Context";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalDialog from "./ModalDialog";
import { useModal } from "../hooks/useModal";


function ProyectoSelector() {
  const { get_presupuesto, tb_presupuesto, set_Id_proyecto } = useContext(Context);
  const { register, handleSubmit, watch } = useForm();
  const navegate = useNavigate()
  const [isOpen,openModal,closeModal] = useModal(false)

  const onSubmit = handleSubmit((data) => {
      const {id_proyecto} = data    
      if (id_proyecto==="No"){
        console.log("llamado a openModal")
        openModal();
      }else{
        const {proyecto} =  tb_presupuesto.find((filas) => filas.presupuesto === id_proyecto);
        set_Id_proyecto(id_proyecto,proyecto) 
        navegate("/app")
      }
  });

  const filtrar_datos = () => {
    let filtro = watch("filtro");
    get_presupuesto(filtro);
  };

  useEffect(() => {
    get_presupuesto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fondo-windows bordes col-md-8 container-fluid">
      <Form onSubmit={onSubmit}>
        <Form.Group className="m-3" controlId="frmFiltro">
          <div className="row">
            <div className="col-md-10">
              <Form.Label>Filtro de Busqueda de proyecto </Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite un nombre..."
                {...register("filtro")}
              />
            </div>
            <div className="col-md-2  all-center">
              <Button type="buttom" onClick={filtrar_datos}>
                {" "}
                Filtrar{" "}
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Form.Label>Seleccione el proyecto</Form.Label>
              
              <Form.Select id="select_proyecto" 
                {...register("id_proyecto")}
              >
                <option key="-1" value="No">
                  Seleccione un proyecto
                </option>
                {tb_presupuesto.length > 0 ? (
                  tb_presupuesto.map(({ presupuesto, proyecto }, i) => (
                    <option key={i} value={presupuesto}>
                      {proyecto}
                    </option>
                  ))
                ) : (
                  <option key="-99" value="No">
                    No hay proyectos con ese nombre...
                  </option>
                )}
              </Form.Select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 all-center pt-3 ">
              <button className=" btn btn-primary " type="submit">
                SELECCIONAR PROYECTO
              </button>
            </div>
            <ModalDialog isOpen={isOpen} closeModal={closeModal}  titulo="Sistema Horas Miller" mensaje="Debes seleccionar algo" />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ProyectoSelector;
