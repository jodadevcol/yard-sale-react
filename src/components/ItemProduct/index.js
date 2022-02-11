import React, { useContext } from "react"
import AppContext from "@contexts/AppContext"
import "./styles.css"
import IconAddCart from '@icons/bt_add_to_cart.svg'
/* const sourceImg = `https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6782479.jpg&fm=jpg` */

function ItemProduct({ dataProduct }) {
  const { addToCart } = useContext(AppContext)
  const handleClick = (product) => {
    addToCart(product)
  }

  return (
    <div className="card-product">
      <img
        className="preview-product"
        src={dataProduct.images[0]}
        alt={dataProduct.title}
      />
      <div className="card-product-info">
        <div className="product-info">
          <p className="product-precie">$ {dataProduct.price}</p>
          <p className="product-name">{dataProduct.title}</p>
        </div>
        <figure
          className="product-figure"
          onClick={() => handleClick(dataProduct)}
        >
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