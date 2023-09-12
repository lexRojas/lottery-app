import React from "react";
import { InputText } from "primereact/inputtext";

function FormBoleta() {
  return (
    <div className="card">
      <div className="flex flex-column gap-2">
        <label htmlFor="username">Username</label>
        <InputText id="username" aria-describedby="username-help" />
        <small id="username-help">
          Enter your username to reset your password.
        </small>
      </div>
    </div>
  );
}

export default FormBoleta;
