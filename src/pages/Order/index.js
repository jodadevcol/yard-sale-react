import ListOrder from "containers/ListOrder/"
import "./styles.css"

function Order() {
  return (
    <section className="my-order-main">
      <div className="my-order-container">
        <h1 className="my-order-title">My order</h1>
        <div className="resume-order">
          <p className="resume-info">
            <span>04.25.2021</span>
            <span>6 articles</span>
          </p>
          <p className="resume-price">$ 560.00</p>
        </div>
        <ListOrder />
      </div>
    </section>
  )
}

export default Order
