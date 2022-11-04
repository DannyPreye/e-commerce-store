// This helper component controls the logic of getting products from redux tk
import { useSelector } from 'react-redux';
import { useGetAllProductsQuery } from '../store/services/productApi';

const GetProducts = () => {
  const cart = useSelector((state) => state.cart.products);
  const total_cart_count = useSelector((state) => state.cart.total_prod_count);
  const total_cart_price = useSelector((state) => state.cart.total_amount);
  const currency = useSelector((state) => state.currency.currency);

  const {
    data: products,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetAllProductsQuery();

  return {
    products: { products, isLoading, isError, error, isSuccess },
    cart,
    currency,
    total_cart_price,
    total_cart_count,
  };
};
export default GetProducts;
