import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";
import Login from "./pages/Login";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="fondo">
        <Row className="barra">
          <HeaderBar />
        </Row>
        <Row>
        <Container fluid className="fondo">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/proyectos" element={<Proyectos/>} />



                <Route path="*" element={<Login />} />
              </Routes>
          </Container>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
