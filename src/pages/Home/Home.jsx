import { useSelector } from "react-redux"
import ProductCard from "../../components/ProductCard/ProductCard"
import { products } from "../../data/products"
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

      <section className="featured-section">
        <h2>Produits en Vedette</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              isInWishlist={wishlistItems.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home