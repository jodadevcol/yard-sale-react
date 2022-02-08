import React, { useEffect, useState } from "react"
import ItemProduct from "../../components/ItemProduct/ItemProduct"
import "./ListProducts.css"

const URL_API = `https://api.escuelajs.co/api/v1/products`

function ListProducts() {
  const [products, setProucts] = useState()

  const responsAPI = dataAPI => {
    const { data = [] } = dataAPI
    return Array.isArray(data)
      ? console.log(data)
      : console.log("Vacio")
  }

  const fetchAPI = () => {
    fetch(URL_API)
      .then(response => response.json())
      .then(responsAPI)
  }

  useEffect(() => {
    fetchAPI()
  })

  return (
    <section className="products-container">
      <div className="cards-products-container">
        {
          /* products.map(product => (
            <ItemProduct />
          )) */
        }
      </div>
    </section>
  )
}

export default ListProducts