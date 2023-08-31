//Creo mi clase contexto 
import { createContext } from "react";

const estadoInicial = {
    tb_presupuesto: [],
    id_proyecto: ""
  };

const MiContext = createContext( estadoInicial)

export default MiContext