import React, { useState, useContext } from "react"
/* Components */
import MenuProfile from "components/MenuProfile"
/* Containers */
import ShoppingCart from "containers/ShoppingCart"
/* Contexts */
import AppContext from "contexts/AppContext"
/* Styles & Sources */
import styles from "./styles.module.css"
import { IconMenuMobile } from "icons/IconMenuMobile"
import { IconShoppingCart } from "icons/IconShoppingCart"
import { IconArrow } from "icons/IconArrow"
import { Logo } from "icons/Logo"

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
    <header className={styles.isHero}>
      <nav className={styles.isHeroNavbar}>
        <div className={styles.isNavbarMobile}>
          <IconMenuMobile />
        </div>
        <div className={styles.isNavbarLogo}>
          <Logo classname={styles.isLogoNav} />
        </div>

        <div className={styles.isNavbarItems}>
          <ul className={styles.isItemsNavList}>
            <li className={styles.isNavListItem}>
              <a href="/">All</a>
            </li>
            <li className={styles.isNavListItem}>
              <a href="/">Clothes</a>
            </li>
            <li className={styles.isNavListItem}>
              <a href="/">Elestronics</a>
            </li>
            <li className={styles.isNavListItem}>
              <a href="/">Furniture</a>
            </li>
            <li className={styles.isNavListItem}>
              <a href="/">Toys</a>
            </li>
            <li className={styles.isNavListItem}>
              <a href="/">Others</a>
            </li>
          </ul>
          <ul className={`${styles.isItemsNavList} ${styles.isNavAccount}`}>
            <li
              className={`${styles.isNavListItem} ${styles.isAccountInfo}`}
              onClick={() => handlerToggle("OptionOne")}
            >
              camilayokoo@gmail.com
              <div className={styles.isAccountInfoIcon}>
                <IconArrow classname={styles.isIconSvg} />
              </div>
            </li>
            <li
              className={`${styles.isNavListItem} ${styles.isNavShoppingCart}`}
              onClick={() => handlerToggle("OptionTwo")}
            >
              <IconShoppingCart classname={styles.isShoppingCartSvg} />

              {state.cart.length > 0 ? (
                <div className={styles.isCountItems}> {state.cart.length} </div>
              ) : null}
            </li>
          </ul>
          {toggle ? <MenuProfile /> : null}
          {toggleOrders ? <ShoppingCart /> : null}
        </div>
      </nav>
    </header>
  )
}

export default Header
