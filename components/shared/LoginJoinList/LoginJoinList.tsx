import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { LOGIN_MENUS } from '@/constants/menus';
import * as Styled from './LoginJoinList.styled';

interface LoginJoinListType {
  isLogin: boolean;
  divide: 'GNB' | 'Navi';
}

const LoginJoinList = ({ isLogin, divide }: LoginJoinListType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      {LOGIN_MENUS.map(
        ({ name, link, isLoggedIn, excuteFn }) =>
          isLoggedIn === isLogin && (
            <Styled.LoginJoinLi
              divide={divide}
              key={name}
              onClick={() => excuteFn({ router, dispatch, link })}
            >
              {name}
            </Styled.LoginJoinLi>
          ),
      )}
    </>
  );
};

export default LoginJoinList;
