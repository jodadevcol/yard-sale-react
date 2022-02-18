import { Outlet } from "react-router-dom"
/* Containers */
import Header from "containers/Header"
import Section from "containers/Section"
/* Styles & Sources */
import styles from "./styles.module.css"

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </main>
  )
}

export default Main
