import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import wrapper, { AppState } from 'store';
import { userConfirm } from 'api/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '@/store/slice/userSlice';

function MyApp({ Component, pageProps }: AppProps) {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const [queryClient] = React.useState(() => new QueryClient());

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
  }, [dispatch, user.isLogIn]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
