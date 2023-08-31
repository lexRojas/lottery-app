import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useForm} from "react-hook-form";
import Context from "../context/Context";
import Form from 'react-bootstrap/Form';

function ProyectoSelector() {
  const {get_presupuesto, tb_presupuesto} = useContext(Context);
  const { register } = useForm();

  async function loadData(){
    await get_presupuesto();
  }

  useEffect(() => {
  
    console.log(tb_presupuesto)

  }, [tb_presupuesto])
  

  return (
    <Container fluid="md">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Form>
            <Form.Group className="mb-3" controlId="frmFiltro">
              <Form.Label>Filtro de Busqueda de proyecto </Form.Label>
              <Form.Control type="text" placeholder="Digite un nombre..." 
              {...register("filtro")} />

            </Form.Group>
            <Form.Group> 
                <Form.Label>Seleccione el proyecto</Form.Label>
                <Form.Select> 
                  {(tb_presupuesto.length>0)?(
                  tb_presupuesto.map(({presupuesto,proyecto},i) => (
                      <option key= {i} value={presupuesto }>{proyecto}</option>
                  ))
                  ):(
                      <option value="No"> Cargando proyectos...</option>
                  )}
                </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProyectoSelector;
