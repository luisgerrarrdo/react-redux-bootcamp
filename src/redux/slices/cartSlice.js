import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;

      const itemInCart = state.items.find((item) => item.id === newProduct.id);

      if (!itemInCart) {
        state.items.push({ ...newProduct, quantity: 1 });
      } else {
        itemInCart.quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;

      const itemInCart = state.items.find((item) => item.id === productId);

      if (itemInCart) {
        if (newQuantity > 0) {
          itemInCart.quantity = newQuantity;
        } else {
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }
    },
  },
});

export const selectCart = (state) => state.cart.items;
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
