import React from "react";
import { Link } from "react-router-dom";
// Style
import "./index.css";

import Button from "@material-ui/core/Button";

export default function Hero() {
  return (
    <>
      <div className="imageContainer">
        <div className="containerAction">
          <a href="https://registro.prismax.com.mx/">
            <Button variant="contained" className="buttonRegister">Registro</Button>
          </a>
          <Button variant="contained" className="buttonAccess">Acceso</Button>
        </div>
      </div>
    </>
  );
}
