import React from "react"
import "./styles.css"

function BtnPrimary({ text = 'Button Title', handlerEvent }) {
  return (
    <button
      className="BtnPrimary BtnFont"
      onClick={handlerEvent}
    >
      {text}
    </button>
  )
}

export default BtnPrimary