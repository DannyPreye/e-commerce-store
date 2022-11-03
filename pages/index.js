import { useSelector } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import { Products } from '../components';
import { useGetAllProductsQuery } from '../store/services/productApi';

export default function Home() {
  const {
    data: products,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetAllProductsQuery();

  return (
    <main className='container mx-auto font-raleway'>
      <h1 className='text-[42px] font-[400] text-textColor my-[2rem]'>
        Category name
      </h1>
      {isSuccess && <Products products={products} />}
    </main>
  );
}
