import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, ORDERS_URL } from "../../constants/global";

export const placeOrder = createAsyncThunk(
  "cart/placeOrder",
  async ({ cart }, { rejectWithValue }) => {
    try {
      const response = await axios.post(ORDERS_URL, cart, {
        headers: { "x-api-key": API_KEY },
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    placeOrderLoading: false,
    placeOrderError: null,
    placeOrderResult: {},
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
    clearOrderResult: (state, action) => {
      state.placeOrderResult = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state, action) => {
        state.placeOrderLoading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.placeOrderLoading = false;
        state.placeOrderResult = action.payload;
        state.items = [];
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.placeOrderLoading = false;
        state.placeOrderError = action.payload;
      });
  },
});

export const selectCart = (state) => state.cart.items;
export const selectCartPlaceOrderLoading = (state) =>
  state.cart.placeOrderLoading;
export const selectCartPlaceOrderResult = (state) =>
  state.cart.placeOrderResult;
export const selectCartPlaceOrderError = (state) => state.cart.placeOrderError;
export const {
  clearCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearOrderResult,
} = cartSlice.actions;

export default cartSlice.reducer;
