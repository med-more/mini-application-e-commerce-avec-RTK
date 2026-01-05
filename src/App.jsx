import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Navbar from "./components/Navbar/Navbar"
import CartSidebar from "./components/CartSidebar/CartSidebar"
import Home from "./pages/Home/Home"
import Catalogue from "./pages/Catalogue/Catalogue"
import Wishlist from "./pages/Wishlist/Wishlist"
import "./App.css"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar onCartClick={() => setIsCartOpen(true)} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>

          <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
