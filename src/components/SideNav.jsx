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
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} /> 
                        </NavIcon>
                        <NavText>
                         Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </React.Fragment>
    )}



export default MySideNav;
