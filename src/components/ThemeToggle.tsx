import React from 'react';
import { usePreferences } from '../state/PreferencesContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = usePreferences();
  const icon = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

  return (
    <button className="iconBtn" type="button" onClick={toggleTheme} aria-label="Toggle theme">
      <i className={icon} />
    </button>
  );
}

