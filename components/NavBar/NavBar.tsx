import React from 'react';
import styled from 'styled-components';
import { Themes } from '../../types/general';
import { sideMargin, navHeight, navHeightMobile, colorTransition, onMobile } from '../../config/globalStyles';
import Container from '../Container';

const headerHeightCss = `
  min-height: ${navHeight}px;
  ${onMobile} {
    min-height: ${navHeightMobile}px;
  }
`;

const NavBackground = styled.header`
  padding: 10px ${sideMargin}px;
  background-color: ${(p) => p.theme.navBackground};
  align-items: center;
  ${colorTransition};
  ${headerHeightCss}
`;

const NavWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-items: center;
  color: ${(p) => p.theme.textColor};
  ${headerHeightCss}

  h1,
  h2 {
    margin: 0 10px 0 0;
  }
`;

interface Props {
  relatedPosts: string[];
  currentTheme: Themes;
  setCurrentTheme: (theme: Themes) => void;
}

const Nav = (props: Props) => {
  const updateTheme = () => {
    const nextTheme = props.currentTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    props.setCurrentTheme(nextTheme);
  };

  return (
    <NavBackground>
      <Container>
        <NavWrapper id="navWrapper">
          <h1>From Construction To Coding</h1>
          <h2>Ben Denzer</h2>
          <button onClick={updateTheme}>Hi {props.currentTheme}</button>
        </NavWrapper>
      </Container>
    </NavBackground>
  );
};

export default Nav;
