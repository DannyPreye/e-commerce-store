import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useGetProductDetailsQuery } from '../../store/services/productApi';
import { ProductDetails } from '../../components';

const productDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isSuccess } = useGetProductDetailsQuery({ id }); //Fetch the data from the rtk api

  return (
    <main className='container mx-auto mt-[72px]'>
      <Head>
        <meta name='description' content={data?.description} />
        <title>{data?.title}</title>
      </Head>
      {/* Other pictures of the products */}
      {isSuccess && <ProductDetails product={data} />}
    </main>
  );
};

export default productDetail;
