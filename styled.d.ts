import 'styled-components';
import { AllThemeValues } from './config/theme';

declare module 'styled-components' {
  export class DefaultTheme extends AllThemeValues {}
}
