import React, { useContext } from 'react';
import { ThemeSwitcherContext } from '../context.jsx/theme-switcher-context';
import Header from './Header';
import Content from './Content';

function AppContent() {
  const { theme } = useContext(ThemeSwitcherContext);

  return (
    <div className={`app-content ${theme}`}>
      <Header />
      <Content />
    </div>
  );
}

export default AppContent;
