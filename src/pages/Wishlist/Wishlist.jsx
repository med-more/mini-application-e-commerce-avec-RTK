import { useSelector, useDispatch } from "react-redux"
import { removeFromWishlist } from "../../redux/wishlistSlice"
import { addToCart } from "../../redux/cartSlice"
import "./Wishlist.css"
const Wishlist = () => {

  const wishListItems = useSelector((state) => state.Wishlist.items)
  const dispatch = useDispatch();
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist