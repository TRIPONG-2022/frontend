import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './GNB.styled';
import HamburgerButton from '@/components/shared/HamburgerButton/HamburgerButton';

import SVGIcon from '@/components/shared/SVGIcon';
import LoginJoinList from '@/components/shared/LoginJoinList';
import NavigationDiv from '@/layouts/MobileNaviation';
import { AppState } from '@/store/index';
import { logoutUser } from '@/store/slice/userSlice';
import useWindowSize from '@/hooks/useWindowSize';
import { GNB_MENUS } from '@/constants/menus';

const GNB = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isLogin = useSelector(({ user }: AppState) => user.isLogIn);
  const [toggle, setToggle] = useState<boolean>(false);
  const { windowWidth, windowHeight } = useWindowSize(0);

  const logout = () => {
    dispatch(logoutUser());
  };

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  useEffect(() => {
    if (window.innerWidth > 1280) setToggle(false);
  }, [windowWidth]);

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
        <Styled.RightDiv>
          <Styled.SearchBtn>
            <SVGIcon icon={'SearchIcon'} width={25} height={25} />
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
