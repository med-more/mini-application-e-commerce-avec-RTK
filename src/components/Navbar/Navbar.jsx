import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Navbar.css"

const Navbar = ({ onCartClick }) => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  return (
    <div>Navbar</div>
  )
}

export default Navbar