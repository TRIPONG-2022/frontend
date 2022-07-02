import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

import * as Styled from './GNB.styled';
import HamburgerButton from '@/components/shared/HamburgerButton/HamburgerButton';

import useWindowSize from '@/hooks/useWindowSize';
import { GNBMenus, loginMenus } from '@/constants/menus';

interface GNBProps {
  isLogin: boolean;
}

function GNB({ isLogin }: GNBProps) {
  const [toggle, setToggle] = useState<boolean>(true);
  const { windowWidth, windowHeight } = useWindowSize(0);

  const onToggle = useCallback(() => {
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

      <Styled.MenuUl>
        {GNBMenus.map(({ name, link }) => (
          <Styled.MenuLi key={name}>
            <Link href={link}>{name}</Link>
          </Styled.MenuLi>
        ))}
      </Styled.MenuUl>

      <Styled.RightDiv>
        <Styled.SearchBtn>검색</Styled.SearchBtn>
        <Styled.LoginDiv>
          {loginMenus.map(({ name, link, show }) => {
            if (isLogin === show)
              return (
                <Styled.LoginBtn>
                  <Link href={link} key={name}>
                    {name}
                  </Link>
                </Styled.LoginBtn>
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
                <Styled.NavLoginLi key={name}>
                  <Link href={link}>{name}</Link>
                </Styled.NavLoginLi>
              );
          })}
        </Styled.NavLoginUl>
      </Styled.NavDiv>
    </Styled.ContainerNav>
  );
}

export default GNB;
