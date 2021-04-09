import React, { useContext } from "react";
// Material
import Grid from "@material-ui/core/Grid";
// Style
import "./index.css";
// Context
import { Context } from "../../utils/context";
import Home from "../../components/Home";
import Agenda from "../../components/Agenda";

export default function Landing() {
  const {valueName, setValueName} = useContext(Context)

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        // alignItems="center"
        spacing={1}
        className="containerScreen"
      >
        <Grid item m={6} xs={12}>
          <h1>Evo IQ</h1>
          <Home/>
          <Agenda/>
        </Grid>
      </Grid>
    </>
  );
}
