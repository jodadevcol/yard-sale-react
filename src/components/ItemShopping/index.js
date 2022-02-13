import React, { useContext } from "react"
/* Contexts */
import AppContext from "@contexts/AppContext"
/* Styles & Sources */
import "./styles.css"
import IconClose from "@icons/icon_close.png"

const styleIcon = {
  backgroundImage: `url(${IconClose})`
}

function ItemShopping({ itemShopping, index }) {
  const { removeToCart } = useContext(AppContext)

  const hanldeRemove = (itemShopping, valueIndex) => {
    removeToCart(itemShopping, valueIndex)
  }

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
          onClick={() => hanldeRemove(itemShopping, index)}
        ></span>
      </div>
    </div>
  )
}

export default ItemShopping