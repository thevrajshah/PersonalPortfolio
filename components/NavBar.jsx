import Social from './Social';
import { FaSun, FaMoon, FaRegSun } from 'react-icons/fa';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import NavLink from './NavLink';

export default function NavBar() {
  const { drawer, theme, setDrawer, setTheme } = useContext(Context);

  const [transNav, setTransNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      document.body.style.overflowY = drawer ? 'hidden' : 'scroll';

      if (isTop !== true) {
        setTransNav(true);
      } else {
        setTransNav(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', window);
    };
  });

  return (
    <header className={transNav ? '' : 'transparentNav'}>
      <nav>
        <a
          onClick={() => {
            setTheme(!theme);
          }}
          onKeyDown={() => {
            setTheme(!theme);
          }}
          id="themeChanger"
        >
          {theme ? <FaMoon id="moon" /> : <FaRegSun id="sun" />}
        </a>
        <ul id="desktopNav">
          <NavLink href="/" exact>
            <li>ABOUT</li>
          </NavLink>
          <NavLink href="/Work">
            <li>WORK</li>
          </NavLink>
          <NavLink href="/Connect">
            <li>CONNECT</li>
          </NavLink>
          <NavLink href="/404">
            <li>BLOG</li>
          </NavLink>
        </ul>
        <Social />
        <button id="mobileMenu">
          <i
            className={drawer ? 'hamburger cross' : 'hamburger'}
            onClick={() => setDrawer(!drawer)}
          />
        </button>
      </nav>
      <ul id="mobileNav" style={{ display: drawer ? 'block' : 'none' }}>
        <NavLink href="/" exact>
          <li onClick={() => setDrawer(0)}>ABOUT</li>
        </NavLink>
        <NavLink href="/Work">
          <li onClick={() => setDrawer(0)}>WORK</li>
        </NavLink>
        <NavLink href="/Connect">
          <li onClick={() => setDrawer(0)}>CONNECT</li>
        </NavLink>
        <li onClick={() => setDrawer(0)}>
          <a href="#" id="blog">
            BLOG
          </a>
        </li>
      </ul>
    </header>
  );
}
