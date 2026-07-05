import { createContext, useContext, type ReactNode } from 'react';

export type Theme = 'day' | 'night' | 'mono';
export type Dir = 'ltr' | 'rtl';

const ThemeCtx = createContext<{ theme: Theme; dir: Dir }>({ theme: 'day', dir: 'ltr' });
export const useTheme = () => useContext(ThemeCtx);

export function ThemeProvider({
  theme = 'day',
  dir = 'ltr',
  children
}: {
  theme?: Theme;
  dir?: Dir;
  children: ReactNode;
}) {
  return (
    <ThemeCtx.Provider value={{ theme, dir }}>
      <div data-theme={theme} dir={dir} className="oc-root">
        {children}
      </div>
    </ThemeCtx.Provider>
  );
}
