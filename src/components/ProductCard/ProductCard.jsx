import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartSlice"
import { addToWishlist, removeFromWishlist } from "../../redux/wishlistSlice"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () =>{
    dispatch(addToCart(product))
  }
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard