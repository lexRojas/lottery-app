import React, { useContext } from "react";
import "../css/style.css";

import miller from "../assets/miller.png";

import Context from "../context/Context";

function HeaderBar() {
  const { desc_proyecto,id_proyecto } = useContext(Context);

  return (
      <div className="row">
        <div className="col ">
          <img className="m-2 d-inline justify-content-center"  src={miller} alt="M" width={35} height={35} />
          <span className="d-inline justify-content-center"> Miller Constructora 2023</span>
          <span className="m-2 lead d-inline justify-content-end"> {desc_proyecto} 
          </span><span className="m-2 lead fs-4 fw-semibold d-inline justify-content-end"> ({id_proyecto}) </span>

        </div>
      </div>
  );
}

export default HeaderBar;
