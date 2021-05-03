import React from "react";
// Style
import "./index.css";

export default function Model3d() {
  return (
    <div className="modelContainer">
      <h1 className="title">Modelo 3D</h1>
      <div className="videoContainer">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/Jky9I1ihAkg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
