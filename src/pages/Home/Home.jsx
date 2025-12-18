import { useSelector } from "react-redux"
import "./Home.css"

const Home = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)

  const featuredProducts = products.slice(0, 6)
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue sur TechShop</h1>
          <p>Découvrez notre sélection de produits tech de qualité</p>
        </div>
      </section>
    </div>
  )
}

export default Home