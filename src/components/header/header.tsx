import React from 'react';
import { useTheme } from '../../contexts/theme/theme.context';

function Header() {
    const { darkMode } = useTheme();
    const themeClass = darkMode ? 'theme-dark' : 'theme-light';
  
    return (
      <header className={`p-4 ${themeClass}`}>
        <div className={`bg-${darkMode ? 'gray' : 'white'}-800 text-white`}>
          <h1 className="text-2xl">Meu Site</h1>
        </div>
      </header>
    );
  }

export default Header;
