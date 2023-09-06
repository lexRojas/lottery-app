//Creo mi clase contexto 
import { createContext } from "react";

export    const estadoInicial = {
  tb_presupuesto: [],
  id_proyecto: "",
  desc_proyecto: "",
  usuario : ""
};

const MiContext = createContext( estadoInicial)

export default MiContext