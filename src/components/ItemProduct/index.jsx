import React, { useContext, useState } from "react"
import AppContext from "contexts/AppContext"
import styles from "./styles.module.css"
import { IconAddToCart } from "icons/IconAddToCart"
import { IconAddedInCart } from "icons/IconAddedInCart"
/* const sourceImg = `https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6782479.jpg&fm=jpg` */

function ItemProduct({ id, title, price, image }) {
  const [ iconAdded, setIconAdded ] = useState(false)
  const { addToCart } = useContext(AppContext)

  const handleClick = ({ id, title, price, image }) => {
    setIconAdded(!iconAdded)
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
          {
            iconAdded 
              ? <IconAddedInCart classname={styles.isFigureIcon}/>
              : <IconAddToCart classname={styles.isFigureIcon} />
          }
        </figure>
      </div>
    </div>
  )
}

export default ItemProduct
