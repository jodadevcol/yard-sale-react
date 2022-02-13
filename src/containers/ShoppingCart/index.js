import React, { useContext } from "react"
/* Components */
import ItemShopping from "@components/ItemShopping"
import BtnPrimary from "@components/Buttons/Primary"
/* Contexts */
import AppContext from "@contexts/AppContext"
/* Hooks */
import useFormatMoney from "@hooks/useFormatMoney"
/* Styles & Sources */
import "./styles.css"
import IconArrowLeft from "@icons/arrow-left.svg"

const styleIcon = {
  backgroundImage: `url(${IconArrowLeft})`,
}

function ShoppingCart() {
  const { state } = useContext(AppContext)

  const totalArticles = () => {
    const total = state.cart.length

    return `${total} Articles`
  }
  const totalShopping = () => {
    const reducer = (valueAccumulator, valueCurrent) => valueAccumulator + valueCurrent.price
    const sumShopping = state.cart.reduce(reducer, 0)

    return sumShopping
  }

  const formatMoney = useFormatMoney(totalShopping())

  return (
    <div className="shopping-cart-container">
      <aside className="shopping-cart">
        <div className="shopping-cart-title">
          <span
            className="icon arrow-left"
            style={styleIcon}
          ></span>
          <h2 className="shopping-title">Shopping cart</h2>
        </div>
        <div className="shopping-container">
          {
            state.cart.map((itemShopping, index) => (
              <ItemShopping
                key={`item-${itemShopping.id}-shopping-0${index}`}
                index={index}
                itemShopping={itemShopping}
              />
            ))
          }
        </div>

        <div className="resume-order">
          <p className="resume-info">
            <span>Total</span>
            <span>{totalArticles()}</span>
          </p>
          <p className="resume-price">{formatMoney}</p>
        </div>

        <BtnPrimary
          text="Checkout"
        />
      </aside>
    </div>
  )
}

export default ShoppingCart