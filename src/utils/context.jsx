import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [valueName, setValueName] =useState("");
 

 // return Value
  return (
    <Context.Provider
      value={{
        valueName, 
        setValueName
      }}
    >
      {children}
    </Context.Provider>
  );
};