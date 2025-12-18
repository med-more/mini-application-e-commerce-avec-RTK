import { useSelector } from "react-redux"
import ProductCard from "../../components/ProductCard"
import { products } from "../../data/products"
import "./Catalogue.css"

const Catalogue = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)
  return (
    <div className="catalogue-page">
      <div className="catalogue-container">
        <h1>Notre Catalogue</h1>
        <p className="catalogue-subtitle">Explorez tous nos produits ({products.length} articles)</p>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInWishlist={wishlistItems.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalogue