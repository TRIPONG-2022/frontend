import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import { Provider } from 'react-redux';
import store from 'store';
import wrapper from 'store/wrapstore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    // </Provider>
  );
}

export default wrapper.withRedux(MyApp);
