//Creo mi clase contexto 
import { createContext } from "react";

export    const estadoInicial = {
  tb_presupuesto: [],
  id_proyecto: "",
  desc_proyecto: "",
  usuario : "",
  baseURL: "",
  id_sector:""
};

const Context = createContext( estadoInicial)

export default Context