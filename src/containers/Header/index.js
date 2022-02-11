import React, { useState, useContext } from "react"
/* Components */
import MenuProfile from "@components/MenuProfile"
/* Containers */
import ShoppingCart from "@containers/ShoppingCart"
/* Contexts */
import AppContext from "@contexts/AppContext"
/* Styles & Sources */
import "./styles.css"
import Logo from '@img/logo-yard-sale.svg'
import IconMenu from '@icons/icon_menu.svg'
import IconShoppingCart from '@icons/icon_shopping_cart.svg'

function Header() {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)

  const handlerToggle = (Option) => {
    if (Option === "OptionOne") {
      setToggle(!toggle)
    }

    if (Option === "OptionTwo") {
      setToggleOrders(!toggleOrders)
    }
  }

  const { state } = useContext(AppContext)

  return (
    <header className="hero">
      <nav className="navbar-container">
        <img
          className="nav-mobile"
          src={IconMenu}
          alt="Menu mobile"
        />
        <img
          className="logo"
          src={Logo}
          alt="Logo YARD Sale"
        />

        <div className="navbar-items">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/">All</a>
            </li>
            <li className="navbar-item">
              <a href="/">Clothes</a>
            </li>
            <li className="navbar-item">
              <a href="/">Elestronics</a>
            </li>
            <li className="navbar-item">
              <a href="/">Furniture</a>
            </li>
            <li className="navbar-item">
              <a href="/">Toys</a>
            </li>
            <li className="navbar-item">
              <a href="/">Others</a>
            </li>
          </ul>
          <ul className="navbar-list account-shopping">
            <li
              className="navbar-item account-info"
              onClick={() => handlerToggle('OptionOne')}
            >
              camilayokoo@gmail.com
              <span className="arrow-down icon"></span>
            </li>
            <li
              className="navbar-item shopping-cart-nav"
              onClick={() => handlerToggle('OptionTwo')}
            >
              <img
                src={IconShoppingCart}
                alt="Shopping Cart"
              />
              {
                state.cart.length > 0
                  ? <div className="count-items"> {state.cart.length} </div>
                  : null
              }
            </li>
          </ul>
          {
            toggle ?
              <MenuProfile />
              : null
          }
          {
            toggleOrders ?
              <ShoppingCart />
              : null
          }
        </div>
      </nav>
    </header>
  )
}

export default Header