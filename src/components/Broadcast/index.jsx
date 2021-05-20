import React from "react";
import "./index.css";

import logo from "../../assets/logoPrismax.svg";

export default function Broadcast() {
  return (
    <section className="broadcastContainer" id="transmission">
      <img className="logoImage" src={logo} alt="Logo Pismax" />
      <h1 className="title">Grabación de la transmisión </h1>

      <div className="streamContainer">
        <iframe
          src="https://player.vimeo.com/video/552040259"
          frameBorder="0"
          allow="autoplay; fullscreen; 
        picture-in-picture"
          allowFullScreen
          title="Grabación transmisión de Prismax"
        ></iframe>
      </div>
      <iframe
        className="chatPrismax"
        src="https://minnit.chat/Prismax?embed&&nickname="
        allowtransparency="true"
        title="Chat de la sala de transmisión de Prismax"
      ></iframe>
      <div className="spaceButton"></div>
    </section>
  );
}
