import { useEffect, useState } from "react"
/* Service */
import { getAllProducts } from "services/getAllProducts"
/* Components */
import ItemProduct from "components/ItemProduct"
/* Styles & Sources */
import styles from "./styles.module.css"

function ListProducts() {
  const [products, setProucts] = useState([])

  useEffect(function () {
    getAllProducts().then((product) => {
      setProucts(product)
    })
  }, [])

  return (
    <div className={styles.isCardsProductsContainer}>
      {products.map(({ id, title, price, image }) => (
        <ItemProduct
          key={`Product-02${id}`}
          id={id}
          title={title}
          price={price}
          image={image}
        />
      ))}
    </div>
  )
}

export default ListProducts
