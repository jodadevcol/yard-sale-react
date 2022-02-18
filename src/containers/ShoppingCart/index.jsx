import { useContext } from "react"
/* Components */
import ItemShopping from "components/ItemShopping"
import BtnPrimary from "components/Buttons/Primary"
/* Contexts */
import AppContext from "contexts/AppContext"
/* Hooks */
import useFormatMoney from "hooks/useFormatMoney"
/* Styles & Sources */
import styles from "./styles.module.css"
import { IconArrowLeft } from "icons/IconArrowLeft"
import { IconShoppingEmpty } from "../../components/Icons/IconShoppingEmpty"

function ShoppingCart () {
  const { state } = useContext(AppContext)

  const totalArticles = () => {
    const total = state.cart.length

    return `${total} Articles`
  }
  const totalShopping = () => {
    const reducer = (valueAccumulator, valueCurrent) =>
      valueAccumulator + valueCurrent.price
    const sumShopping = state.cart.reduce(reducer, 0)

    return sumShopping
  }
  const formatMoney = useFormatMoney(totalShopping())

  return (
    <div className={styles.isShoppingCartContainer}>
      <aside className={styles.isShoppingCartAside}>
        <div className={styles.isAsideTitle}>
          <div className={styles.isTitleIcon}>
            <IconArrowLeft fill="#C7C7C7" />
          </div>
          <h2 className={styles.isAsideText}>Shopping cart</h2>
        </div>
        <div className={styles.isAsideContent}>
          {
            state.cart.length === 0
              ? (
                <div className={styles.isContentEmpty}>
                  <div className={styles.isEmptyIcon}>
                    <IconShoppingEmpty classname={styles.isIconSvg} fill="#ffffff" />
                  </div>
                  <span className={styles.isEmptyText}>Cart is empty.</span>
                </div>
              )
              : (
                state.cart.map((itemShopping, index) => {
                  return (
                    <ItemShopping
                      key={`shopping-${itemShopping.id}-0${index}`}
                      index={index}
                      itemShopping={itemShopping}
                    />
                  )
                })
              )
          }
        </div>

        <div className={styles.isAsideResume}>
          <p className={styles.isResumeInfo}>
            <span>Total</span>
            <span>{totalArticles()}</span>
          </p>
          <p className={styles.isResumePrice}>{formatMoney}</p>
        </div>

        <BtnPrimary text="Checkout" />
      </aside>
    </div>
  )
}

export default ShoppingCart

