import React from "react";
// Style
import "./index.css";

export default function Model3d() {
  return (
    <div className="modelContainer" id="prismax">
      <h1 className="title">Modelo 3D</h1>
      <div className="videoContainer">
        <iframe
        className="iframeVideo"
          src="https://player.vimeo.com/video/548510593"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
