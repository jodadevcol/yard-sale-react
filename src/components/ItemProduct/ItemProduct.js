import "./ItemProduct.css"

function ItemProduct() {
  const sourceImg = `https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6782479.jpg&fm=jpg`

  return (
    <div className="card-product">
      <img
        className="preview-product"
        src={sourceImg}
        alt="Product"
      />
      <div className="card-product-info">
        <div className="product-info">
          <p className="product-precie">$ 120,00</p>
          <p className="product-name">Decoration</p>
        </div>
        <figure className="product-figure">
          <img
            className="picture-icon"
            src="./assets/images/icons/bt_add_to_cart.svg"
            alt="Add card product"
          />
        </figure>
      </div>
    </div>
  )
}

export default ItemProduct