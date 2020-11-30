import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { Context } from './Context';
import { useContext, useEffect } from 'react';

export default function Layout({ children }) {
  const { darkTheme } = useContext(Context);
  useEffect(() => {
    darkTheme
      ? (document.body.className = 'dark')
      : (document.body.className = 'light');
  });
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
