import React from "react";
import Context from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";
import {
  GET_PRESUPUESTOS,
  SET_ID_PROYECTO,
  SET_ID_USUARIO,
  SET_ID_SECTORES,
  SET_ELEMENTO,
} from "./types";
import { estadoInicial } from "./Context";

function UseEstado(props) {
  const baseURL = "https://psql-backend-a5691387ba13.herokuapp.com";
  estadoInicial.baseURL = "https://psql-backend-a5691387ba13.herokuapp.com";


  //seteo mi reducer
  const [state, dispatch] = useReducer(Reducer, estadoInicial);


  //defino funciones

  //obtengo los datos de los ultimos 10 proyectos
  const get_presupuesto = async (value = "") => {
    let array = [];
    await axios
      .get(`${baseURL}/tb_presupuesto`, { params: { filtro: value } })
      .then(function (response) {
        array = response.data;
        dispatch({
          type: GET_PRESUPUESTOS,
          payload: array,
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRESUPUESTOS,
          payload: [],
        });
        console.log("Error en Fetch Get Presupuesto");
        console.log(error);
      });
  };

  //funxion para fijar el id proyecto
  const set_Id_proyecto = (id, descripcion) => {
    dispatch({
      type: SET_ID_PROYECTO,
      payload: { id, descripcion },
    });
  };

  //funxion para fijar el id usuario
  const set_usuario = (id) => {
    dispatch({
      type: SET_ID_USUARIO,
      payload: id,
    });
  };

  //funxion para fijar el id sector
  const set_id_sectores = (id) => {
    dispatch({
      type: SET_ID_SECTORES,
      payload: id,
    });
  };

  //fijo el elemento del presupuesto 
  const set_elemento = (elemento) => {
    dispatch({
      type: SET_ELEMENTO,
      payload: elemento,
    });
  }


  //cargo mi Context
  return (
    <Context.Provider
      value={{
        tb_presupuesto: state.tb_presupuesto,
        id_proyecto: state.id_proyecto,
        desc_proyecto: state.desc_proyecto,
        usuario: state.usuario,
        baseURL: state.baseURL,
        id_sector: state.id_sector,
        elemento: state.elemento,
        get_presupuesto,
        set_Id_proyecto,
        set_usuario,
        set_id_sectores,
        set_elemento
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default UseEstado;
