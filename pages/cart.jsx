import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { DispatchActions } from '../helper';

const cart = () => {
  const {
    increment_cart_product_count,
    decrement_cart_product_count,
    add_price,
    add_total_amount,
    add_to_count,
  } = DispatchActions();
  const products = useSelector((state) => state.cart.products);
  const currency = useSelector((state) => state.currency.currency);
  const [productSize, setProductSize] = useState('');
  const [productColor, setProductColor] = useState('');
  const [totalProduct, setTotalProduct] = useState(0);
  const totalPrice = products?.reduce(
    (total, product) => total + Number(product.totalPrice),
    0
  );
  const tax = totalPrice * 0.21;

  return (
    <main className='font-raleway container mx-auto pb-8 '>
      <h1 className='font-[600] text-[32px] '>CART</h1>
      <div className='mt-[55px] '>
        {products?.map((product, id) => (
          <div className=' flex justify-between  border-t-[1px] py-[24px]'>
            <div>
              {/* Product Name */}
              <div>
                <h3 className='flex flex-col text-[30px]'>
                  <span className='font-[600] '>
                    {product?.title.split(' ')[0]}
                  </span>
                  <span className='font-[400]'>
                    {product?.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
              </div>
              {/* Price */}
              <p className='font-[700] text-[24px] mt-[20px]'>
                {currency}
                {product?.totalPrice * product?.count}
              </p>

              {/* Sizes */}
              <div className='mt-[20px] '>
                <p className='font-roboto-condensed font-[700] text-[18px]'>
                  Size:
                </p>
                <div className='flex gap-x-[14px]'>
                  {product?.sizes.map((size, id) => (
                    <div
                      key={id}
                      onClick={(e) => setProductSize(e.target.innerText)}
                      className={`${
                        productSize === size
                          ? 'bg-textColor text-white'
                          : 'bg-white text-textColor'
                      } w-[63px] h-[45px] border-[1px] border-textColor grid place-items-center text-[16px] font-source cursor-pointer`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className='mt-[24px]'>
                <h2 className='font-roboto-condensed font-[700] text-[18px]'>
                  Color:
                </h2>
                <div className='flex gap-x-[8px]'>
                  {product?.colors.map((color, id) => (
                    <div
                      key={id}
                      onClick={(e) => setProductColor(color)}
                      className={`w-[36px] h-[36px] p-[2px] cursor-pointer ${
                        productColor == color
                          ? 'border-[1px] border-primary'
                          : 'border-none'
                      }`}
                    >
                      <div
                        className='w-full h-full'
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex gap-x-[24px] items-center'>
              <div className='flex flex-col justify-between items-center h-full'>
                <button
                  onClick={() => {
                    increment_cart_product_count(product.id);
                    add_price();
                    add_total_amount();
                    add_to_count();
                  }}
                  className='w-[45px] h-[45px] hover:bg-textColor hover:text-white  border-textColor border-[1px] text-center'
                >
                  +
                </button>
                <p>{product?.count}</p>
                <button
                  onClick={() => {
                    decrement_cart_product_count(product.id);
                    add_price();
                    add_total_amount();
                    add_to_count();
                  }}
                  className='w-[45px] h-[45px] hover:bg-textColor hover:text-white   border-textColor border-[1px] text-center'
                >
                  -
                </button>
              </div>
              <div className='relative w-[200px] h-[288px]'>
                <Image
                  src={`/${product?.img}`}
                  layout='fill'
                  alt=''
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='border-t-[1px]'>
        <div className='py-[16px] grid grid-cols-2  w-[279px] font-raleway text-[24px] font-[400]'>
          <span>Tax 21%:</span>{' '}
          <span className='font-[700]'>
            {currency}
            {products?.reduce(
              (total, product) => total + Number(product.totalPrice),
              0
            ) * 0.21}
          </span>
          <span>Quantity:</span>{' '}
          <span className='font-[700]'>
            {products.reduce((total, elm) => total + elm.count, 0)}
          </span>
          <span>Total:</span>{' '}
          <span className='font-[700]'>
            {' '}
            {currency}
            {totalPrice + tax + totalProduct}
          </span>
        </div>
        <Link href={'/checkout'}>
          <button className='w-[279px] h-[43px] bg-primary text-white text-center font-raleway font-[600]'>
            ORDER
          </button>
        </Link>
      </div>
    </main>
  );
};

export default cart;
