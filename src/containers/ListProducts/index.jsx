import { useEffect, useState } from "react"
/* Service */
import { getAllProducts } from "services/getAllProducts"
/* Components */
import ItemProduct from "components/ItemProduct"
/* Styles & Sources */
import styles from "./styles.module.css"
import { IconSearch } from "../../components/Icons/IconSearch"

function ListProducts() {
  const [products, setProucts] = useState([])

  useEffect(function () {
    getAllProducts().then((product) => {
      setProucts(product)
    })
  }, [])

  return (
    <>
      <div className={styles.isHeaderSearch}>
        <form className="">
          <div className={styles.isSearchBox}>
            <button className={styles.isBtnSearch}>
              <IconSearch />
            </button>
            <input className={styles.isInputSearch} type="text" placeholder="Search product" />
          </div>
        </form>
        <div className={styles.isHeaderLinks}>
          <nav>
            <ul className={styles.isNav}>
              <li className={styles.isNavItem}><a className={styles.isItemLink} href="#">All</a></li>
              <li className={styles.isNavItem}><a className={styles.isItemLink} href="#">Clothes</a></li>
              <li className={styles.isNavItem}><a className={styles.isItemLink} href="#">Electronics</a></li>
              <li className={styles.isNavItem}><a className={styles.isItemLink} href="#">Furniture</a></li>
              <li className={styles.isNavItem}><a className={styles.isItemLink} href="#">Toys</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.isHeaderOrders}>
          <p className={styles.isOrdersTitle}>Order:</p>
          <div className={styles.isOrdersOptions}>
            <p className={styles.isOptionSelec}>Most recent</p>
          </div>
        </div>
      </div>
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
    </>
  )
}

export default ListProducts
