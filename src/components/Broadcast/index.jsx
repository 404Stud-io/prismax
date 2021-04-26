import React from "react";
import "./index.css";

import logo from "../../assets/logo_prismax.svg";

export default function Broadcast() {
  return (
    <section className="broadcastContainer">
      <img className="logoImage" src={logo} alt="Logo Pismax" />
      <h1 className="title">Sala de transmisión </h1>
      <div className="streamContainer">
        <iframe
          src="https://vimeo.com/event/914907/embed/ae03d689c7%22"
          frameBorder="0"
          allow="autoplay; fullscreen; 
        picture-in-picture"
          allowFullScreen
          title="Sala de transmisión de Prismax"
        ></iframe>
      </div>
      <iframe
        className="chatPrismax"
        src="https://minnit.chat/testPrismax?embed&&nickname="
        allowTransparency="true"
        title="Chat de la sala de transmisión de Prismax"
      ></iframe>
      <div className="spaceButton"></div>
    </section>
  );
}