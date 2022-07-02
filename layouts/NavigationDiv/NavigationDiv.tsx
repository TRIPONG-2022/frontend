import { GNB_MENUS, LOGIN_MENUS } from '@/constants/menus';
import Link from 'next/link';
import React from 'react';
import * as Styled from './NavigationDiv.styled';

interface NavigationDivProps {
  toggle: boolean;
  isLogin: boolean;
}

function NavigationDiv({ toggle, isLogin }: NavigationDivProps) {
  return (
    <Styled.NavDiv toggle={toggle}>
      <Styled.NavMenuUl>
        {GNB_MENUS.map(({ name, link }) => (
          <Styled.NavMenuLi key={name}>
            <Link href={link}>{name}</Link>
          </Styled.NavMenuLi>
        ))}
      </Styled.NavMenuUl>
      <Styled.NavLoginUl>
        {LOGIN_MENUS.map(({ name, link, show }) => {
          if (isLogin === show)
            return (
              <Styled.NavLoginLi key={name}>
                <Link href={link}>{name}</Link>
              </Styled.NavLoginLi>
            );
        })}
      </Styled.NavLoginUl>
    </Styled.NavDiv>
  );
}

export default NavigationDiv;
