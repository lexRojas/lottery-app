import React from "react";


function TableActividades() {
  const datos = [
    {
      presupuesto: "2022312",
      cod_ele_sec: "10001A  ",
      descripcion: "ACTIVIDADES GENERALES                             ",
      comentario: "ACTIVIAD GNERAL",
      unidad_medida: "M2                            ",
      cantidad_elemento: 120,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "109018A ",
      descripcion: "ESTRUCTURAS DE METAL                              ",
      comentario: "METAL",
      unidad_medida: "KGS                           ",
      cantidad_elemento: 6900,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "115021A ",
      descripcion: "PINTURA ( SOLO MATERIALES )                       ",
      comentario: "PINTRUA",
      unidad_medida: "M2                            ",
      cantidad_elemento: 1050,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "12001A  ",
      descripcion: "DEMOLICIONES                                      ",
      comentario: "DEMOLICIONES VARIAS",
      unidad_medida: "M3                            ",
      cantidad_elemento: 12,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "23001A  ",
      descripcion: "CIMIENTOS INDIVIDUALES SECUNDARIOS                ",
      comentario: "PLACAS AISLADAS",
      unidad_medida: "M3                            ",
      cantidad_elemento: 7,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "27001A  ",
      descripcion: "VIGAS DE AMARRE SECUNDARIO                        ",
      comentario: "VIGAS DE AMARRE",
      unidad_medida: "M3                            ",
      cantidad_elemento: 3.6,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "29001A  ",
      descripcion: "PEDESTALES                                        ",
      comentario: "PEDESTALES",
      unidad_medida: "M3                            ",
      cantidad_elemento: 1.3,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "43001A  ",
      descripcion: "ENTREPISOS                                        ",
      comentario: "ENTREPISO TIPO METALDECK",
      unidad_medida: "M2                            ",
      cantidad_elemento: 12,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "51001A  ",
      descripcion: "PAREDES DE LAMINA                                 ",
      comentario: "DIVISIONES DE MIURO SECO",
      unidad_medida: "M2                            ",
      cantidad_elemento: 45,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "51008A  ",
      descripcion: "PAREDES DE LAMINA                                 ",
      comentario: "CORTA FUEGO",
      unidad_medida: "M2                            ",
      cantidad_elemento: 362,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "53008A  ",
      descripcion: "CUBIERTA DE TECHO                                 ",
      comentario: "CUBIERTA DE TECHO",
      unidad_medida: "M2                            ",
      cantidad_elemento: 47,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "59008A  ",
      descripcion: "CONTRAPISOS (CON CORTE DE TERRENO VEGETAL)        ",
      comentario: "CONTRAPISOS",
      unidad_medida: "M2                            ",
      cantidad_elemento: 53,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "59011A  ",
      descripcion: "CONTRAPISOS (CON CORTE DE TERRENO VEGETAL)        ",
      comentario: "NIVELACION",
      unidad_medida: "M2                            ",
      cantidad_elemento: 53,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "62011A  ",
      descripcion: "ACERAS                                            ",
      comentario: "ACERAS",
      unidad_medida: "M2                            ",
      cantidad_elemento: 6,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "65011A  ",
      descripcion: "CORDON Y CAÑO                                     ",
      comentario: "CORDON Y CAÑO",
      unidad_medida: "ML                            ",
      cantidad_elemento: 5,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "77011A  ",
      descripcion: "CIELOS                                            ",
      comentario: "CIELO REPARADO AL 10% REINSTALADO",
      unidad_medida: "M2                            ",
      cantidad_elemento: 715,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "77015A  ",
      descripcion: "CIELOS                                            ",
      comentario: "CIELO GYPSUM",
      unidad_medida: "M2                            ",
      cantidad_elemento: 5,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "77016A  ",
      descripcion: "CIELOS                                            ",
      comentario: "CIELO CORTA FUEGIO",
      unidad_medida: "M2                            ",
      cantidad_elemento: 56,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "78016A  ",
      descripcion: "PISOS                                             ",
      comentario: "PISOS DE PORCELANATO Y BALDOSA ",
      unidad_medida: "M2                            ",
      cantidad_elemento: 31,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "78018A  ",
      descripcion: "PISOS                                             ",
      comentario: "ZACATE",
      unidad_medida: "M2                            ",
      cantidad_elemento: 100,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "86018A  ",
      descripcion: "MOLDURAS                                          ",
      comentario: "RODAPIE DE MADERA",
      unidad_medida: "ML                            ",
      cantidad_elemento: 85,
    },
    {
      presupuesto: "2022312",
      cod_ele_sec: "90022A  ",
      descripcion: "CERRAJERIA Y ACCESORIOS DE PUERTAS                ",
      comentario: "CERRAJERIA",
      unidad_medida: "GLB                           ",
      cantidad_elemento: 1,
    },
  ];

  return (
    <div className="">
      <table className ="table-md table-md-scroll caption-top ">
        <caption>Lista de Actividades </caption>
        <thead className="">
          <th> Código </th>
          <th> Descripción </th>
          <th> Unidad Medida </th>
          <th> Cantidad </th>
        </thead>
        <tbody className="">
          {datos.length > 0 ? (
            datos.map(
              (
                {
                  cod_ele_sec,
                  descripcion,
                  unidad_medida,
                  cantidad_elemento,
                  comentario,
                },
                i
              ) => (
                <tr>
                  <td> {cod_ele_sec} </td>
                  <td> {descripcion} </td>
                  <td>{unidad_medida}</td>
                  <td> {cantidad_elemento}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td> </td>
              <td> </td>
              <td></td>
              <td> </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableActividades;
