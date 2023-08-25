import React from "react";
import '../css/style.css'

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function MySideNav() {

  return (
 
        <React.Fragment >
            <SideNav 
                onSelect={(selected) => {
                    
                }}
                id= 'sdb'
            >
                <SideNav.Toggle />
                <SideNav.Nav className = 'barraLateral' defaultSelected="home">
                    <NavItem id="nav-item" eventKey="catalogos">
                        <NavIcon> <i className="fa fa-database" style={{ fontSize: '1.75em' }} /> </NavIcon>
                        <NavText>  Catálogos </NavText>
                            <NavItem eventKey="catalogos_1">
                                <NavText> Catalogo 1  </NavText>
                            </NavItem>
                            <NavItem eventKey="catalogos_2">
                                <NavText> Catalogo 2  </NavText>
                            </NavItem>
                            <NavItem eventKey="catalogos_3">
                                <NavText> Catalogo 3  </NavText>
                            </NavItem>
                    </NavItem>
                    <NavItem id="nav-item" eventKey="procesos">
                        <NavIcon> <i className="fa fa-cogs" style={{ fontSize: '1.75em' }} /></NavIcon>
                        <NavText>
                            Procesos
                        </NavText>
                    </NavItem>
                    <NavItem id="nav-item" eventKey="reportes">
                        <NavIcon> <i className="fa fa-newspaper-o" style={{ fontSize: '1.75em' }} /> </NavIcon>
                        <NavText>
                            Reportes
                        </NavText>
                    </NavItem>
                    <NavItem id="nav-item" eventKey="seguridad">
                        <NavIcon> <i className="fa fa-key" style={{ fontSize: '1.75em' }} />  </NavIcon>
                        <NavText> 
                            Seguridad
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </React.Fragment>
    )}



export default MySideNav;
