import React, { useRef, useContext } from "react";
import { Button } from "primereact/button";
import { TieredMenu } from "primereact/tieredmenu";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

import miller from "../assets/miller.png";

export default function MainMenu() {
  const menu = useRef(null);
  const navegate = useNavigate();
  const { desc_proyecto, id_proyecto } = useContext(Context);

  const items = [
    {
      label: "Proyectos",
      icon: "pi pi-fw pi-pencil",
      command: () => {
        navegate("/proyectos");
      },
    },
    {
      label: "Procesos",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Crear Boleta Asignación",
          icon: "pi pi-fw pi-align-left",
          command: () => {
            navegate("/BoletaAsignacion");
          },
        },
      ],
    },
    {
      label: "Reportes",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Reporte 1",
          icon: "pi pi-fw pi-user-plus",
          command: () => {
            navegate("/");
          },
        },
        {
          label: "Reporte 2",
          icon: "pi pi-fw pi-user-minus",
          command: () => {
            navegate("/");
          },
        },
      ],
    },
    {
      label: "Catálogos",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Cat  1",
          icon: "pi pi-fw pi-user-plus",
          command: () => {
            navegate("/");
          },
        },
        {
          label: "Cat  2",
          icon: "pi pi-fw pi-user-minus",
          command: () => {
            navegate("/");
          },
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: "Seguridad",
      icon: "pi pi-fw pi-user",
      command: () => {
        navegate("/");
      },
    },

    {
      separator: true,
    },

    {
      label: "Salir",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        navegate("/");
      },
    },
  ];

  return (
    <div className="d-flex menu-barra">
      <div className="col-fixed menu-botton">
        <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
        <Button
          label="Menú"
          icon="pi pi-bars"
          onClick={(e) => menu.current.toggle(e)}
        />
      </div>
      <div className="col">
        <img className="" src={miller} alt="M" width={35} height={35} />
        <span className="menu-titulo"> Miller Constructora 2023</span>
        {/* <span className="menu-subtitulo"> {desc_proyecto} </span>
          <span className="menu-subtitulo"> ({id_proyecto}) </span> */}
      </div>
    </div>
  );
}
