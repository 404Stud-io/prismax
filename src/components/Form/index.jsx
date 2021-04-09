import React, { useContext } from 'react'

// Context
import { Context } from "../../utils/context";

export default function Form() {

  const {valueName, setValueName} = useContext(Context)
  return (
    <div>
      <h1>El form</h1>
    </div>
  )
}
