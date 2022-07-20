import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, PRODUCTS_URL } from "../../constants/global";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(PRODUCTS_URL, {
        headers: { "x-api-key": API_KEY },
      });

      return response.data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    setIsAuthentiocated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectProducts = (state) => state.products.data;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectIsAuthenticated = (state) => state.products.isAuthenticated;

export const { setIsAuthentiocated } = productsSlice.actions;

export default productsSlice.reducer;
