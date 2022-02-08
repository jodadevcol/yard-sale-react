import React from "react"
import "./ResumeOrder.css"

function ResumeOrder() {
  return (
    <div className="shopping-card">
      <figure className="shopping-picture">
        <img
          className="picture-img"
          src="https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6782479.jpg&fm=jpg"
          alt="Item Shopping Order"
        />
      </figure>
      <div className="shopping-detail">
        <p>Round shelf</p>
        <p>$ 120,00</p>
      </div>
    </div>
  )
}

export default ResumeOrder