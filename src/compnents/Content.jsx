import React, { useContext } from 'react';
import { ThemeSwitcherContext } from '../context.jsx/theme-switcher-context';

function Content() {
  const { theme } = useContext(ThemeSwitcherContext);
  return (
    <div className='content'>
      <div className='content-body'>
        <h2>Welcome to the Theme Switcher</h2>
        <p>This card demonstrates how the theme affects various elements.</p>

        <p>
          The current theme is: <b className='theme-name'>{theme}</b>
        </p>

        <p>
          Click the toggle button in the header to switch between light and dark
          themes. Notice how the colors of the page, text, and components
          change.
        </p>
      </div>

      <div className='content-body'>
        <h3>Sample Content</h3>
        <p>
          This is some sample content to demonstrate how text looks in different
          themes.
        </p>
      </div>

      <div className='content-body'>
        <h3>More Information</h3>
        <p>
          You can customize the colors and styles further by modifying the
          Tailwind configuration.
        </p>
      </div>
    </div>
  );
}

export default Content;
