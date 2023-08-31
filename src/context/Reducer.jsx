/* eslint-disable import/no-anonymous-default-export */
import { GET_PRESUPUESTOS,SET_ID_PROYECTO } from "./types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRESUPUESTOS:
      return {
        ...state,
        presupuestos: payload,
      };
    case SET_ID_PROYECTO:
      return {
        ...state,
        id_proyecto: payload,
      };
    default:
      return { state };
  }
};
