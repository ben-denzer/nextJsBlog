import React from 'react';
import styled from 'styled-components';
import { Themes } from '../../types/general';
import { sideMargin } from '../../config/globalStyles';

const NavWrapper = styled.header`
  ${(p) => `
    padding: 10px ${sideMargin}px;
    background-color: ${p.theme.navBackground};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    color: ${p.theme.textColor};

    h1, h2 {
      margin: 0 10px;
    }
  `};
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
    <NavWrapper>
      <h1>From Construction To Coding</h1>
      <h2>Ben Denzer</h2>
      <button onClick={updateTheme}>Hi {props.currentTheme}</button>
    </NavWrapper>
  );
};

export default Nav;
