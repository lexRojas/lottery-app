import React from "react";
import SideNav, {
  //Toggle,
  //Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Context from "../context/Context";
import { Container } from "react-bootstrap";

function MySideNav() {
  const navegate = useNavigate();
  const { set_usuario } = useContext(Context);

  return (
    <Container className="barraLateral">
      <SideNav 
        onSelect={(selected) => {
          switch (selected) {
            case "exit":
              set_usuario("");
              navegate("/");

              break;
            case "presupuestos":
              navegate("/proyectos");
              break;

            default:
              break;
          }
        }}
        id="sdb"
      >
        <SideNav.Toggle />
        <SideNav.Nav className="barraLateral" defaultSelected="proyectos">
          <NavItem id="proyectos" eventKey="presupuestos">
            <NavIcon>
              {" "}
              <i className="fa fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Proyectos</NavText>
          </NavItem>

          <NavItem id="procesos" eventKey="procesos">
            <NavIcon>
              {" "}
              <i className="fa fa-cogs" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Procesos</NavText>
          </NavItem>
          <NavItem id="reportes" eventKey="reportes">
            <NavIcon>
              {" "}
              <i
                className="fa fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />{" "}
            </NavIcon>
            <NavText>Reportes</NavText>
          </NavItem>
          <NavItem id="catalogos" eventKey="catalogos">
            <NavIcon>
              {" "}
              <i
                className="fa fa-database"
                style={{ fontSize: "1.75em" }}
              />{" "}
            </NavIcon>
            <NavText> Catálogos </NavText>
            <NavItem eventKey="catalogos_1">
              <NavText> Catalogo 1 </NavText>
            </NavItem>
            <NavItem eventKey="catalogos_2">
              <NavText> Catalogo 2 </NavText>
            </NavItem>
            <NavItem eventKey="catalogos_3">
              <NavText> Catalogo 3 </NavText>
            </NavItem>
          </NavItem>
          <NavItem id="seguridad" eventKey="seguridad">
            <NavIcon>
              {" "}
              <i className="fa fa-key" style={{ fontSize: "1.75em" }} />{" "}
            </NavIcon>
            <NavText>Seguridad</NavText>
          </NavItem>
          <NavItem id="exit" eventKey="exit">
            <NavIcon>
              {" "}
              <i
                className="fa fa-power-off"
                style={{ fontSize: "1.75em" }}
              />{" "}
            </NavIcon>
            <NavText>Salir</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </Container>
  );
}

export default MySideNav;
