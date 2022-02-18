import styles from "./styles.module.css"

function Section({ children }) {
  return <section className={styles.isSectionContainer}>{children}</section>
}

export default Section
