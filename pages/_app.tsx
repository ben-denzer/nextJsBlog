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

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentTheme, _setCurrentTheme] = useState<Themes>(Themes.DARK);

  const setCurrentTheme = (nextTheme: Themes) => {
    document.body.style.backgroundColor = theme[nextTheme].contentBackground;
    _setCurrentTheme(nextTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Navigation relatedPosts={[]} setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
      <MainContent>
        <Component {...pageProps} />
      </MainContent>
    </ThemeProvider>
  );
};

export default MyApp;
