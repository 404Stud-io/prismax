import React from "react";
// Style
import "./index.css";
// Image
import robot from "../../assets/robot.png";
// scroll
import { Link } from "react-scroll";
import imageResponsive from '../../assets/prismaxResponsive.png'

export default function Menu() {
  return (
    <>
      <main>
        <div className="header">
          <h1>PrisMax</h1>
          <div className="containerMenu">
            <Link className="containerItemMenu prismax" to="prismax" smooth={true} duration={1000} >
              <p>PrisMax</p>
            </Link>
            <Link className="containerItemMenu download" to="download" smooth={true} duration={1000} >
              <p>Descargables</p>
            </Link>
            <Link className="containerItemMenu schedule" to="schedule" smooth={true} duration={1000} >
              <p>Agenda</p>
            </Link>
            <Link className="containerItemMenu transmission" to="transmission" smooth={true} duration={1000} >
              <p>Sala de transmisión</p>
            </Link>
            <Link className="containerItemMenu contact" to='contact'  smooth={true} duration={1000}>
              <p>Contacto</p>  
            </Link>
          </div>
        </div>
        <div className="infoContainer">
          <img className="imageHeader" src={imageResponsive} alt="hero"/>
          <div className="infoMain">
            <p className="title">PrisMax</p>
            <p className="subTitle">Inovación en CRRT</p>
            <p className="detail">Sistema PrisMax para Cuidados Intensivos </p>
            <p className="detail">
              El sistema PrisMax está diseñado para brindar más confianza a los
              profesionales de la salud, en la administración de las terapias de
              reemplazo renal continua (TRRC) y recambio plasmático terapéutico.
              (RPT) El sistema PrisMax está diseñado para proveer tapias
              individualizadas y efectivas para pacientes en unidades de
              cuidados intensivos (UCI).
            </p>
            <p className="detail">
              Hemos colaborado con expertos en cuidados intensivos para
              desarrollar la próxima generación de tecnología para el área,
              recabando los comentarios de más de 650 profesionales de la salud
              en cuidados intensivos de más de 50 UCIs alrededor del mundo
              buscando solucionar sus principales retos y necesidades.
            </p>
          </div>
          <img src={robot} alt="footer" />
        </div>
      </main>
    </>
  );
}
