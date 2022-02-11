import React from "react"
import "./styles.css"

function ResumeProduct() {
  return (
    <aside className="detail-product">
      <span className="icon-close icon"></span>
      <figure className="detail-product-picture">
        <img
          className="picture-img"
          src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?cs=srgb&dl=pexels-designecologist-1005058.jpg&fm=jpg"
          alt="Product detail"
        />
      </figure>
      <div className="dots-list">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="detail-product-detail">
        <div className="product-resume-info">
          <p className="product-resume--price">$ 120,00</p>
          <p className="product-resume--name">Retro refrigerator</p>
          <p className="product-resume--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            quam nobis velit, maxime perspiciatis eos dolorem nihil alias
            quod cupiditate iure optio ut provident commodi sapiente.
            Debitis sequi nam dolores.
          </p>
        </div>
        <button className="product-add-cart-btn primary-btn">
          <span className="icon"></span>
          Add to cart
        </button>
      </div>
    </aside>
  )
}

export default ResumeProduct