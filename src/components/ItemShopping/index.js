import React from "react"
/* Styles & Sources */
import "./styles.css"

function ItemShopping() {
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
        <span className="delet-product icon"></span>
      </div>
    </div>
  )
}

export default ItemShopping