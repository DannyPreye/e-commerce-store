import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
// test

const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAllProducts: builder.query({ query: () => '/products' }),
    getProductDetails: builder.query({
      query: ({ id }) => `/product-details/${id}`,
    }),
  }),
});
export default productApi;

export const { useGetAllProductsQuery, useGetProductDetailsQuery } = productApi;
