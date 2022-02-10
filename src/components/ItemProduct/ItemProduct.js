import React from "react"
import "./ItemProduct.css"

import IconAddCart from '@icons/bt_add_to_cart.svg'
/* const sourceImg = `https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6782479.jpg&fm=jpg` */

function ItemProduct({ title = '', price = 0.0, images }) {
  return (
    <div className="card-product">
      <img
        className="preview-product"
        src={images}
        alt={title}
      />
      <div className="card-product-info">
        <div className="product-info">
          <p className="product-precie">$ {price}</p>
          <p className="product-name">{title}</p>
        </div>
        <figure className="product-figure">
          <img
            className="picture-icon"
            src={IconAddCart}
            alt="Add card product"
          />
        </figure>
      </div>
    </div>
  )
}

export default ItemProduct