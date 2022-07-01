import XButton from '@/components/shared/XButton/XButton';
import useWindowSize from 'hook/useWindowSize';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import * as Styled from './GNB.styled';

interface GNBProps {
  isLogin: boolean;
}

const loginMenus = [
  {
    name: '로그인',
    link: '/',
    show: true,
  },
  {
    name: '회원가입',
    link: '/',
    show: true,
  },
  {
    name: '로그아웃',
    link: '/',
    show: false,
  },
  {
    name: '마이페이지',
    link: '/',
    show: false,
  },
];

const GNBMenus = [
  {
    name: '커뮤니티',
    link: '/',
    show: true,
  },
  {
    name: '여행메이트 찾기',
    link: '/',
    show: true,
  },
  {
    name: '소개',
    link: '/',
    show: true,
  },
  ...loginMenus,
];

function GNB({ isLogin }: GNBProps) {
  const [toggle, setToggle] = useState<boolean>(true);
  const { windowWidth, windowHeight } = useWindowSize(0);

  const onToggle = useCallback(() => {
    console.log(toggle);
    setToggle(!toggle);
  }, [toggle]);

  useEffect(() => {
    if (window.innerWidth > 768) setToggle(true);
  }, [windowWidth]);

  return (
    <Styled.ContainerNav>
      <Styled.LogoDiv>
        <div>로고</div>
      </Styled.LogoDiv>

      <Styled.MenuUl toggle={toggle}>
        {GNBMenus.map(({ name, link, show }, idx) => {
          return (
            (toggle && idx < 3 && (
              <Styled.MenuLi key={name}>
                <Link href={link}>{name}</Link>
              </Styled.MenuLi>
            )) ||
            (!toggle && isLogin !== show && (
              <Styled.MenuLi key={name}>
                <Link href={link}>{name}</Link>
              </Styled.MenuLi>
            ))
          );
        })}
      </Styled.MenuUl>

      <Styled.RightDiv>
        <Styled.SearchBtn>검색</Styled.SearchBtn>

        <Styled.LoginDiv>
          {loginMenus.map(({ name, link, show }) => {
            if (isLogin !== show)
              return (
                <Link href={link} key={name}>
                  <Styled.LoginBtn>{name}</Styled.LoginBtn>
                </Link>
              );
          })}
        </Styled.LoginDiv>
        {/* <Styled.NavBtn onClick={onToggle}>네비바</Styled.NavBtn> */}

        <div onClick={onToggle}>
          <XButton width={50} />
        </div>
      </Styled.RightDiv>
    </Styled.ContainerNav>
  );
}

export default GNB;
