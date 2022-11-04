import { Provider } from 'react-redux';
import '../styles/globals.css';
import Head from 'next/head';
import { Nav, CartModal } from '../components';
import { Modal } from '../helper';
import store from '../store';

function MyApp({ Component, pageProps }) {
  const { isOpen, setIsOpen } = Modal();
  return (
    <Provider store={store}>
      <Head>
        <title>E-commerce</title>
        <link rel='icon' href='/a-logo.png' />
        <meta name='description' content='E-commerce website' />
      </Head>
      <Nav setOpenModal={setIsOpen} />
      <CartModal openModal={isOpen} setOpenModal={setIsOpen} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
