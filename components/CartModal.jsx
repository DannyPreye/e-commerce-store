import Link from 'next/link';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const CartModal = ({ openModal, setOpenModal }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  console.log(cartProducts);
  return (
    <div
      onClick={() => setOpenModal(false)}
      className={`fixed flex font-raleway justify-end px-[72px]  z-[100] w-screen h-screen mx-auto top-20 bg-[rgb(57,55,72,0.22)] ${
        openModal ? 'block' : 'hidden'
      } `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-[325px] h-fit bg-white py-[32px] px-[16px] '
      >
        <h3 className='text-[16px] font-[500]'>
          <span className='font-[600]'>My Bag,</span>
          <span> {cartProducts ? cartProducts.length : '0'} items</span>
        </h3>
        <div>
          {cartProducts?.map((product, id) => (
            <CartCard cartItem={product} key={id} />
          ))}
        </div>

        <div className='flex justify-between mt-[43px] text-[16px]'>
          <p className='font-roboto  font-[500]'>Total</p>
          <p className='font-[700]'>
            $
            {cartProducts?.reduce(
              (total, product) => total + Number(product.price),
              0
            )}
          </p>
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
  );
};
export default CartModal;
