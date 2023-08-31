import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import Context from "../context/Context";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function ProyectoSelector() {
  const { get_presupuesto, tb_presupuesto } = useContext(Context);
  const { register } = useForm();

  useEffect(() => {
    get_presupuesto();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Container className="vertical-center" fluid="md">
      <Row className="justify-content-center">
        <Col xs={5} className="bordes">
          <Form >
            <Form.Group className="m-3" controlId="frmFiltro">
              <Row>
                <Col xs={9}>
                  <Form.Label>Filtro de Busqueda de proyecto </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite un nombre..."
                    {...register("filtro")}
                  />
                </Col >
                <Col xs={3} className="d-flex flex-row-reverse align-items-end" >
                  <Button> Filtrar </Button>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Seleccione el proyecto</Form.Label>
              <Form.Select>
                {tb_presupuesto.length > 0 ? (
                  tb_presupuesto.map(({ presupuesto, proyecto }, i) => (
                    <option key={i} value={presupuesto}>
                      {proyecto}
                    </option>
                  ))
                ) : (
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
