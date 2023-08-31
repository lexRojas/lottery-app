import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useForm} from "react-hook-form";
import Context from "../context/Context";

function ProyectoSelector() {
  const {get_presupuesto, presupuesto} = useContext(Context);
  const { register } = useForm();
  const [plantilla, setPlantilla] = useState("<option key='none' value='none'>No hay elementos</option>")


  async function loadData(){
    await get_presupuesto();
  }

  useEffect(() => {
  
    console.log(presupuesto)

  }, [presupuesto])
  

  return (
    <Container>
      <Row>
        <Col className="md-2">
          <form>
            <label htmlFor="filtro_proyecto">
              Filtro de Busqueda de proyecto
            </label>
            <input type="text" name="filtro" {...register("filtro")} />

            <label htmlFor="selector"> Seleccione el proyecto</label>
            <select name="proyectos" id="proyectos" value="none" {
                ...register('proyectos')
            }>
              <option key='none' value='none'>No hay elementos</option>
            </select>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProyectoSelector;
