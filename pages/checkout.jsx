import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePaystackPayment } from 'react-paystack';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const total = products.reduce((total, prod) => total + prod.totalPrice, 0);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      phone: yup
        .string()
        .phone('Must be valid phone number')
        .required('Phone is required'),
    }),
  });
  const config = {
    reference: new Date().getTime().toString(),
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    amount: total * 100,
    email: formik.values.email,
    name: formik.values.name,
    phone: formik.values.phone,
  };
  console.log('config', config);
  const initializePayment = usePaystackPayment(config);
  const totalAmount = products?.reduce(
    (total, product) => total + product.price,
    0
  );
  // Configure paystack

  return (
    <main className='container mx-auto font-raleway overflow-hidden'>
      <h1 className='text-[32px] font-[600]'>CHECHOUT</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Object.values(formik.errors).length === 0 &&
            initializePayment(
              () => console.log('success'),
              () => console.log('failure')
            );
        }}
        className='w-[80%] h-[80%] p-[16px] flex flex-col gap-y-4 border-t-[1px] mt-[2rem]'
      >
        <div>
          <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            className='w-[40%] h-[56px] border-2 px-4 rounded-[20px] text-[18px] font-[500]'
          />
          {formik.errors.name && (
            <p className='text-red-600 mt-2'>{formik.errors.name}</p>
          )}
        </div>
        <div>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className='w-[40%] h-[56px] border-2 px-4 rounded-[20px] text-[18px] font-[500]'
          />
          {formik.errors.email && (
            <p className='text-red-600 mt-2'>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <input
            type='text'
            name='phone'
            placeholder='Phone'
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            className='w-[40%] h-[56px] border-2 px-4 rounded-[20px] text-[18px] font-[500]'
          />
          {formik.errors.phone && (
            <p className='text-red-600 mt-2'>{formik.errors.phone}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-[40%] rounded-[20px] h-[56px] bg-primary text-white'
        >
          CHECKOUT
        </button>
      </form>
    </main>
  );
};
export default Checkout;
