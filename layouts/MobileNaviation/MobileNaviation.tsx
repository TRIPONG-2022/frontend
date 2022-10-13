import Link from 'next/link';
import React from 'react';

import LoginJoinButton from '@/components/shared/LoginJoinList';
import { GNB_MENUS } from '@/constants/menus';
import * as Styled from './MobileNaviation.styled';

interface MobileNavigationProps {
  toggle: boolean;
  isLogin: boolean;
}

function MobileNavigation({ toggle, isLogin }: MobileNavigationProps) {
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
        <LoginJoinButton divide="Navi" isLogin={isLogin} />
      </Styled.NavBottomUl>
    </Styled.NavDiv>
  );
}

export default MobileNavigation;
