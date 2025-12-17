import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartSlice"
import { addToWishlist, removeFromWishlist } from "../../redux/wishlistSlice"
import "./ProductCard.css"

const ProductCard = () => {
  const dispatch = useDispatch();
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard