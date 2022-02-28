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


function Main() {
  const { isOpenCart } = useContext(AppContext)
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
    </main>
  )
}

export default Main
