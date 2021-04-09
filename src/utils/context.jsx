import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [valueForm, setValueForm] =useState({
    email:"",
    name: "",
    lastName: "",
    institutionName: "",
    country: "",
    typeInstitution: "",
    baxter: "",
    specialty: "",
    jobTitle: "",
    consent: "",
    checked: false,
  });


 // return Value
  return (
    <Context.Provider
      value={{
        valueForm, 
        setValueForm
      }}
    >
      {children}
    </Context.Provider>
  );
};