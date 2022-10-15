import { configureStore, createSlice } from '@reduxjs/toolkit';

const data = createSlice({
  name: 'store',
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addProducts, addToCart } = data.actions;

export const store = configureStore({
  reducer: {
    store: data.reducer,
  },
});
