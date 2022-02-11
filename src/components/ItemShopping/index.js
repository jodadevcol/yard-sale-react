import React from "react"
/* Styles & Sources */
import "./styles.css"
import IconClose from "@icons/icon_close.png"

const styleIcon = {
  backgroundImage: `url(${IconClose})`
}

function ItemShopping({ itemShopping }) {
  return (
    <div className="shopping-card">
      <figure className="shopping-picture">
        <img
          className="picture-img"
          src={itemShopping.images[0]}
          alt={itemShopping.title}
        />
      </figure>
      <div className="shopping-detail">
        <p>{itemShopping.title}</p>
        <p>$ {itemShopping.price}</p>
        <span
          className="delet-product icon"
          style={styleIcon}
        ></span>
      </div>
    </div>
  )
}

export default ItemShopping