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
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />

        <button className={`wishlist-btn ${isInWishlist ? "active" : ""}`} onClick={handleWishlist}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isInWishlist ? "currentColor" : "none"}
            stroke="currentColor"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductCard