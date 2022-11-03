import { Provider } from 'react-redux';
import { useState } from 'react';
import '../styles/globals.css';
import { Nav, CartModal } from '../components';
import store from '../store';

function MyApp({ Component, pageProps }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Provider store={store}>
      <Nav setOpenModal={setOpenModal} />

      <CartModal openModal={openModal} setOpenModal={setOpenModal} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
