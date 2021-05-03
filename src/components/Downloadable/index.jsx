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
          <p>Material 1</p>
        </div>
        <div className="containerItemMenu download">
          <p>Material 2</p>
        </div>
        <div className="containerItemMenu schedule">
          <p>Material 3</p>
        </div>
        <div className="containerItemMenu transmission">
          <p>Material 4</p>
        </div>
        <div className="containerItemMenu contact">
          <p>Material 5</p>
        </div>
      </div>

      <div className="scheduleContainer ">
        <h1> Agenda</h1>
        <div className="dateChip"> 
        <h2>13 de Mayo 2021</h2> 
          </div>
        <img src={Agenda} alt="Agenda"/>
      </div>
    </div>
  );
}
