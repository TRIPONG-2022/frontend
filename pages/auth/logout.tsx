import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { logoutUser } from '@/store/slice/userSlice';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

const LogoutPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useIsomorphicLayoutEffect(() => {
    dispatch(logoutUser());
    window.localStorage.setItem('Authorization', '');
    router.replace('/');
  }, [dispatch, router]);

  return <div></div>;
};

export default LogoutPage;
