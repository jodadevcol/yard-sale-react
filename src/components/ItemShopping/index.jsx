import React, { useContext } from "react"
/* Contexts */
import AppContext from "contexts/AppContext"
/* Styles & Sources */
import styles from "./styles.module.css"
import { IconClose } from "icons/IconClose"

function ItemShopping({ itemShopping, index }) {
  const { removeToCart } = useContext(AppContext)

  const hanldeRemove = (itemShopping, valueIndex) => {
    removeToCart(itemShopping, valueIndex)
  }

  return (
    <div className={styles.isShopCartItem}>
      <figure className={styles.isItemPicture}>
        <img
          className={styles.isPictureImg}
          src={itemShopping.image}
          alt={itemShopping.title}
        />
      </figure>
      <div className={styles.isItemDetail}>
        <p>{itemShopping.title}</p>
        <p>$ {itemShopping.price}</p>
        <span 
          className={styles.isIconClose}
          onClick={() => hanldeRemove(itemShopping, index)}
        >
          <IconClose fill={'#c7c7c7'} />
        </span>
      </div>
    </div>
  )
}

export default ItemShopping
