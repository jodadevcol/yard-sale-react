import React, { useEffect, useState } from "react"
import ItemProduct from "../../components/ItemProduct/ItemProduct"
import "./ListProducts.css"

const URL_API = `https://api.escuelajs.co/api/v1/products`

function ListProducts() {
  const [products, setProucts] = useState([])

  useEffect(
    function () {
      fetch(URL_API)
        .then(response => response.json())
        .then(data => {
          const { ArrayProducts = [] } = data

          if (Array.isArray(ArrayProducts)) {
            setProucts(data)
          }
          return []
        })
    },
    []
  )

  return (
    <section className="products-container">
      <div className="cards-products-container">
        {
          /* console.log(typeof products) */
          products.map(({ id, title, price, images }) => (
            <ItemProduct
              key={id}
              title={title}
              price={price}
              images={images[0]}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ListProducts