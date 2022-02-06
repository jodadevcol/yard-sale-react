import "./Header.css"

function Header() {
  return (
    <nav className="navbar-container">
      <img
        className="nav-mobile"
        src="./assets/images/icons/icon_menu.svg"
        alt="Menu mobile"
      />
      <img
        className="logo"
        src="./assets/images/logos/logo_yard_sale.svg"
        alt="Logo YARD Sale"
      />

      <div className="navbar-items">
        <ul className="navbar-list">
          <li className="navbar-item active">
            <a href="/">All</a>
          </li>
          <li className="navbar-item">
            <a href="/">Clothes</a>
          </li>
          <li className="navbar-item active">
            <a href="/">Elestronics</a>
          </li>
          <li className="navbar-item">
            <a href="/">Furniture</a>
          </li>
          <li className="navbar-item">
            <a href="/">Toys</a>
          </li>
          <li className="navbar-item">
            <a href="/">Others</a>
          </li>
        </ul>
        <ul className="navbar-list account-shopping">
          <li className="navbar-item account-info">
            <a href="/">camilayokoo@gmail.com <span className="arrow-down icon"></span></a>
          </li>
          <li className="navbar-item shopping-cart-nav">
            <img
              src="./assets/images/icons/icon_shopping_cart.svg"
              alt="Shopping Cart"
            />
            <div className="count-items">2</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header