import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const ModalContent = ({ message, setClose }) => (
  <div className=' fixed top-0 left-0 w-screen h-screen flex justify-center '>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg grid   lg:w-[50%] lg:h-[50%] w-full h-full backdrop-filter inset-0 pr-[20px] overflow-auto bg-black bg-opacity-70 backdrop-blur-sm '>
      <div className='w-full h-full relative py-3 px-6 grid place-items-center'>
        <p
          onClick={(e) => {
            setClose(false);
          }}
          className='font-[400] text-slate-50 cursor-pointer font-raleway  text-[20px] absolute top-[1rem] right-[1rem]'
        >
          X
        </p>
        <p className='font-raleway text-lg text-slate-100'>{message}</p>
      </div>
    </div>
  </div>
);

const PaymentModal = ({ show, setClose, message }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    show && setIsBrowser(true);
  }, [show]);

  show ? <ModalContent message={message} setClose={setClose} /> : null;
  if (show) {
    return ReactDOM.createPortal(
      <ModalContent message={message} setClose={setClose} />,
      document.getElementById('modal')
    );
  } else {
    return null;
  }
};

export default PaymentModal;
