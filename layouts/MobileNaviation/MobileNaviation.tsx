import { GNB_MENUS, LOGIN_MENUS } from '@/constants/menus';
import MakeMenu from '@/util/MakeMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as Styled from './MobileNaviation.styled';

interface MobileNavigationProps {
  toggle: boolean;
  isLogin: boolean;
  logout: () => void;
}

function MobileNavigation({ toggle, isLogin, logout }: MobileNavigationProps) {
  const router = useRouter();

  return (
    <Styled.NavDiv toggle={toggle}>
      <Styled.NavMenuUl>
        {GNB_MENUS.map(({ name, link }) => (
          <Styled.NavMenuLi key={name}>
            <Link href={link}>{name}</Link>
          </Styled.NavMenuLi>
        ))}
      </Styled.NavMenuUl>
      <Styled.NavBottomUl>
        {LOGIN_MENUS.map(({ name, link, show }) => {
          if (isLogin === show)
            return (
              <Styled.NavBottomLi
                key={name}
                onClick={() => MakeMenu({ name, link, fn: logout }, router)}
              >
                {name}
              </Styled.NavBottomLi>
            );
        })}
      </Styled.NavBottomUl>
    </Styled.NavDiv>
  );
}

export default MobileNavigation;
