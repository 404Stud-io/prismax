import React from "react";
// Style
import "./index.css";
// image
import Agenda from '../../assets/agendaExample.png'
export default function Downloadable() {
  return (
    <div className="downloaderContainer">
      <h1 className="title">Descargables</h1>
      <div className="containerMenu">
        <div className="containerItemMenu prismax">
          <p>PrisMax</p>
        </div>
        <div className="containerItemMenu download">
          <p>Descargables</p>
        </div>
        <div className="containerItemMenu schedule">
          <p>Agenda</p>
        </div>
        <div className="containerItemMenu transmission">
          <p>Sala de transmición</p>
        </div>
        <div className="containerItemMenu contact">
          <p>Contacto</p>
        </div>
      </div>

      <div className="scheduleContainer ">
        <h1> Agenda</h1>
        <div className="dateChip"> 
        <h2>
          XX de xxxx
          </h2> 
          </div>
        <img src={Agenda} alt="Agenda"/>
      </div>
    </div>
  );
}
