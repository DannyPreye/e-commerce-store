import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../services/productApi';

const initialState = {
  currency: '$',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload.currency;
    },
  },
});
export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
