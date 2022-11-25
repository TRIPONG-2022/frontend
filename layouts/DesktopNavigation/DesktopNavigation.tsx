import React from 'react';
import Link from 'next/link';
import { GNB_MENUS } from '@/constants/menus';
import useUserMenu from '@/hooks/useUserMenu';
import IconButton from '@/components/shared/IconButton';

import * as Styled from './DesktopNavigation.styled';

const DesktopNavigation: React.FC = () => {
  const userMenu = useUserMenu();

  return (
    <Styled.DesktopNavigationContainer>
      <Styled.NavLinkList>
        {GNB_MENUS.map(({ name, link }) => (
          <li key={name}>
            <Link href={link}>
              <Styled.NavLink>{name}</Styled.NavLink>
            </Link>
          </li>
        ))}
      </Styled.NavLinkList>
      <Styled.MenuWrapper>
        <IconButton
          icon="SearchIcon"
          colorScheme="default"
          aria-label="검색"
          iconSize={24}
        />
        {userMenu.map(({ name, link }, i) => (
          <Link key={name} href={link}>
            <Styled.MenuLink primary={i === 0}>{name}</Styled.MenuLink>
          </Link>
        ))}
      </Styled.MenuWrapper>
    </Styled.DesktopNavigationContainer>
  );
};

export default DesktopNavigation;
