import React, { useEffect, useState } from "react"
import ItemProduct from "@components/ItemProduct"
import "./styles.css"

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
          products.map((dataProduct) => (
            <ItemProduct
              key={`list-${dataProduct.id}-products`}
              dataProduct={dataProduct}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ListProducts