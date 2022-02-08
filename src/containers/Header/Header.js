import React, { useState } from "react"
import "./Header.css"

import IconMenu from '@icons/icon_menu.svg'
import IconShoppingCart from '@icons/icon_shopping_cart.svg'
import Logo from '@img/logo-yard-sale.svg'
import MenuProfile from "../../components/MenuProfile/MenuProfile"

function Header() {
  const [Toggle, setToggle] = useState(false)
  const handlerToggle = () => {
    setToggle(!Toggle)
  }

  return (
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
          <li className="navbar-item account-info" onClick={handlerToggle}>
            camilayokoo@gmail.com
            <span className="arrow-down icon"></span>
          </li>
          <li className="navbar-item shopping-cart-nav">
            <img
              src={IconShoppingCart}
              alt="Shopping Cart"
            />
            <div className="count-items">2</div>
          </li>
        </ul>
        {
          Toggle ?
            <MenuProfile />
            : null
        }
      </div>
    </nav>
  )
}

export default Header