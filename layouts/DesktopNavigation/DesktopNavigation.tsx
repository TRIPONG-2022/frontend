import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import useUserMenu from '@/hooks/useUserMenu';
import IconButton from '@/components/shared/IconButton';
import { GNB_MENUS } from '@/constants/menus';
import { onSearch } from '@/store/slice/searchSlice';

import * as Styled from './DesktopNavigation.styled';

const DesktopNavigation: React.FC = () => {
  const userMenu = useUserMenu();
  const dispatch = useDispatch();

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
          onClick={() => {
            dispatch(onSearch());
          }}
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
