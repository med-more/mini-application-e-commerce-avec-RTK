import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice"
import "./CartSidebar.css"

const CartSidebar = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0);
  return (
    <>

      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}


      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

        <div className="cart-header">
          <h2>Mon Panier</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" />
            </svg>
          </button>
        </div>


        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Votre panier est vide</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />

                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">{item.price} DH</p>


                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>


                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 6h18M8 6V4h8v2m-8 0v12M8 18h8M8 18v0m8-12v12m0 0v0" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>


        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">{totalPrice} DH</span>
            </div>
            <button className="checkout-btn">Valider la commande</button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartSidebar