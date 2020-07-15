import { createContext, useEffect } from 'react';
import { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from '../components/NavBar';
import theme from '../config/theme';
import { useState } from 'react';
import { Themes } from '../types/general';
import './main.css';
import { sideMargin, colorTransition } from '../config/globalStyles';
import { hasLocalStorage } from '../utils/general';
import Container from '../components/Container';

const localStorageThemeName = 'blogColorTheme';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.theme.contentBackground};
  ${colorTransition};
`;

const MainContent = styled.main`
  padding: 10px ${sideMargin}px;
  color: ${(p) => p.theme.textColor};
  display: flex;
  flex-grow: 1;
`;

const defaultTheme = Themes.DARK;

interface IAppContext {
  theme: Themes;
}
const AppContext = createContext<IAppContext>({ theme: defaultTheme });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentTheme, _setCurrentTheme] = useState<Themes>(defaultTheme);

  useEffect(() => {
    let themeName = defaultTheme;
    if (hasLocalStorage()) {
      const inStorage = window.localStorage.getItem(localStorageThemeName);
      if (inStorage === Themes.LIGHT || inStorage === Themes.DARK) {
        themeName = inStorage;
      }
    }

    setCurrentTheme(themeName);
  }, []);

  const setCurrentTheme = (nextTheme: Themes) => {
    _setCurrentTheme(nextTheme);
    // if (hasLocalStorage()) {
    //   window.localStorage.setItem(localStorageThemeName, nextTheme);
    // }
  };

  return (
    <AppContext.Provider value={{ theme: currentTheme }}>
      <ThemeProvider theme={theme[currentTheme]}>
        <AppWrapper>
          <Navigation relatedPosts={[]} setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
          <MainContent>
            <Container>
              <Component {...pageProps} />
            </Container>
          </MainContent>
        </AppWrapper>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export { AppContext };
export default MyApp;
