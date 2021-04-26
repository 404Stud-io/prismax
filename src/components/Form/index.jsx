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
    console.log(event);
    setValueForm({
      ...valueForm,
      checkOne: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valueForm);
    fetch('https://us1.api.mailchimp.com/3.0/lists/8228242ee3', {
      method: 'POST',
      mode: "no-cors",
      body: JSON.stringify(valueForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: 'auth ccc3fb27fe5911f0d212d73f14a8bdf1-us1'
      }})
      .then((res)=> res.json())
      .then((res)=> console.log(res))
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
      // var url = "https://us1.api.mailchimp.com/3.0/lists/8228242ee3";
      // fetch(url, {
    //   method: "POST", // or 'PUT'
    //   mode: "no-cors", // no-cors, *cors, same-origin
    //   body: JSON.stringify(valueForm), // JSON.stringifydata can be `string` or {object}!
    //   headers: {
    //     'Authorization': 'f6cd7a725fd13f5950dee8196',
    //     'Content-Type': "application/json"
    //   },
    // })
    //   .then((res)=> res.json())
    //   .then((res) => console.log(res))
    //   .catch((error) => console.error("Error:", error))
    //   .then((response) => console.log("Success:", response));
  };

  return (
    <main className="mainContainer">
      <section className="formContainer">
        <h1>Registrate ahora</h1>
        <form
          action="https://prismax.us1.list-manage.com/subscribe/post?u=f6cd7a725fd13f5950dee8196&amp;id=8228242ee3"
          method="post"
          // id="mc-embedded-subscribe-form"
          // name="mc-embedded-subscribe-form"
          // class="validate form-prismax"
          // target="_blank"
          noValidate
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
          <InputLabel id="select-country">País *</InputLabel>
          <Select
            labelId="select-country"
            id="COUNTRY"
            name="COUNTRY"
            value={valueForm.COUNTRY}
            onChange={handleChangeLogin}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="United States of America">
              United States of America
            </MenuItem>
            <MenuItem value="Aaland Islands">Aaland Islands</MenuItem>
            <MenuItem value="Afghanistan">Afghanistan</MenuItem>
            <MenuItem value="Albania">Albania</MenuItem>
            <MenuItem value="Algeria">Algeria</MenuItem>
            <MenuItem value="American Samoa">American Samoa</MenuItem>
            <MenuItem value="Andorra">Andorra</MenuItem>
            <MenuItem value="Angola">Angola</MenuItem>
            <MenuItem value="Anguilla">Anguilla</MenuItem>
            <MenuItem value="Antarctica">Antarctica</MenuItem>
            <MenuItem value="Antigua And Barbuda">Antigua And Barbuda</MenuItem>
            <MenuItem value="Argentina">Argentina</MenuItem>
            <MenuItem value="Armenia">Armenia</MenuItem>
            <MenuItem value="Aruba">Aruba</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Austria">Austria</MenuItem>
            <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
            <MenuItem value="Bahamas">Bahamas</MenuItem>
            <MenuItem value="Bahrain">Bahrain</MenuItem>
            <MenuItem value="Bangladesh">Bangladesh</MenuItem>
            <MenuItem value="Barbados">Barbados</MenuItem>
            <MenuItem value="Belarus">Belarus</MenuItem>
            <MenuItem value="Belgium">Belgium</MenuItem>/{" "}
            <MenuItem value="Belize">Belize</MenuItem>
            <MenuItem value="Benin">Benin</MenuItem>
            <MenuItem value="Bermuda">Bermuda</MenuItem>
            <MenuItem value="Bhutan">Bhutan</MenuItem>
            <MenuItem value="Bolivia">Bolivia</MenuItem>
            <MenuItem value="Bonaire, Saint Eustatius and Saba">
              Bonaire, Saint Eustatius and Saba
            </MenuItem>
            <MenuItem value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </MenuItem>
            <MenuItem value="Botswana">Botswana</MenuItem>
            <MenuItem value="Bouvet Island">Bouvet Island</MenuItem>
            <MenuItem value="Brazil">Brazil</MenuItem>
            <MenuItem value="British Indian Ocean Territory">
              British Indian Ocean Territory
            </MenuItem>
            <MenuItem value="Brunei Darussalam"> Brunei Darussalam </MenuItem>
            <MenuItem value="Bulgaria">Bulgaria</MenuItem>
            <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
            <MenuItem value="Burundi">Burundi</MenuItem>
            <MenuItem value="Cambodia">Cambodia</MenuItem>
            <MenuItem value="Cameroon">Cameroon</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Cape Verde">Cape Verde</MenuItem>
            <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
            <MenuItem value="Central African Republic">
              Central African Republic
            </MenuItem>
            <MenuItem value="Chad">Chad</MenuItem>
            <MenuItem value="Chile">Chile</MenuItem>
            <MenuItem value="China">China</MenuItem>
            <MenuItem value="Christmas Island"> Christmas Island </MenuItem>
            <MenuItem value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </MenuItem>
            <MenuItem value="Colombia">Colombia</MenuItem>
            <MenuItem value="Comoros">Comoros</MenuItem>
            <MenuItem value="Congo">Congo</MenuItem>
            <MenuItem value="Cook Islands">Cook Islands</MenuItem>
            <MenuItem value="Costa Rica">Costa Rica</MenuItem>
            <MenuItem value="Cote D'Ivoire">Cote D'Ivoire</MenuItem>
            <MenuItem value="Croatia">Croatia</MenuItem>
            <MenuItem value="Cuba">Cuba</MenuItem>
            <MenuItem value="Curacao">Curacao</MenuItem>
            <MenuItem value="Cyprus">Cyprus</MenuItem>
            <MenuItem value="Czech Republic">Czech Republic</MenuItem>
            <MenuItem value="Democratic Republic of the Congo">
              Democratic Republic of the Congo
            </MenuItem>
            <MenuItem value="Denmark">Denmark</MenuItem>
            <MenuItem value="Djibouti">Djibouti</MenuItem>
            <MenuItem value="Dominica">Dominica</MenuItem>
            <MenuItem value="Dominican Republic"> Dominican Republic</MenuItem>
            <MenuItem value="Ecuador">Ecuador</MenuItem>
            <MenuItem value="Egypt">Egypt</MenuItem>
            <MenuItem value="El Salvador">El Salvador</MenuItem>
            <MenuItem value="Equatorial Guinea"> Equatorial Guinea </MenuItem>
            <MenuItem value="Eritrea">Eritrea</MenuItem>
            <MenuItem value="Estonia">Estonia</MenuItem>
            <MenuItem value="Ethiopia">Ethiopia</MenuItem>
            <MenuItem value="Falkland Islands"> Falkland Islands </MenuItem>
            <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
            <MenuItem value="Fiji">Fiji</MenuItem>
            <MenuItem value="Finland">Finland</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="French Guiana">French Guiana</MenuItem>
            <MenuItem value="French Polynesia"> French Polynesia </MenuItem>
            <MenuItem value="French Southern Territories">
              French Southern Territories
            </MenuItem>
            <MenuItem value="Gabon">Gabon</MenuItem>
            <MenuItem value="Gambia">Gambia</MenuItem>
            <MenuItem value="Georgia">Georgia</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Ghana">Ghana</MenuItem>
            <MenuItem value="Gibraltar">Gibraltar</MenuItem>
            <MenuItem value="Greece">Greece</MenuItem>
            <MenuItem value="Greenland">Greenland</MenuItem>
            <MenuItem value="Grenada">Grenada</MenuItem>
            <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>
            <MenuItem value="Guam">Guam</MenuItem>
            <MenuItem value="Guatemala">Guatemala</MenuItem>
            <MenuItem value="Guernsey">Guernsey</MenuItem>
            <MenuItem value="Guinea">Guinea</MenuItem>
            <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
            <MenuItem value="Guyana">Guyana</MenuItem>
            <MenuItem value="Haiti">Haiti</MenuItem>
            <MenuItem value="Heard and Mc Donald Islands">
              Heard and Mc Donald Islands
            </MenuItem>
            <MenuItem value="Honduras">Honduras</MenuItem>
            <MenuItem value="Hong Kong">Hong Kong</MenuItem>
            <MenuItem value="Hungary">Hungary</MenuItem>
            <MenuItem value="Iceland">Iceland</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Iran">Iran</MenuItem>
            <MenuItem value="Iraq">Iraq</MenuItem>
            <MenuItem value="Ireland">Ireland</MenuItem>
            <MenuItem value="Isle of Man">Isle of Man</MenuItem>
            <MenuItem value="Israel">Israel</MenuItem>
            <MenuItem value="Italy">Italy</MenuItem>
            <MenuItem value="Jamaica">Jamaica</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="Jersey  (Channel Islands)">
              Jersey (Channel Islands)
            </MenuItem>
            <MenuItem value="Jordan">Jordan</MenuItem>
            <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
            <MenuItem value="Kenya">Kenya</MenuItem>
            <MenuItem value="Kiribati">Kiribati</MenuItem>
            <MenuItem value="Kuwait">Kuwait</MenuItem>
            <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
            <MenuItem value="Lao People's Democratic Republic">
              Lao People's Democratic Republic
            </MenuItem>
            <MenuItem value="Latvia">Latvia</MenuItem>
            <MenuItem value="Lebanon">Lebanon</MenuItem>
            <MenuItem value="Lesotho">Lesotho</MenuItem>
            <MenuItem value="Liberia">Liberia</MenuItem>
            <MenuItem value="Libya">Libya</MenuItem>
            <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
            <MenuItem value="Lithuania">Lithuania</MenuItem>
            <MenuItem value="Luxembourg">Luxembourg</MenuItem>
            <MenuItem value="Macau">Macau</MenuItem>
            <MenuItem value="Macedonia">Macedonia</MenuItem>
            <MenuItem value="Madagascar">Madagascar</MenuItem>
            <MenuItem value="Malawi">Malawi</MenuItem>
            <MenuItem value="Malaysia">Malaysia</MenuItem>
            <MenuItem value="Maldives">Maldives</MenuItem>
            <MenuItem value="Mali">Mali</MenuItem>
            <MenuItem value="Malta">Malta</MenuItem>
            <MenuItem value="Marshall Islands"> Marshall Islands </MenuItem>
            <MenuItem value="Martinique">Martinique</MenuItem>
            <MenuItem value="Mauritania">Mauritania</MenuItem>
            <MenuItem value="Mauritius">Mauritius</MenuItem>
            <MenuItem value="Mayotte">Mayotte</MenuItem>
            <MenuItem value="Mexico">Mexico</MenuItem>
            <MenuItem value="Micronesia, Federated States of">
              Micronesia, Federated States of
            </MenuItem>
            <MenuItem value="Moldova, Republic of">
              Moldova, Republic of
            </MenuItem>
            <MenuItem value="Monaco">Monaco</MenuItem>
            <MenuItem value="Mongolia">Mongolia</MenuItem>
            <MenuItem value="Montenegro">Montenegro</MenuItem>
            <MenuItem value="Montserrat">Montserrat</MenuItem>
            <MenuItem value="Morocco">Morocco</MenuItem>
            <MenuItem value="Mozambique">Mozambique</MenuItem>
            <MenuItem value="Myanmar">Myanmar</MenuItem>
            <MenuItem value="Namibia">Namibia</MenuItem>
            <MenuItem value="Nauru">Nauru</MenuItem>
            <MenuItem value="Nepal">Nepal</MenuItem>
            <MenuItem value="Netherlands">Netherlands</MenuItem>
            <MenuItem value="Netherlands Antilles">
              Netherlands Antilles
            </MenuItem>
            <MenuItem value="New Caledonia">New Caledonia</MenuItem>
            <MenuItem value="New Zealand">New Zealand</MenuItem>
            <MenuItem value="Nicaragua">Nicaragua</MenuItem>
            <MenuItem value="Niger">Niger</MenuItem>
            <MenuItem value="Nigeria">Nigeria</MenuItem>
            <MenuItem value="Niue">Niue</MenuItem>
            <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
            <MenuItem value="North Korea">North Korea</MenuItem>
            <MenuItem value="Northern Mariana Islands">
              Northern Mariana Islands
            </MenuItem>
            <MenuItem value="Norway">Norway</MenuItem>
            <MenuItem value="Oman">Oman</MenuItem>
            <MenuItem value="Pakistan">Pakistan</MenuItem>
            <MenuItem value="Palau">Palau</MenuItem>
            <MenuItem value="Palestine">Palestine</MenuItem>
            <MenuItem value="Panama">Panama</MenuItem>
            <MenuItem value="Papua New Guinea">Papua New Guinea </MenuItem>
            <MenuItem value="Paraguay">Paraguay</MenuItem>
            <MenuItem value="Peru">Peru</MenuItem>
            <MenuItem value="Philippines">Philippines</MenuItem>
            <MenuItem value="Pitcairn">Pitcairn</MenuItem>
            <MenuItem value="Poland">Poland</MenuItem>
            <MenuItem value="Portugal">Portugal</MenuItem>
            <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
            <MenuItem value="Qatar">Qatar</MenuItem>
            <MenuItem value="Republic of Kosovo"> Republic of Kosovo</MenuItem>
            <MenuItem value="Reunion">Reunion</MenuItem>
            <MenuItem value="Romania">Romania</MenuItem>
            <MenuItem value="Russia">Russia</MenuItem>
            <MenuItem value="Rwanda">Rwanda</MenuItem>
            <MenuItem value="Saint Kitts and Nevis">
              Saint Kitts and Nevis
            </MenuItem>
            <MenuItem value="Saint Lucia">Saint Lucia</MenuItem>
            <MenuItem value="Saint Martin">Saint Martin</MenuItem>
            <MenuItem value="Saint Vincent and the Grenadines">
              Saint Vincent and the Grenadines
            </MenuItem>
            <MenuItem value="Samoa (Independent)">
              {" "}
              Samoa (Independent)
            </MenuItem>
            <MenuItem value="San Marino">San Marino</MenuItem>
            <MenuItem value="Sao Tome and Principe">
              Sao Tome and Principe
            </MenuItem>
            <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
            <MenuItem value="Senegal">Senegal</MenuItem>
            <MenuItem value="Serbia">Serbia</MenuItem>
            <MenuItem value="Seychelles">Seychelles</MenuItem>
            <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
            <MenuItem value="Sint Maarten">Sint Maarten</MenuItem>
            <MenuItem value="Slovakia">Slovakia</MenuItem>
            <MenuItem value="Slovenia">Slovenia</MenuItem>
            <MenuItem value="Solomon Islands"> Solomon Islands </MenuItem>
            <MenuItem value="Somalia">Somalia</MenuItem>
            <MenuItem value="South Africa">South Africa</MenuItem>
            <MenuItem value="South Georgia and the South Sandwich Islands">
              South Georgia and the South Sandwich Islands
            </MenuItem>
            <MenuItem value="South Korea">South Korea</MenuItem>
            <MenuItem value="South Sudan">South Sudan</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
            <MenuItem value="St. Helena">St. Helena</MenuItem>
            <MenuItem value="St. Pierre and Miquelon">
              St. Pierre and Miquelon
            </MenuItem>
            <MenuItem value="Sudan">Sudan</MenuItem>
            <MenuItem value="Suriname">Suriname</MenuItem>
            <MenuItem value="Svalbard and Jan Mayen Islands">
              Svalbard and Jan Mayen Islands
            </MenuItem>
            <MenuItem value="Swaziland">Swaziland</MenuItem>
            <MenuItem value="Sweden">Sweden</MenuItem>
            <MenuItem value="Switzerland">Switzerland</MenuItem>
            <MenuItem value="Syria">Syria</MenuItem>
            <MenuItem value="Taiwan">Taiwan</MenuItem>
            <MenuItem value="Tajikistan">Tajikistan</MenuItem>
            <MenuItem value="Tanzania">Tanzania</MenuItem>
            <MenuItem value="Thailand">Thailand</MenuItem>
            <MenuItem value="Timor-Leste">Timor-Leste</MenuItem>
            <MenuItem value="Togo">Togo</MenuItem>
            <MenuItem value="Tokelau">Tokelau</MenuItem>
            <MenuItem value="Tonga">Tonga</MenuItem>
            <MenuItem value="Trinidad and Tobago">
              {" "}
              Trinidad and Tobago
            </MenuItem>
            <MenuItem value="Tunisia">Tunisia</MenuItem>
            <MenuItem value="Turkey">Turkey</MenuItem>
            <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
            <MenuItem value="Turks &amp; Caicos Islands">
              Turks &amp; Caicos Islands
            </MenuItem>
            <MenuItem value="Turks and Caicos Islands">
              Turks and Caicos Islands
            </MenuItem>
            <MenuItem value="Tuvalu">Tuvalu</MenuItem>
            <MenuItem value="Uganda">Uganda</MenuItem>
            <MenuItem value="Ukraine">Ukraine</MenuItem>
            <MenuItem value="United Arab Emirates">
              United Arab Emirates
            </MenuItem>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
            <MenuItem value="Uruguay">Uruguay</MenuItem>
            <MenuItem value="USA Minor Outlying Islands">
              USA Minor Outlying Islands
            </MenuItem>
            <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
            <MenuItem value="Vanuatu">Vanuatu</MenuItem>
            <MenuItem value="Vatican City State (Holy See)">
              Vatican City State (Holy See)
            </MenuItem>
            <MenuItem value="Venezuela">Venezuela</MenuItem>
            <MenuItem value="Vietnam">Vietnam</MenuItem>
            <MenuItem value="Virgin Islands (British)">
              Virgin Islands (British)
            </MenuItem>
            <MenuItem value="Virgin Islands (U.S.)">
              Virgin Islands (U.S.)
            </MenuItem>
            <MenuItem value="Wallis and Futuna Islands">
              Wallis and Futuna Islands
            </MenuItem>
            <MenuItem value="Western Sahara">Western Sahara</MenuItem>
            <MenuItem value="Yemen">Yemen</MenuItem>
            <MenuItem value="Zambia">Zambia</MenuItem>
            <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
          </Select>
          <InputLabel id="select-type-institution">
            Tipo de Institución *
          </InputLabel>
          <Select
            labelId="select-type-institution"
            value={valueForm.TYPEINST}
            onChange={handleChangeLogin}
            id="TYPEINST"
            name="TYPEINST"
            required
            className="required"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Académica">Académica</MenuItem>
            <MenuItem value="Privada">Privada</MenuItem>
            <MenuItem value="Pública">Pública</MenuItem>
            <MenuItem value="Otra">Otra</MenuItem>
          </Select>
          <TextField
            id="AGENT"
            name="AGENT"
            label="Representante de Baxter"
            color="secondary"
            value={valueForm.AGENT}
            onChange={handleChangeLogin}
          />
          <InputLabel id="select-degree">Titulo profesional*</InputLabel>
          <Select
            labelId="select-degree"
            id="DEGREE"
            name="DEGREE"
            color="secondary"
            value={valueForm.DEGREE}
            onChange={handleChangeLogin}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Nefrología">Nefrología</MenuItem>
            <MenuItem value="Intensivista">Intensivista</MenuItem>
            <MenuItem value="Enfermería">Enfermería</MenuItem>
            <MenuItem value="Otro">Otro</MenuItem>
          </Select>
          <p className="checkboxText">
            <Checkbox
              name="checkOne"
              checked={valueForm.checkOne}
              onChange={handleChange}
            />
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
          <InputLabel id="select-permiso">
            Por favor selecione una opción
          </InputLabel>
          <Select
            labelId="select-permiso"
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
          <button
            disabled={!valueForm.checkOne}
            className="buttonAction"
            type="submit"
          >
            Enviar
          </button>
          <button className="buttonAction" onClick={handleSubmit} type="button">
            Handle
          </button>
        </form>
      </section>
    </main>
  );
}
