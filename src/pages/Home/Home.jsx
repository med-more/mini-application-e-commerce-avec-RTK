import { useSelector } from "react-redux"
import "./Home.css"

const Home = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)

  const featuredProducts = products.slice(0, 6)
  return (
    <div>Home</div>
  )
}

export default Home