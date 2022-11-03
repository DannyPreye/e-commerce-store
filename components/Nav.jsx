import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import NavLink from './NavLinks';
import CurrencyConverterOpt from './CurrencyConverterOpt';

// Nav Component
const Nav = ({ setOpenModal }) => {
  const [activeLink, setActiveLink] = useState('');

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const activeCurrency = useSelector((state) => state.currency.currency);

  return (
    <header className='flex justify-between items-center bg-white sticky h-[80px] container mx-auto font-raleway '>
      <div className='flex  relative gap-x-[32px]'>
        <NavLink
          title={'Women'}
          link='/'
          setActiveLink={setActiveLink}
          activeLink={activeLink}
        />
        <NavLink
          title={'Men'}
          link='/'
          setActiveLink={setActiveLink}
          activeLink={activeLink}
        />
        <NavLink
          title={'Kids'}
          link='/'
          setActiveLink={setActiveLink}
          activeLink={activeLink}
        />
      </div>

      {/* Logo container */}
      <Link href='/'>
        <div className='relative w-[41px] h-[41px] grid place-items-center'>
          <Image src='/a-logo.png' layout='fill' alt='e-commerce' />
        </div>
      </Link>

      <div className='flex items-center justify-between gap-x-[22px] relative'>
        {/* Currency Converter */}
        <div
          className='flex items-center gap-x-2 cursor-pointer'
          onClick={() => setDropDownOpen((prev) => !prev)}
        >
          <span className='text-[18px] font-[500]'>{activeCurrency}</span>
          <div className='relative w-[8px] h-[4px] '>
            {dropDownOpen ? (
              <Image src={'/closeDrop.png'} layout='fill' alt='' />
            ) : (
              <Image src={'/dropdown.png'} layout='fill' alt='' />
            )}
          </div>

          {dropDownOpen && (
            <CurrencyConverterOpt activeCurrency={activeCurrency} />
          )}
        </div>

        {/*Cart Logo  */}

        <div
          className='relative cursor-pointer'
          onClick={() => setOpenModal((prev) => !prev)}
        >
          <div className='relative w-[20px] h-[20px] z-10'>
            <Image src={'/emptyCart.png'} layout='fill' alt='empty cart' />
          </div>
          {cartItems.products.length > 0 ? (
            <span className='absolute font-roboto font-[700] text-[14px] right-[-.6rem] top-[-.8rem] w-[22px] h-[22px] bg-textColor flex items-center justify-center rounded-full text-white'>
              {cartItems.products.length}
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
};
export default Nav;
