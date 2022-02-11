import React, { useContext } from "react"
/* Components */
import ItemShopping from "@components/ItemShopping"
import BtnPrimary from "@components/Buttons/Primary"
/* Contexts */
import AppContext from "@contexts/AppContext"
/* Styles & Sources */
import "./styles.css"

function ShoppingCart() {
  const { state } = useContext(AppContext)

  return (
    <div className="shopping-cart-container">
      <aside className="shopping-cart">
        <div className="shopping-cart-title">
          <span className="arrow-left icon"></span>
          <h2 className="shopping-title">Shopping cart</h2>
        </div>
        <div className="shopping-container">
          {
            state.cart.map(itemShopping => (
              <ItemShopping
                itemShopping={itemShopping}
                key={`item-${itemShopping.id}-shopping`}
              />
            ))
          }
        </div>

        <div className="resume-order">
          <p className="resume-info">
            <span>Total</span>
            <span>6 articles</span>
          </p>
          <p className="resume-price">$ 560.00</p>
        </div>

        <BtnPrimary
          text="Checkout"
        />
      </aside>
    </div>
  )
}

export default ShoppingCart