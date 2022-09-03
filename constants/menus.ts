import { logoutUser } from '@/store/slice/userSlice';
import { NextRouter } from 'next/router';
import { Dispatch } from '@reduxjs/toolkit';

interface LoginJoinListParamType {
  router: NextRouter;
  dispatch: Dispatch;
  link: string;
}

export const LOGIN_MENUS = [
  {
    name: '로그인',
    link: '/auth/login',
    isLoggedIn: false,
    excuteFn: function ({ router, dispatch, link }: LoginJoinListParamType) {
      router.push(link);
    },
  },
  {
    name: '회원가입',
    link: '/auth/join',
    isLoggedIn: false,
    excuteFn: function ({ router, dispatch, link }: LoginJoinListParamType) {
      router.push(link);
    },
  },
  {
    name: '로그아웃',
    link: '/',
    isLoggedIn: true,
    excuteFn: function ({ router, dispatch, link }: LoginJoinListParamType) {
      dispatch(logoutUser());
    },
  },
  {
    name: '마이페이지',
    link: '/',
    isLoggedIn: true,
    excuteFn: function ({ router, dispatch, link }: LoginJoinListParamType) {
      router.push(link);
    },
  },
];

export const GNB_MENUS = [
  {
    name: '커뮤니티',
    link: '/',
  },
  {
    name: '여행메이트 찾기',
    link: '/',
  },
  {
    name: '소개',
    link: '/',
  },
];

export const HEADER_HEIGHT = '5rem';
