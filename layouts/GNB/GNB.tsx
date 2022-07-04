import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

import * as Styled from './GNB.styled';
import HamburgerButton from '@/components/shared/HamburgerButton/HamburgerButton';

import useWindowSize from '@/hooks/useWindowSize';
import { GNB_MENUS, LOGIN_MENUS } from '@/constants/menus';
import SVGIcon from '@/components/shared/SVGIcon';
import NavigationDiv from '@/layouts/NavigationDiv';

interface GNBProps {
  isLogin: boolean;
}

function GNB({ isLogin }: GNBProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  const { windowWidth, windowHeight } = useWindowSize(0);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  useEffect(() => {
    if (window.innerWidth > 1280) setToggle(false);
  }, [windowWidth]);

  return (
    <Styled.ContainerNav>
      {/* 로고 구간 */}
      <Styled.LogoDiv>
        <Link href="/">
          <a>
            <SVGIcon icon={'LogoIcon'} width={120} height={50} />
          </a>
        </Link>
      </Styled.LogoDiv>

      {/* 가운데 메뉴 구간 */}
      <Styled.MenuUl>
        {GNB_MENUS.map(({ name, link }) => (
          <Styled.MenuLi key={name}>
            <Link href={link}>{name}</Link>
          </Styled.MenuLi>
        ))}
      </Styled.MenuUl>

      {/* 검색, 로그인, 회원가입 구간 */}
      <Styled.RightDiv>
        <Styled.SearchBtn>
          <SVGIcon icon={'SearchIcon'} width={25} height={25} />
        </Styled.SearchBtn>
        <Styled.LoginDiv>
          {LOGIN_MENUS.map(({ name, link, show }) => {
            if (isLogin === show)
              return (
                <Styled.LoginBtn key={name}>
                  <Link href={link}>{name}</Link>
                </Styled.LoginBtn>
              );
          })}
        </Styled.LoginDiv>
        <Styled.NavBtn onClick={onToggle}>
          <HamburgerButton width={50} toggle={toggle} />
        </Styled.NavBtn>
      </Styled.RightDiv>

      {/* 네비게이션 창 */}
      <NavigationDiv isLogin={isLogin} toggle={toggle} />
    </Styled.ContainerNav>
  );
}

export default GNB;
