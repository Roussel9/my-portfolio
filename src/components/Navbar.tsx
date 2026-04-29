import React from 'react';
import { NavLink } from 'react-router-dom';
import { content } from '../i18n/content';
import { usePreferences } from '../state/PreferencesContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { lang } = usePreferences();
  const t = content[lang];

  return (
    <div className="navbar">
      <div className="container navInner">
        <div className="brand" aria-label="Brand">
          <div className="brandTitle">Roussel</div>
          <div className="brandSub">{t.hero.subtitle}</div>
        </div>

        <div className="navLinks" role="navigation" aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
            {t.nav.projects}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
            {t.nav.contact}
          </NavLink>
        </div>

        <div className="navRight">
          <div>
            <LanguageSelect />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

function LanguageSelect() {
  const { lang, setLang } = usePreferences();

  return (
    <select
      className="langSelect"
      value={lang}
      onChange={(e) => setLang(e.target.value as any)}
      aria-label="Language"
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}

