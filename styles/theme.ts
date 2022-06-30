import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: {
      hex: '#0DC5D6',
      rgb: '13, 197, 214',
    },
    secondary: {
      hex: '#82CDDA',
      rgb: '130, 205, 218',
    },
    error: {
      hex: '#FE4E5C',
      rgb: '245, 78, 92',
    },
    warning: {
      hex: '#FEBB2C',
      rgb: ' 254, 187, 44',
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    blackAlpha: {
      50: 'rgba(0,0,0,0.05)',
      100: 'rgba(0,0,0,0.1)',
      200: 'rgba(0,0,0,0.2)',
      300: 'rgba(0,0,0,0.3)',
      400: 'rgba(0,0,0,0.4)',
      500: 'rgba(0,0,0,0.5)',
      600: 'rgba(0,0,0,0.6)',
      700: 'rgba(0,0,0,0.7)',
      800: 'rgba(0,0,0,0.8)',
      900: 'rgba(0,0,0,0.9)',
    },
  },
};

export default theme;
