import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Navbar.css"

const Navbar = ({ onCartClick }) => {
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
      </div>
    </nav>
  )
}

export default Navbar