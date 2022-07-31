import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import wrapper, { RootState } from 'store';
import { userConfirm } from 'api/auth';
import { useEffect } from 'react';
import { saveUser } from 'store/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.nickName) {
      (async function logincheck() {
        const { data, isLogIn } = await userConfirm();
        dispatch(saveUser({ isLogIn, ...data }));
      })();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
