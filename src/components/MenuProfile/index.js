import "./styles.css"

function MenuProfile() {
  return (
    <div className="desktop-menu">
      <ul className="menu-container">
        <li className="item-menu">
          <a href="/">My orders</a>
        </li>
        <li className="item-menu">
          <a href="/">My account</a>
        </li>
        <hr />
        <li className="item-menu">
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuProfile
