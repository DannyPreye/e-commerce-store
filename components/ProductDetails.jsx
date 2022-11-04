import { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/features/cartSlice';

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [productSize, setProductSize] = useState(product?.sizes[0]);
  const [productColor, setProductColor] = useState(product?.colors[0]);
  const currency = useSelector((state) => state.currency.currency);
  const productCount = 1;
  const cartProducts = {
    title: product?.title,
    img: product?.img,
    totalPrice: product?.price * productCount,
    count: 1,
    colors: product?.colors,
    sizes: product?.sizes,
    id: product?.id,
  };

  return (
    <div className='font-raleway flex pb-10 '>
      <div className='flex gap-x-[14px]'>
        {/* other product images is displayed here */}
        <div className='flex flex-col gap-y-[40px] cursor-pointer '>
          {product?.other_img.map((img, id) => (
            <div key={id} className='relative w-[79px] h-[80px]'>
              <Image src={`/${img}`} alt={product?.title} layout='fill' />
            </div>
          ))}
        </div>
      </div>
      {/* Main Product Image */}
      <div className='w-full pt-10 px-2 ml-4'>
        <div className='relative w-full max-w-[610px] h-[511px]'>
          <Image src={`/${product?.img}`} alt={product?.title} layout='fill' />
        </div>
      </div>

      {/* Product Information */}
      <div className='ml-10'>
        {/* Product Title */}
        <div className='flex flex-col w-[292px]'>
          <span className='font-[600] text-[30px]'>
            {product?.title.split(' ')[0]}
          </span>
          <span className='text-[30px]'>
            {product?.title.split(' ').slice(1).join(' ')}
          </span>
        </div>
        {/* Sizes */}
        <div className='mt-[43px] '>
          <p className='font-roboto-condensed font-[700] text-[18px]'>Size:</p>
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

        {/* Price */}
        <div className='mt-[36px]'>
          <h2 className='font-roboto-condensed font-[700] text-[18px]'>
            Price:
          </h2>
          <p className='font-[700] text-[24px] '>
            <span>{currency}</span>
            {Number(product?.price).toFixed(2)}
          </p>
        </div>

        {/* Add to cart Button */}
        <button
          onClick={() => dispatch(addToCart(cartProducts))}
          className='mt-[20px] w-full h-[52px] bg-primary text-white font-raleway font-[600] text-center '
        >
          ADD TO CART
        </button>

        {/* Product description */}
        <p className='w-full text-justify font-[400] text-[16px] mt-[40px]'>
          {product?.description}
        </p>
      </div>
    </div>
  );
};
export default ProductDetails;
