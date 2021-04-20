import React from "react";
import { Link } from "react-router-dom";
// Style
import "./index.css";

import Button from "@material-ui/core/Button";
// import hero from '../../assets/hero.jpeg';

export default function Hero() {
  return (
    <>
      <div className="imageContainer">
        {/* <img src={hero} alt=""/> */}
        <div className="containerAction">
          <Link to="/form">
            <Button variant="contained" className="buttonRegister">Registro</Button>
          </Link>
          <Button variant="contained" className="buttonAccess">Acceso</Button>
        </div>
      </div>
    </>
  );
}
