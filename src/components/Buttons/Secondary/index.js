import React from "react"
import "./styles.css"

function BtnSecond({ text = 'Button Title', handlerEvent }) {
  return (
    <button
      className="BtnSecond BtnFont"
      onClick={handlerEvent}
    >
      {text}
    </button>
  )
}

export default BtnSecond