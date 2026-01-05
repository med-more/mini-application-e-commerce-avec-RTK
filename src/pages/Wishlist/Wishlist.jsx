import { useSelector, useDispatch } from "react-redux"
import { removeFromWishlist } from "../../redux/wishlistSlice"
import { addToCart } from "../../redux/cartSlice"
import "./Wishlist.css"
const Wishlist = () => {

  const wishListItems = useSelector((state) => state.Wishlist.items)
  const dispatch = useDispatch();

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
  };

  const handleRemove = (productId) =>{
    dispatch(removeFromWishlist(productId));
  };
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist