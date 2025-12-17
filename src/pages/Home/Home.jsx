import { useSelector } from "react-redux"
import "./Home.css"

const Home = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)
  return (
    <div>Home</div>
  )
}

export default Home