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
      state.userList.push(action.payload);
      const checkIfInList = state.userList.filter(
        (item) => item.id === action.payload.id
      );
      if (checkIfInList.length > 1) {
        state.userList.pop();
      }
    },
  },
});

export const { addProducts, addToCart } = data.actions;

export const store = configureStore({
  reducer: {
    store: data.reducer,
  },
});
