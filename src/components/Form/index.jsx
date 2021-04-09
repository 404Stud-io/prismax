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
      checked: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valueForm);
    var url = "https://prismax.us1.list-manage.com/subscribe/post?u=f6cd7a725fd13f5950dee8196&amp;id=8228242ee3";
    var data = valueForm;

    fetch(url, {
      method: "POST", // or 'PUT'
      mode: 'no-cors', // no-cors, *cors, same-origin
      body: JSON.stringify(data), // data can be `string` or {object}!
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
        <form className="form" action="" onSubmit={handleSubmit}>
          <TextField
            required
            id="email"
            name="email"
            label="Correo Electrónico"
            color="secondary"
            value={valueForm.email}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="name"
            name="name"
            label="Nombre"
            color="secondary"
            value={valueForm.name}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            color="secondary"
            value={valueForm.lastName}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="institutionName"
            name="institutionName"
            label="Nombre de la institución"
            color="secondary"
            value={valueForm.institutionName}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="country"
            name="country"
            label="País"
            color="secondary"
            value={valueForm.country}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="typeInstitution"
            name="typeInstitution"
            label="Tipo de Institución"
            color="secondary"
            value={valueForm.typeInstitution}
            onChange={handleChangeLogin}
          />
          <TextField
            id="baxter"
            name="baxter"
            label="Representante de Baxter"
            color="secondary"
            value={valueForm.baxter}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="specialty"
            name="specialty"
            label="Especialidad"
            color="secondary"
            value={valueForm.specialty}
            onChange={handleChangeLogin}
          />
          <TextField
            required
            id="jobTitle"
            name="jobTitle"
            label="Titulo Profesional"
            color="secondary"
            value={valueForm.jobTitle}
            onChange={handleChangeLogin}
          />
          <p className="checkboxText">
            <Checkbox checked={valueForm.checked} onChange={handleChange} />
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
            id="consent"
            name="consent"
            value={valueForm.consent}
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
            {" "}
            Enviar{" "}
          </button>
        </form>
      </section>
    </main>
  );
}
