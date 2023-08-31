import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {useContext} from 'react'
import Context from '../context/Context'

import '../css/style.css'


function Login() {

  
  const {get_presupuesto, set_usuario } = useContext(Context);

  const navegate = useNavigate() 

  async function loadData() {
    await get_presupuesto();
  }


  function handleSubmit(e) {
    e.preventDefault();
    loadData();
    set_usuario('valido')
    navegate('/app')
  }

  return (
    <Container fluid="-2 solid fondo">
      <Row className="p-1 justify-content-center">
        <Col className="col-sm-3">
          <Card >
            <Card.Body>
              <Card.Title>Sistema de Control de Horas</Card.Title>
               <Card.Text>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  
                    <Row className="p-1 justify-content-center">
                      <Col>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                          Ingresar
                        </Button>
                      </Col>
                      <Col>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                          Cancelar
                        </Button>
                      </Col>
                    </Row>
                  
                </Form> 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
