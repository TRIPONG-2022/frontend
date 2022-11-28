import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../store';
import { LOGGED_IN_MENUS, LOGGED_OUT_MENUS } from '@/constants/menus';

const useUserMenu = () => {
  const isLogin = useSelector(({ user }: AppState) => user.isLogIn);
  const userMenu = useMemo(
    () => (isLogin ? LOGGED_IN_MENUS : LOGGED_OUT_MENUS),
    [isLogin],
  );

  return userMenu;
};

export default useUserMenu;
