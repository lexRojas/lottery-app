import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";
import Login from "./pages/Login";
import MillerApp from "./pages/MillerApp";
import MySideNav from "./components/SideNav";
import { useContext } from "react";
import Context from "./context/Context";

function App() {
  const { usuario } = useContext(Context);

  return (
    <BrowserRouter>
      <Container className="App" fluid="xs">
        <Row>
          <Col xs={0}>{usuario === "" ? <></> : <MySideNav />}</Col>
          <Col xs={12}>
            <Row>
              <HeaderBar />
            </Row>
            <Row>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/app" element={<MillerApp />} />
                <Route path="*" element={<Login />} />
              </Routes>
            </Row>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
