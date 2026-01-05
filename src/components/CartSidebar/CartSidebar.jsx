import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice"
import "./CartSidebar.css"

const CartSidebar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0);
  return (
    <div>CartSidebar</div>
  )
}

export default CartSidebar