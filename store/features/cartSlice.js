import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total_prod_count: 0,
  total_amount: 0,
  tax: 0.21,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const ids = state.products.filter((elem) => elem.id);
      if (state.products.every((elem) => elem.id != action.payload.id))
        state.products = [...new Set([...state.products, action.payload])];
        
    },
    incrementProductCount: (state, action) => {
      {
        state.products.find((el) => el.id === action.payload).count += 1;
      }
    },
    decrementProductCount: (state, action) => {
      if (state.products.find((el) => el.id === action.payload).count > 1)
        state.products.find((el) => el.id === action.payload).count -= 1;
    },
    addPrice: (state, action) => {
      state.products.forEach(
        (elem) => (elem.price = elem.totalPrice * elem.count)
      );
    },
    addToAmount: (state, action) => {
      state.total_amount = state.products.reduce(
        (total, prod) => total + prod.totalPrice,
        0
      );
    },
    addToCount: (state, action) => {
      state.total_prod_count = state.products.reduce(
        (total, prod) => total + prod.count,
        0
      );
    },
  },
});
export const {
  addToCart,
  addToAmount,
  addToCount,
  decrementProductCount,
  incrementProductCount,
  addPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
