import React, { useState, useEffect } from "react";

const themeType = {
  dark: "dark",
  light: "light",
};

const ThemeChanger = () => {
  const [mode, setMode] = useState(() => {
    // check for Gatsby and NodeJS
    if (typeof window !== "undefined") {
      const val = localStorage.getItem("theme");
      return val ? JSON.parse(val) : themeType.light;
    }
    return themeType.light;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(mode));
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === themeType.light ? themeType.dark : themeType.light);
  };
  return (
  
      <a
        onClick={toggleMode}
        onKeyDown={toggleMode}
        className={mode === themeType.light ? "fa fa-moon-o" : "fa fa-sun-o"}
        id='themeChanger'
      />
    
  );
};
export default ThemeChanger;
