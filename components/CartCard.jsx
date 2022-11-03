import { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const CartCard = ({ cartItem }) => {
  const currency = useSelector((state) => state.currency.currency);
  const [productSize, setProductSize] = useState('');
  const [productColor, setProductColor] = useState('');
  const [totalProduct, setTotalProduct] = useState(1);

  return (
    <div className='flex h-[190px] w-[121px] mt-[32px] gap-x-4'>
      <div>
        <p className='flex flex-col text-[16px] font-[300] '>
          <span className=''>{cartItem?.title.split(' ')[0]}</span>
          <span className=''>
            {cartItem?.title.split(' ').slice(1).join(' ')}
          </span>
        </p>
        <p className='font-[500] text-[16px] mt-[4px] '>
          {currency}
          {cartItem?.price}
        </p>

        {/* Sizes */}
        <div className='mt-[8px]'>
          <p>Size</p>
          <div className='flex gap-x-[8px]'>
            {cartItem?.sizes.map((size, id) => (
              <div
                key={id}
                onClick={(e) => setProductSize(e.target.innerText)}
                className={`${
                  productSize === size
                    ? 'bg-textColor text-white'
                    : 'bg-white text-textColor'
                } w-[24px] h-[24px] text-[14px] font-[400] border-[1px] border-textColor grid place-items-center  font-source cursor-pointer`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        {/* Colors */}
        <div>
          <p className='font-raleway font-[400] text-[14px] mt-[8px]'>Color:</p>
          <div className='flex gap-x-[8px]'>
            {cartItem?.colors.map((color, id) => (
              <div
                key={id}
                onClick={(e) => setProductColor(color)}
                className={`w-[20px] h-[20px] p-[2px] cursor-pointer ${
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
      <div className='flex gap-x-2'>
        <div className='flex flex-col justify-between items-center h-full'>
          <button
            onClick={() => setTotalProduct((prev) => prev + 1)}
            className='w-[24px] hover:bg-textColor hover:text-white h-[24px] border-textColor border-[1px] text-center'
          >
            +
          </button>
          <p>{totalProduct}</p>
          <button
            onClick={() => setTotalProduct((prev) => prev && prev - 1)}
            className='w-[24px] hover:bg-textColor hover:text-white h-[24px]  border-textColor border-[1px] text-center'
          >
            -
          </button>
        </div>
        <div className='relative w-[121px] h-[190px]'>
          <Image
            src={`/${cartItem.img}`}
            layout='fill'
            alt=''
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};
export default CartCard;
