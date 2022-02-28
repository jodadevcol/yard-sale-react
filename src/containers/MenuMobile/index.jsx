/* Contexts */
import AppContext from "contexts/AppContext"
/* Styles & Sources */
import styles from "./styles.module.css"
import { IconClose } from "icons/IconClose"
import { useContext } from "react"
import { Link } from "react-router-dom"

function MenuMobile () {
  const { isMenuMobile } = useContext(AppContext)
  return(
    <div className={styles.isMenuMobileContainer}>
      <div className={styles.isIconCloseMenu} onClick={isMenuMobile}>
        <IconClose/>
      </div>
      <div className={styles.isMenuMobile}>
        <ul className={`${styles.isMobileTopics}`}>
          <a className={styles.isTopicTitle} href="#">Categories</a>

          <li className={styles.isTopicItem}>
            <a href="#">All</a>
          </li>
          <li className={styles.isTopicItem}>
            <a href="#">Clothes</a>
          </li>
          <li className={styles.isTopicItem}>
            <a href="#">Electronics</a>
          </li>
          <li className={styles.isTopicItem}>
            <a href="#">Furnitures</a>
          </li>
          <li className={styles.isTopicItem}>
            <a href="#">Toys</a>
          </li>
          <li className={styles.isTopicItem}>
            <a href="#">Others</a>
          </li>
        </ul>
        {/* <hr /> */}
        <div className={styles.isElementsAccount}>
          {/* <ul className={`${styles.isMobileTopics}`}>
            <li className={styles.isTopicItem}>
              <a href="#">My orders</a>
            </li>
            <li className={styles.isTopicItem}>
              <a href="#">My account</a>
            </li>
          </ul> */}
          <ul className={`${styles.isMobileTopics} ${styles.isElementAccount}`}>
            {/* <li className={`${styles.isTopicItem} ${styles.isAccountEmail}`}>
              <p>camilayokoo@gmail.com</p>
            </li> */}
            <li className={`${styles.isTopicItem} ${styles.isAccountSignOut}`}>
              <Link to="login">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuMobile