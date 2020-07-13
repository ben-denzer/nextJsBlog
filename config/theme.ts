import { Themes } from '../types/general';
import {
  color1Dark,
  color1Light,
  color2Dark,
  textColorDarkTheme,
  textColorLightTheme,
  color2Light,
} from './globalStyles';

export class AllThemeValues {
  public navBackground: string = '';
  public contentBackground: string = '';
  public textColor: string = '';
}

const colorTheme: Record<Themes, AllThemeValues> = {
  [Themes.DARK]: {
    navBackground: color1Dark,
    contentBackground: color2Dark,
    textColor: textColorDarkTheme,
  },
  [Themes.LIGHT]: {
    navBackground: color1Light,
    contentBackground: color2Light,
    textColor: textColorLightTheme,
  },
};

export default colorTheme;
