import React, { useContext } from "react"
import AppContext from "contexts/AppContext"
import "./styles.css"
import { IconAddToCart } from "icons/IconAddToCart"
/* const sourceImg = `https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6782479.jpg&fm=jpg` */

function ItemProduct({ id, title, price, image }) {
  const { addToCart } = useContext(AppContext)
  const handleClick = ({ id, title, price, image }) => {
    addToCart({ id, title, price, image })
  }

  return (
    <div className="card-product">
      <img className="preview-product" src={image} alt={title} />
      <div className="card-product-info">
        <div className="product-info">
          <p className="product-precie">$ {price}</p>
          <p className="product-name">{title}</p>
        </div>
        <figure
          className="product-figure"
          onClick={() => handleClick({ id, title, price, image })}
        >
          {/* <img
            className="picture-icon"
            src={IconAddCart}
            alt="Add card product"
          /> */}
          <IconAddToCart />
        </figure>
      </div>
    </div>
  )
}

export default ItemProduct
