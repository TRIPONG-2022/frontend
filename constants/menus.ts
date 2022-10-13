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
    link: '/my/profile',
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

export const MY_PAGE_MENUS = [
  {
    name: '내 정보',
    link: '/my/profile',
  },
  {
    name: '내가 쓴 글',
    link: '/my/posts',
  },
  {
    name: '내가 단 댓글',
    link: '/my/replies',
  },
  {
    name: '좋아요한 글',
    link: '/my/likes',
  },
  {
    name: '비밀번호 재설정',
    link: '/auth/reset-password',
  },
  {
    name: '회원탈퇴',
    link: '/hhh',
  },
];

export const CATEGORY_MENUS = [
  {
    name: '모두보기',
    value: 'all',
  },
  {
    name: '자유게시판',
    value: 'board',
  },
  {
    name: '모임/모집',
    value: 'gathering',
  },
  {
    name: '리뷰/후기',
    value: 'review',
  },
  {
    name: 'Q&A',
    value: 'qna',
  },
];

export const OLD_NEW_MENUS = [
  {
    name: '최신순',
    value: 'desc',
  },
  {
    name: '오래된순',
    value: 'asc',
  },
];
