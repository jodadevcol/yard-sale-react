import React, { useContext } from "react"
import AppContext from "contexts/AppContext"
import styles from "./styles.module.css"
import { IconAddToCart } from "icons/IconAddToCart"
/* const sourceImg = `https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6782479.jpg&fm=jpg` */

function ItemProduct({ id, title, price, image }) {
  const { addToCart } = useContext(AppContext)
  const handleClick = ({ id, title, price, image }) => {
    addToCart({ id, title, price, image })
  }

  return (
    <div className={styles.isCardProduct}>
      <img className={styles.isProductPicture} src={image} alt={title} />
      <div className={styles.isProductInfo}>
        <div className="product-info">
          <p className={styles.isProductPrecie}>$ {price}</p>
          <p className={styles.isProductDescription}>{title}</p>
        </div>
        <figure
          className={styles.isInfoFigure}
          onClick={() => handleClick({ id, title, price, image })}
        >
          {/* <img
            className="picture-icon"
            src={IconAddCart}
            alt="Add card product"
          /> */}
          <IconAddToCart classname={styles.isFigureIcon} />
        </figure>
      </div>
    </div>
  )
}

export default ItemProduct
