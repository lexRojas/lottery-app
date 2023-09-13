/* eslint-disable import/no-anonymous-default-export */
import {
  GET_PRESUPUESTOS,
  SET_BASEURL,
  SET_ID_PROYECTO,
  SET_ID_SECTORES,
  SET_ID_USUARIO,
  SET_ELEMENTO,
} from "./types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRESUPUESTOS:
      return {
        ...state,
        tb_presupuesto: payload,
      };
    case SET_ID_PROYECTO:
      return {
        ...state,
        id_proyecto: payload.id,
        desc_proyecto: payload.descripcion,
      };
    case SET_ID_USUARIO:
      return {
        ...state,
        usuario: payload,
      };
    case SET_BASEURL:
      return {
        ...state,
        baseURL: payload,
      };
    case SET_ID_SECTORES:
      return {
        ...state,
        id_sector: payload,
      };
      case SET_ELEMENTO:
        return {
          ...state,
          elemento: payload,
        };
      default:
      return { state };
  }
};
