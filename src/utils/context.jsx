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