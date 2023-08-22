import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import '../css/style.css'

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <Container fluid="fondo" background-color="blue">
      <Row className="p-1 justify-content-center">
        <Col className="col-lg-3">
          <Card >
            <Card.Body>
              <Card.Title>Miller Constructora</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Sistema de Control de Horas
              </Card.Subtitle>
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
                  <Container fluid>
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
                  </Container>
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
