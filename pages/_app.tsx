import { createContext } from 'react';
import { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from '../components/NavBar';
import theme from '../config/theme';
import { useState } from 'react';
import { Themes } from '../types/general';
import './main.css';
import { sideMargin } from '../config/globalStyles';

const MainContent = styled.main`
  padding: 10px ${sideMargin}px;
  background-color: ${(p) => p.theme.contentBackground};
  color: ${(p) => p.theme.textColor};
`;

const defaultTheme = Themes.DARK;

interface IAppContext {
  theme: Themes;
}
const AppContext = createContext<IAppContext>({ theme: defaultTheme });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentTheme, _setCurrentTheme] = useState<Themes>(defaultTheme);

  const setCurrentTheme = (nextTheme: Themes) => {
    document.body.style.backgroundColor = theme[nextTheme].contentBackground;
    _setCurrentTheme(nextTheme);
  };

  return (
    <AppContext.Provider value={{ theme: currentTheme }}>
      <ThemeProvider theme={theme[currentTheme]}>
        <Navigation relatedPosts={[]} setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export { AppContext };
export default MyApp;
