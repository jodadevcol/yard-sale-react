import React from "react"
import ListOrders from "@containers/ListOrders"
import "./styles.css"

function Ordes() {
  return (
    <section className="my-orders-main">
      <div className="my-orders-container">
        <h1 className="my-order-title">My orders</h1>

        <ListOrders />
      </div>
    </section>
  )
}

export default Ordes