import React from "react";
import Context from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";
import { GET_PRESUPUESTOS,SET_ID_PROYECTO,SET_ID_USUARIO } from "./types";


function UseEstado(props) {
  const baseURL = "https://psql-backend-a5691387ba13.herokuapp.com";

  // Defino el estado inicial
  const estadoInicial = {
    tb_presupuesto: [],
    id_proyecto: "",
    usuario : ""
  };

    //seteo mi reducer
  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  //defino funciones 

  //obtengo los datos de los ultimos 10 proyectos 
  const get_presupuesto = async (value='') => {
    let array=[]
    await axios
      .get(`${baseURL}/tb_presupuesto` ) //{params:{filtro:value}}
      .then(function (response) {
        array=response.data
        dispatch({
          type: GET_PRESUPUESTOS,
          payload: array
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRESUPUESTOS,
          payload: []
        });
        console.log("Error en Fetch Get Presupuesto");
        console.log(error);
      });
  };

  
  //funxion para fijar el id proyecto
  const set_Id_proyecto = (id) =>{
    dispatch({
      type: SET_ID_PROYECTO,
      payload: id
    });
  }

  //funxion para fijar el id proyecto
  const set_usuario = (id) =>{
    dispatch({
      type: SET_ID_USUARIO,
      payload: id
    });
  }

  //cargo mi Context   
  return (
    <Context.Provider
      value={{
        tb_presupuesto: state.tb_presupuesto,
        id_proyecto: state.id_proyecto,
        usuario:state.usuario,
        get_presupuesto,
        set_Id_proyecto,
        set_usuario
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default UseEstado;
