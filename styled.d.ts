import 'styled-components';

interface Color {
  hex: string;
  rgb: string;
}

interface ColorSet {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: Color;
      secondary: Color;
      error: Color;
      warning: Color;
      gray: ColorSet;
      blackAlpha: ColorSet;
    };
  }
}
