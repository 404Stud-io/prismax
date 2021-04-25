import React from "react";
import Broadcast from "../../components/Broadcast";
import Downloadable from "../../components/Downloadable";
// Components
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Model3d from "../../components/Model3d";
// Material



export default function Landing() {

  return (
    <>
      <Hero/>
      <Menu/>
      <Model3d/>
      <Downloadable/>
      <Broadcast/>
    </>
  );
}
