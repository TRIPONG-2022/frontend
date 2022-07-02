import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

import * as Styled from './GNB.styled';
import HamburgerButton from '@/components/shared/HamburgerButton/HamburgerButton';

import useWindowSize from '@/hooks/useWindowSize';

interface GNBProps {
  isLogin: boolean;
}

const loginMenus = [
  {
    name: '로그인',
    link: '/auth/login',
    show: false,
  },
  {
    name: '회원가입',
    link: '/',
    show: false,
  },
  {
    name: '로그아웃',
    link: '/',
    show: true,
  },
  {
    name: '마이페이지',
    link: '/',
    show: true,
  },
];

const GNBMenus = [
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

function GNB({ isLogin }: GNBProps) {
  const [toggle, setToggle] = useState<boolean>(true);
  const { windowWidth, windowHeight } = useWindowSize(100);

  const onToggle = useCallback(() => {
    console.log(toggle);
    setToggle(!toggle);
  }, [toggle]);

  useEffect(() => {
    console.log(windowWidth);
    if (window.innerWidth > 768) setToggle(true);
  }, [windowWidth]);

  return (
    <Styled.ContainerNav>
      <Styled.LogoDiv>
        <div>로고</div>
      </Styled.LogoDiv>
      <Styled.MenuUl toggle={toggle}>
        {GNBMenus.map(({ name, link }) => {
          return (
            <Styled.MenuLi key={name}>
              <Link href={link}>{name}</Link>
            </Styled.MenuLi>
          );
        })}
      </Styled.MenuUl>

      <Styled.RightDiv>
        <Styled.SearchBtn>검색</Styled.SearchBtn>

        <Styled.LoginDiv>
          {loginMenus.map(({ name, link, show }) => {
            if (isLogin === show)
              return (
                <Link href={link} key={name}>
                  <Styled.LoginBtn>{name}</Styled.LoginBtn>
                </Link>
              );
          })}
        </Styled.LoginDiv>
        <Styled.NavBtn onClick={onToggle}>
          <HamburgerButton width={50} toggle={toggle} />
        </Styled.NavBtn>
      </Styled.RightDiv>

      <Styled.NavDiv toggle={toggle}>
        <Styled.NavMenuUl>
          {GNBMenus.map(({ name, link }) => (
            <Styled.NavMenuLi key={name}>
              <Link href={link}>{name}</Link>
            </Styled.NavMenuLi>
          ))}
        </Styled.NavMenuUl>
        <Styled.NavLoginUl>
          {loginMenus.map(({ name, link, show }) => {
            if (isLogin === show)
              return (
                <Link href={link} key={name}>
                  <Styled.NavLoginLi>{name}</Styled.NavLoginLi>
                </Link>
              );
          })}
        </Styled.NavLoginUl>
      </Styled.NavDiv>
    </Styled.ContainerNav>
  );
}

export default GNB;
