import {useContext} from "react"
import { Outlet } from "react-router-dom"
/* Containers */
import Header from "containers/Header"
import Section from "containers/Section"
/* Containers */
import ShoppingCart from "containers/ShoppingCart"
/* Contexts */
import AppContext from "contexts/AppContext"
/* Styles & Sources */
import styles from "./styles.module.css"
import MenuMobile from "../MenuMobile"


function Main() {
  const { isOpenCart, isOpenMenuMobile } = useContext(AppContext)
  return (
    <main className={styles.main}>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <ShoppingCart 
        isVisible={
          isOpenCart ? true : false
        }
        isClassCartShop={
          isOpenCart ? styles.isAnimOpenCart : ''
        }
      />
      {
        isOpenMenuMobile
          ? <MenuMobile/>
          : ''
      }
    </main>
  )
}

export default Main
