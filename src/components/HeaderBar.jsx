import React from "react";
import '../css/style.css'
import miller from '../assets/miller.png'
import { Container } from "react-bootstrap";


function HeaderBar() {
    return (
      <Container >
        <img  className="m-2" src={miller} alt="M" width={35} height={35} />
        <span> Miller Constructora 2023</span>
      </Container>
    );
  }


export default HeaderBar;