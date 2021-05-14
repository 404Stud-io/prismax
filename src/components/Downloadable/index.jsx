import React from "react";
// Style
import "./index.css";
// image
import Agenda from "../../assets/agendaExample.png";
export default function Downloadable() {
  return (
    <div className="downloaderContainer" id="download">
      <h1 className="title">Descargables</h1>
      <div className="containerMenu">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://firebasestorage.googleapis.com/v0/b/mystorage-af4f8.appspot.com/o/BXT-557H_PrisMax%20SpecSheet_A4_PRINT-14DEC18_NoBleed_ESP%20(002).pdf?alt=media&token=38ff5b77-dec1-4f9e-9f74-69e5dacee22e"
          className="containerItemMenu prismax"
        >
          <p>Características PrisMax</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://firebasestorage.googleapis.com/v0/b/mystorage-af4f8.appspot.com/o/Catalogo%20Prismax%209%20de%20Marzo.pdf?alt=media&token=29a6c3b7-94fa-4b0e-9999-a1d1361662e6"
          className="containerItemMenu download"
        >
          <p>PrisMax</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://firebasestorage.googleapis.com/v0/b/mystorage-af4f8.appspot.com/o/PrisMax_Auto-Effluent-One-Pager%20GLBL_MG207_18-0009a(2)_ESP__V1.pdf?alt=media&token=f0622da0-ed2a-43f2-839f-3540a18afc7d"
          className="containerItemMenu schedule"
        >
          <p>Drenaje Autosuficiente</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://firebasestorage.googleapis.com/v0/b/mystorage-af4f8.appspot.com/o/FT%20Thermax.pdf?alt=media&token=3e6dd815-48da-42a2-a950-ec21bfc2f601"
          className="containerItemMenu contact"
        >
          <p>Thermax</p>
        </a>
        {/* <div className="containerItemMenu transmission">
          <p>Material 4</p>
        </div>
      */}
      </div>

      <div className="scheduleContainer " id="schedule">
        <h1> Agenda</h1>
        <div className="dateChip">
          <h2>13 de Mayo 2021</h2>
        </div>
        <img src={Agenda} alt="Agenda" />
      </div>
    </div>
  );
}
