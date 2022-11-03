import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalProducts: 3,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
