import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

import "../css/style.css";

function Login() {
  const { get_presupuesto, set_usuario } = useContext(Context);

  const navegate = useNavigate();

  async function loadData() {
    await get_presupuesto();
  }

  function handleSubmit(e) {
    e.preventDefault();
    loadData();
    set_usuario("valido");
    navegate("/app");
  }

  return (
    <div className="container col-lg-5 fondo-windows rounded">
      <div className="row">
        <div className="col ">
          <div className="row">
            <p>Sistema de Control de Horas</p>
          </div>
          <div className="row">
            <form className="form">
              <div className="exampleForm.ControlInput1">
                <label className="form-label"> Correo Electrónico</label>
                <input className="form-control" type="email" placeholder="name@example.com" />
              </div>
              <div className="exampleForm.ControlTextarea1">
                <label className="form-label">Clave de Acceso</label>
                <input className="form-control" type="password" />
              </div>
              <div className="row p-2 ">
                <div className="col d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Ingresar
                  </button>
                </div>
                <div className="col d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
