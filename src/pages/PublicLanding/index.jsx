import React from "react";
// Components
import Broadcast from "../../components/Broadcast";
import Contact from "../../components/Contact";
import Downloadable from "../../components/Downloadable";
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Model3d from "../../components/Model3d";


export default function Landing() {

  return (
    <>
      <Hero/>
      <Menu/>
      <Model3d/>
      <Downloadable/>
      <Broadcast/>
      <Contact/>
    </>
  );
}
