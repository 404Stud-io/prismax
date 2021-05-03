import React, { useContext, useState } from "react";
// Material
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
// Style
import "./index.css";
// Image
import imageHero from "../../assets/heroResponsive.jpeg"
import imageFooter from "../../assets/pleca.svg";
import { Context } from "../../utils/context";

export default function Hero() {
  const { dialogOpen, setDialogOpen, setLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [errorEMail, setErrorEmail] = useState(false);

  // function handleChange email
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const localData = (value) => {
    if (value?.message ==='Auth Succesful') {
      localStorage.setItem("token", value);
      setLogin(true);
      setDialogOpen(false);
    } else {
      setErrorEmail(true);
    }
  };



  const loginEmail = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: `${email}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://prismax.herokuapp.com/api/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => localData(result))
      .catch((error) => setErrorEmail(true));
  };
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className="imageContainer">
        <img className="imageHero" src={imageHero} alt="Imagen heo"/>
        <div className="containerAction">
          <a href="https://registro.prismax.com.mx/">
            <Button
              type="button"
              variant="contained"
              className="buttonRegister"
            >
              Registro
            </Button>
          </a>
          <Button
            type="button"
            onClick={handleClickOpen}
            variant="contained"
            className="buttonAccess"
          >
            Acceso
          </Button>
        </div>
        <img src={imageFooter} alt="" />
        <Dialog
          open={dialogOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Ingresar</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ingresa tu email con el que te registraste
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              type="email"
              required
              label="Email"
              color="primary"
              value={email}
              onChange={handleChange}
              fullWidth
            />
            {errorEMail ? (
              <small>
                Correo electrónico no identificado,
                <a href="https://registro.prismax.com.mx/">
                  por favor registrate en el siguiente Link
                </a>
              </small>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={loginEmail} color="primary">
              Ingresar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
