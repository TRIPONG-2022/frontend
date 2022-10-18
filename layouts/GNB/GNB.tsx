import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '@/store/index';
import useWindowSize from '@/hooks/useWindowSize';
import useToggle from '@/hooks/useToggle';
import NavigationDiv from '@/layouts/MobileNaviation';
import HamburgerButton from '@/components/shared/HamburgerButton/HamburgerButton';
import SVGIcon from '@/components/shared/SVGIcon';
import LoginJoinList from '@/components/shared/LoginJoinList';
import { GNB_MENUS } from '@/constants/menus';
import * as Styled from './GNB.styled';
import SearchBar from '@/components/searchbar/SearchBar';

const GNB = () => {
  const isLogin = useSelector(({ user }: AppState) => user.isLogIn);
  const { toggle, onToggle, setOff } = useToggle(false);
  const { windowWidth, windowHeight } = useWindowSize(0);

  const {
    toggle: isShowSearchBar,
    setOn: showSearchBar,
    setOff: hideSearchBar,
  } = useToggle(false);

  useEffect(() => {
    if (window.innerWidth > 1280) setOff();
  }, [windowWidth, setOff]);

  return (
    <Styled.GNBHeader>
      <Styled.GNBNav>
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
        {isShowSearchBar && <SearchBar setOff={hideSearchBar} />}

        <Styled.RightDiv>
          <Styled.SearchBtn>
            <SVGIcon
              icon={'SearchIcon'}
              width={25}
              height={25}
              onClick={() => showSearchBar()}
            />
          </Styled.SearchBtn>
          <Styled.LoginJoinDiv>
            <LoginJoinList divide="GNB" isLogin={isLogin} />
          </Styled.LoginJoinDiv>
          <Styled.NavBtn onClick={onToggle}>
            <HamburgerButton width={50} toggle={toggle} />
          </Styled.NavBtn>
        </Styled.RightDiv>

        {/* 네비게이션 창 */}
        <NavigationDiv isLogin={isLogin} toggle={toggle} />
      </Styled.GNBNav>
    </Styled.GNBHeader>
  );
};

export default GNB;
