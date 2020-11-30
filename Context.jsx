import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const Provider = (props) => {
  const [drawer, setDrawer] = useState(0);
  const [darkTheme, setDarkTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('darkTheme');
      return val ? JSON.parse(val) : true;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    }
  }, [darkTheme]);

  return (
    <Context.Provider value={{ drawer, darkTheme, setDrawer, setDarkTheme }}>
      {props.children}
    </Context.Provider>
  );
};
