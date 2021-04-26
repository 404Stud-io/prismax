import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [valueForm, setValueForm] =useState({
    EMAIL:"",
    FNAME: "",
    LNAME: "",
    INSTITUT: "",
    COUNTRY: "",
    TYPEINST: "",
    AGENT: "",
    // specialty: "",
    DEGREE: "",
    PERMISO: "",
    checkOne: false,
  });
  const [valueContactForm, setValueContactForm] =useState({
    name:"",
    email: "",
    commentary: "",
  });


 // return Value
  return (
    <Context.Provider
      value={{
        valueForm, 
        setValueForm,
        valueContactForm, 
        setValueContactForm
      }}
    >
      {children}
    </Context.Provider>
  );
};