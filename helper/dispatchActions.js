// This helper function controls all the logic for dispatching action in the redux

import { useDispatch } from 'react-redux';
import {
  incrementProductCount,
  decrementProductCount,
  addToCart,
  addPrice,
  addToAmount,
  addToCount,
} from '../store/features/cartSlice';

const DispatchActions = () => {
  const dispatch = useDispatch();

  const add_to_cart = (item) => dispatch(addToCart(item));
  const increment_cart_product_count = (item) =>
    dispatch(incrementProductCount(item));
  const decrement_cart_product_count = (item) =>
    dispatch(decrementProductCount(item));
  const add_price = () => dispatch(addPrice());
  const add_total_amount = () => dispatch(addToAmount());
  const add_to_count = () => dispatch(addToCount());

  return {
    add_to_cart,
    increment_cart_product_count,
    decrement_cart_product_count,
    add_price,
    add_total_amount,
    add_to_count,
  };
};
export default DispatchActions;
