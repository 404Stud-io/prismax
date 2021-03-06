import React, { useContext } from "react";
import "./index.css";
import TextField from "@material-ui/core/TextField";
// Context
import { Context } from "../../utils/context";
import { Button } from "@material-ui/core";

export default function Contact() {
  const { valueContactForm, setValueContactForm } = useContext(Context);

  // function handleChange to Login
  const handleChangeLogin = (event) => {
    setValueContactForm({
      ...valueContactForm,
      [event.target.name]: event.target.value,
    });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valueContactForm);
    var urlencoded = new URLSearchParams();
    urlencoded.append("firstName", `${valueContactForm.name}`);
    urlencoded.append("email", `${valueContactForm.email}`);
    urlencoded.append("content", `${valueContactForm.commentary}`);

    var requestOptions = {
      method: "POST",
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://prismax.herokuapp.com/api/submit", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setValueContactForm({
          name: "",
          email: "",
          commentary: "",
        });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <section className="contactContainer" id="contact">
      <h1 className="title">Contacto</h1>
      <form className="form" noValidate autoComplete="off">
        <TextField
          required
          id="name"
          name="name"
          label="Nombre"
          color="secondary"
          value={valueContactForm.name}
          onChange={handleChangeLogin}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          color="secondary"
          value={valueContactForm.email}
          onChange={handleChangeLogin}
        />

        <TextField
          id="commentary"
          name="commentary"
          label="Comentarios"
          color="secondary"
          variant="outlined"
          multiline
          rows={10}
          value={valueContactForm.commentary}
          onChange={handleChangeLogin}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          type="button"
          color="primary"
        >
          Enviar
        </Button>
      </form>
    </section>
  );
}
