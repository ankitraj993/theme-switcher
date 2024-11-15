import React, { useContext } from 'react';
import { ThemeSwitcherContext } from '../context.jsx/theme-switcher-context';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';

function Header() {
  const { toggleTheme, theme } = useContext(ThemeSwitcherContext);

  return (
    <div className="header">
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme} className='theme-toggle'>
        {theme === 'light' ? <BedtimeOutlinedIcon /> : <WbSunnyIcon />}
      </button>
    </div>
  );
}

export default Header;
