import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import wrapper, { AppState } from 'store';
import { userConfirm } from 'api/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '@/store/slice/userSlice';

function MyApp({ Component, pageProps }: AppProps) {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isLogIn) {
      (async function logincheck() {
        const { userInfo, isError, error } = await userConfirm();
        if (userInfo) {
          dispatch(saveUser(userInfo));
        } else if (isError) {
          console.log(error);
        }
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
