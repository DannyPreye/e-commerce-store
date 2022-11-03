import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../store/features/currencySlice';
// Currency Options
const CurrencyOption = ({ title, activeCurrency }) => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={(e) =>
        dispatch(changeCurrency({ currency: e.target.innerText.slice(0, 1) }))
      }
      className={` h-[45px] cursor-pointer grid place-items-center ${
        activeCurrency === title.slice(0, 1) ? 'bg-secondary' : 'bg-white'
      }`}
    >
      {title}
    </span>
  );
};

const CurrencyConverterOpt = () => {
  const activeCurrency = useSelector((state) => state.currency.currency);
  return (
    <div
      className='absolute right-[-2rem] top-[1.7rem] w-[114px] filter drop-shadow-md '
      style={{
        boxShadow: '0px 4px 35px rgba(168, 172, 176, 0.19)',
      }}
    >
      <CurrencyOption title='$ USD' activeCurrency={activeCurrency} />
      <CurrencyOption activeCurrency={activeCurrency} title='&euro; EUR' />
      <CurrencyOption activeCurrency={activeCurrency} title='&yen; YEN' />
    </div>
  );
};
export default CurrencyConverterOpt;
