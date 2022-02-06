import ItemProduct from "../../components/ItemProduct/ItemProduct"
import "./ListProducts.css"

function ListProducts() {
  return (
    <section className="products-container">
      <div className="cards-products-container">
        <ItemProduct />
      </div>
    </section>
  )
}

export default ListProducts