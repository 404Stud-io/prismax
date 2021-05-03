import React from "react";
// Style
import "./index.css";
// Image
import robot from "../../assets/robot.png";
// scroll
import { Link } from "react-scroll";

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
            <p className="detail">
              Con más de 20 años de experiencia en cuidados intensivos, el
              sistema PrisMax ayuda al profesional de la salud a encontrar
              solución a las necesidades de su unidad de cuidados intensivos,
              maximizando la administración de terapias, la calidad de cuidados
              que recibe el paciente ahora y en el futuro a través de la mejora
              en simplicidad, eficiencia y precisión.{" "}
            </p>
            <p className="detail">
              El sistema PrisMax continúa el compromiso de Baxter con la
              seguridad, con características integradas que monitorean la
              configuración y administración de las terapias, reduciendo los
              errores humanos.{" "}
            </p>
            <p className="detail underline">Terapias simplificadas</p>
            <p className="detail">
              El sistema PrisMax está diseñado para simplificar la
              administración de TRRC, reduciendo también la carga de trabajo del
              personal de enfermería.
            </p>
            <p className="detail underline">Tratamientos más eficientes </p>
            <p className="detail">
              El sistema PrisMax automatiza las tareas demandantes para agilizar
              el flujo de trabajo del profesional de la salud.
            </p>
            <p className="detail underline">Mayor precisión </p>
            <p className="detail">
              La tecnología del sistema PrisMax permite al profesional de la
              salud, optimizar la administración de terapias mejorando la
              precisión del tratamiento y el desempeño del sistema.
            </p>
            <p className="detail underline">Información de Uso</p>
            <p className="detail">
              La unidad de control PrisMax está destinada para:
            </p>
            <ul>
              <li className="detail">
                Pacientes con TRRC 20kg. con falla renal aguda y/o sobrecarga de
                fluidos.
              </li>
              <li className="detail">
                Pacientes con RPT de 20kg. enfermedades donde la eliminación de
                componentes plasmáticos es necesaria.
              </li>
              <li className="detail">
                Todo los tratamientos administrados a través del Sistema PrisMax
                deben ser indicados por un médico.
              </li>
            </ul>
          </div>
          <img src={robot} alt="footer" />
        </div>
      </main>
    </>
  );
}
