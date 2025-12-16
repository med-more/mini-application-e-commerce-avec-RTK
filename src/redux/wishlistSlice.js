import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload
      const exists = state.items.find((item) => item.id === product.id)

      if (!exists) {
        state.items.push(product)
      }
    },
  }
})