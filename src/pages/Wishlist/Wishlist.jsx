import { useSelector, useDispatch } from "react-redux"
import { removeFromWishlist } from "../../redux/wishlistSlice"
import { addToCart } from "../../redux/cartSlice"
import "./Wishlist.css"
const Wishlist = () => {

  const wishlistItems = useSelector((state) => state.Wishlist.items)
  const dispatch = useDispatch();

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
  };

  const handleRemove = (productId) =>{
    dispatch(removeFromWishlist(productId));
  };
  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <h1>Mes Favoris</h1>
        <p className="wishlist-subtitle">
          {wishlistItems.length} produit{wishlistItems.length > 1 ? "s" : ""} dans vos favoris
        </p>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                strokeWidth="2"
              />
            </svg>
            <h2>Votre liste de favoris est vide</h2>
            <p>Ajoutez des produits à vos favoris pour les retrouver ici</p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((product) => (
              <div key={product.id} className="wishlist-item">
                <div className="wishlist-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                </div>

                <div className="wishlist-info">
                  <h3>{product.name}</h3>
                  <p className="wishlist-price">{product.price} DH</p>
                  <p className="wishlist-description">{product.description}</p>

                  <div className="wishlist-actions">
                    <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>
                      Ajouter au panier
                    </button>
                    <button className="remove-wishlist-btn" onClick={() => handleRemove(product.id)}>
                      Retirer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Wishlist