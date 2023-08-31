import React from "react";
import Context from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";

function UseEstado(props) {
  const baseURL = "https://psql-backend-a5691387ba13.herokuapp.com";

  // Defino el estado inicial
  const estadoInicial = {
    presupuesto: [],
    id_proyecto: "",
  };

  //seteo mi reducer
  const [state, dispatch] = useReducer(Reducer, estadoInicial);


  //defino funciones 

  //obtengo los datos de los ultimos 10 proyectos 
  const get_presupuesto = async (value='') => {
    await axios
      .get(`${baseURL}/tb_presupuesto`,{params:{filtro:value}} )
      .then(function (response) {
        dispatch({
          type: "GET_PRESUPUESTO",
          payload: response.data
        });
      })
      .catch(function (error) {
        dispatch({
          type: "GET_PRESUPUESTO",
          payload: []
        });
        console.log("Error en Fetch Get Presupuesto");
        console.log(error);
      });
  };

  
  //funxion para fijar el id proyecto
  const set_Id_proyecto = (id) =>{
    dispatch({
      type: "SET_ID_PROYECTO",
      payload: id
    });
  }


  //cargo mi Context   
  return (
    <Context.Provider
      value={{
        presupuesto: state.presupuesto,
        id_proyecto: state.id_proyecto,
        get_presupuesto,
        set_Id_proyecto
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default UseEstado;
