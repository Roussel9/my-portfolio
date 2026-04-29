import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Theme = 'light' | 'dark';
export type Lang = 'de' | 'en' | 'fr';

type Preferences = {
  theme: Theme;
  lang: Lang;
  setTheme: (t: Theme) => void;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<Preferences | null>(null);

const THEME_KEY = 'portfolio.theme';
const LANG_KEY = 'portfolio.lang';

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  return prefersDark ? 'dark' : 'light';
}

function getInitialLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'de' || saved === 'en' || saved === 'fr') return saved;
  return 'en'; // Default moderne/“international”
}

export default function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());
  const [lang, setLangState] = useState<Lang>(() => getInitialLang());

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const value = useMemo<Preferences>(
    () => ({
      theme,
      lang,
      setTheme: (t) => setThemeState(t),
      setLang: (l) => setLangState(l),
      toggleTheme: () => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [theme, lang],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error('usePreferences must be used inside PreferencesProvider');
  return ctx;
}

