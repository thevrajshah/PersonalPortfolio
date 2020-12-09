import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { Context } from './Context';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { darkTheme } = useContext(Context);
  useEffect(() => {
    darkTheme
      ? (document.body.className = 'dark')
      : (document.body.className = 'light');
  });
  const router = useRouter();
  if (router.pathname === '/resume') {
    return (
      <>
        <NavBar />
        {children}
      </>
    );
  }
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
