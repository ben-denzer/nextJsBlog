import styled from 'styled-components';

// DARK THEME
export const color1Dark = '#222';
export const color2Dark = '#272727';
export const textColorDarkTheme = '#f7f7f7';

// LIGHT THEME
export const color1Light = '#F7F7F7';
export const color2Light = '#FCFCFC';
export const textColorLightTheme = '#222';

// SIZES
export const navHeight = 50;
export const navHeightMobile = 50;
export const sideMargin = 10;

// BREAKPOINTS
export const mobileBreakpoint = 850;
export const smallLaptopBreakpoint = 1250;

// MIXINS
export const onMobile = `@media (max-width: ${mobileBreakpoint}px)`;
export const onSmallLaptop = `@media (max-width: ${smallLaptopBreakpoint}px)`;
export const colorTransition = 'transition: none'; // transition: background-color 0.5s, color 0.5s

// COMPONENTS
export const Container = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  min-width: 700px;

  ${onSmallLaptop} {
    background: yellow;
    width: 80%;
    min-width: 500px;
  }

  ${onMobile} {
    width: 95%;
    min-width: unset;
  }
`;
