import React from "react";
// Material
import Button from "@material-ui/core/Button";
// Style
import "./index.css";
// Image
import imageFooter from '../../assets/pleca.svg'

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
        <img src={imageFooter} alt=""/>
      </div>
    </>
  );
}
