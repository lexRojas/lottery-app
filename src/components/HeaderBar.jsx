import React from "react";
import '../css/style.css'
import miller from '../assets/miller.png'


function HeaderBar() {
    return (
      <div className="barra">
        <img src={miller} alt="M" width={30} height={30} />
        <span> Miller Constructora 2023</span>
      </div>
    );
  }


export default HeaderBar;