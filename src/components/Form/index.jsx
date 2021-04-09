import React, { useContext } from "react";
// Style
import "./index.css";

// Context
import { Context } from "../../utils/context";
import {
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

export default function Form() {
  const { valueForm, setValueForm } = useContext(Context);
  // function handleChange to Login
  const handleChangeLogin = (event) => {
    setValueForm({
      ...valueForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange = (event) => {
    setValueForm({
      ...valueForm,
      checkOne: event.target.checkOne,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valueForm);

    var url =
      "https://prismax.us1.list-manage.com/subscribe/post?u=f6cd7a725fd13f5950dee8196&amp;id=8228242ee3";

    fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors", // no-cors, *cors, same-origin
      body: JSON.stringify(valueForm), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  return (
    <main className="mainContainer">
      <section className="formContainer">
        <h1>Registrate ahora</h1>
        <form
          action="https://prismax.us1.list-manage.com/subscribe/post?u=f6cd7a725fd13f5950dee8196&amp;id=8228242ee3"

          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate form-prismax"
          target="_blank"
          novalidate
        >
          <TextField
            required
            id="EMAIL"
            name="EMAIL"
            label="Correo Electrónico"
            color="secondary"
            value={valueForm.EMAIL}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="FNAME"
            name="FNAME"
            label="Nombre"
            color="secondary"
            value={valueForm.FNAME}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="LNAME"
            name="LNAME"
            label="Apellido"
            color="secondary"
            value={valueForm.LNAME}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="INSTITUT"
            name="INSTITUT"
            label="Nombre de la institución"
            color="secondary"
            value={valueForm.INSTITUT}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="COUNTRY"
            name="COUNTRY"
            label="País"
            color="secondary"
            value={valueForm.COUNTRY}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="TYPEINST"
            name="TYPEINST"
            label="Tipo de Institución"
            color="secondary"
            value={valueForm.TYPEINST}
            onChange={handleChangeLogin}
          />
          <TextField
            id="AGENT"
            name="AGENT"
            label="Representante de Baxter"
            color="secondary"
            value={valueForm.AGENT}
            onChange={handleChangeLogin}
          />
          {/* <TextField
            required
            id="specialty"
            name="specialty"
            label="Especialidad"
            color="secondary"
            value={valueForm.specialty}
            onChange={handleChangeLogin}
          /> */}
          <TextField
            required
            id="DEGREE"
            name="DEGREE"
            label="Titulo Profesional"
            color="secondary"
            value={valueForm.DEGREE}
            onChange={handleChangeLogin}
          />
          <p className="checkboxText">
            <Checkbox checked={valueForm.checkOne} onChange={handleChange} />
            <span>
              Confirmo que leí el Aviso de Privacidad y permito la recepción de
              avisos sobre este evento*
            </span>
          </p>
          <p className="informationText">
            Si requiere recibir información sobre actividades similares e
            información acerca de nuestros productos, servicios y eventos,
            seleccione una opción de las siguientes:
          </p>
          <InputLabel id="select-pro">
            Por favor selecione una opción
          </InputLabel>
          <Select
            labelId="select-pro"
            id="PERMISO"
            name="PERMISO"
            value={valueForm.PERMISO}
            onChange={handleChangeLogin}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={"Si, doy mi consentimiento"}>
              Si, doy mi consentimiento
            </MenuItem>
            <MenuItem value={"No doy mi consentimiento"}>
              No doy mi consentimiento
            </MenuItem>
          </Select>
          <button className="buttonAction" type="submit">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
