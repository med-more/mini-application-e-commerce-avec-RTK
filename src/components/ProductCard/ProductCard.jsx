import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartSlice"
import { addToWishlist, removeFromWishlist } from "../../redux/wishlistSlice"
import "./ProductCard.css"

const ProductCard = ({ product, isInWishlist }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () =>{
    dispatch(addToCart(product))
  }

  const handleWishlist = () =>{
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id))
    } else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard