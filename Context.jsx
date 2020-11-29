import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const Provider = (props) => {
  const [drawer, setDrawer] = useState(0);
  const [theme, setTheme] = useState(0);
  /* => {
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('theme');
      return val ? JSON.parse(val) : 1;
    }
    return 0;
  }); */

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('theme', JSON.stringify(theme));
  //   }
  // }, [theme]);

  console.log(theme);
  return (
    <Context.Provider value={{ drawer, theme, setDrawer, setTheme }}>
      {props.children}
    </Context.Provider>
  );
};
