import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ProductCard = ({ img, title, price, outOfStock, id }) => {
  const currency = useSelector((state) => state.currency.currency);
  return (
    <Link href={`/detail/${id}`}>
      <div
        className={`w-full max-w-[386px] h-[444px] p-[16px] font-raleway overflow-hidden ${
          outOfStock && 'opacity-50'
        }`}
      >
        <div className='w-[354px] h-[330px] relative '>
          <Image src={`/${img}`} alt={title} layout='fill' />
          {outOfStock && (
            <p className='absolute flex w-[60%] gap-x-3 top-[50%] text-center left-[50%] -translate-x-1/2 -translate-y-1/2 font-[400] text-[24px] '>
              OUT OF STOCK
            </p>
          )}
        </div>

        <div className='flex flex-col text-textColor  text-[18px]'>
          <span className='font-[300] '>{title}</span>
          <span className='font-[500]'>
            {currency}
            {Number(price).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
