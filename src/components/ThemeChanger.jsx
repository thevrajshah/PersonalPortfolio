import React, { useState } from "react";

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(true);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <a
      onClick={handleChange}
      className={themeState ? "fa fa-moon-o" : "fa fa-sun-o"}
      id='themeChanger'
    />
  );
};

export default ThemeChanger;
