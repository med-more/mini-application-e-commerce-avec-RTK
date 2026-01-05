import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Navbar.css"

function Navbar({ onCartClick }) {
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TechShop
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
          <Link to="/catalogue" className="navbar-link">
            Catalogue
          </Link>
          <Link to="/wishlist" className="navbar-link">
            Favoris
          </Link>
        </div>

        <button className="cart-button" onClick={onCartClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 2L7 6H3L6 18H18L21 6H17L15 2H9Z" strokeWidth="2" />
          </svg>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
