import { useSelector } from "react-redux"
import ProductCard from "../../components/ProductCard"
import { product } from "../../data/products"
import "./Catalogue.css"

const Catalogue = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)
  return (
    <div>Catalogue</div>
  )
}

export default Catalogue