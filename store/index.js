import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import cartReducer, { addToAmount, addToCount } from './features/cartSlice';
import currencyReducer from './features/currencySlice';
import { productApi } from './services/productApi';

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    currency: currencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
setupListeners(store.dispatch);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addToAmount());
store.dispatch(addToCount());
export default store;
