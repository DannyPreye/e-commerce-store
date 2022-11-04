import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GetProducts, DispatchActions } from '../helper';
import CartCard from './CartCard';

const CartModal = ({ openModal, setOpenModal }) => {
  const { add_total_amount } = DispatchActions();
  const { cart, total_cart_count } = GetProducts();
  const [total_cart_price, setTotal_cart_price] = useState(
    cart.reduce((total, prod) => total + prod.price, 0)
  );

  return (
    <div
      onClick={() => setOpenModal(false)}
      className={` w-screen min-h-screen  fixed  z-[1000]   overflow-auto flex justify-end    ${
        openModal ? 'block' : 'hidden'
      } `}
    >
      <div className='w-[100%] h-[89vh]  backdrop-filter inset-0 pr-[20px] overflow-auto bg-black bg-opacity-70 backdrop-blur-sm'>
        <div
          onClick={(e) => e.stopPropagation()}
          className='w-[325px] h-fit bg-white py-[32px] px-[16px]  absolute top-0 right-10 '
        >
          <h3 className='text-[16px] font-[500]'>
            <span className='font-[600]'>My Bag,</span>
            <span> {cart ? cart.length : '0'} items</span>
          </h3>
          <div>
            {cart?.map((product, id) => (
              <CartCard cartItem={product} key={id} />
            ))}
          </div>

          <div className='flex justify-between mt-[43px] text-[16px]'>
            <p className='font-roboto  font-[500]'>Total</p>
            <p className='font-[700]'>${total_cart_price}</p>
          </div>

          <div className='flex gap-x-[12px] mt-[32px]'>
            <Link href='/cart'>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className='w-[140px] h-[43px] text-center border-[1px] font-[600] text-[14px] border-textColor hover:bg-primary hover:text-white hover:border-none'
              >
                VIEW BAG
              </button>
            </Link>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className='w-[140px] h-[43px] text-white bg-primary text-center hover:text-textColor hover:bg-white hover:border-[1px] font-[600] text-[14px] hover:border-textColor'
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartModal;
