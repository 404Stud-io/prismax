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

  const [dialogOpen, setDialogOpen] = useState(false);

  const [login, setLogin] = useState(false);

  const [isAuth, setIsAuth] = useState(false)


 // return Value
  return (
    <Context.Provider
      value={{
        isAuth, 
        setIsAuth,
        valueForm, 
        setValueForm,
        valueContactForm, 
        setValueContactForm,
        dialogOpen, 
        setDialogOpen,
        login, 
        setLogin
      }}
    >
      {children}
    </Context.Provider>
  );
};