import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { Context } from './Context';
import { useContext, useEffect } from 'react';

export default function Layout({ children }) {
  const { theme } = useContext(Context);
  useEffect(() => {
    theme
      ? (document.body.className = 'light')
      : (document.body.className = 'dark');
  });
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
