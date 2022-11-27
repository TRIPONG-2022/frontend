import Link from 'next/link';

import useToggle from '@/hooks/useToggle';
import useUserMenu from '@/hooks/useUserMenu';
import SVGIcon from '@/components/shared/SVGIcon';
import HamburgerIcon from '@/components/shared/HamburgerButton';
import { GNB_MENUS } from '@/constants/menus';

import * as Styled from './MobileNaviation.styled';
import { useDispatch } from 'react-redux';
import { onSearch } from '@/store/slice/searchSlice';

function MobileNavigation() {
  const userMenu = useUserMenu();
  const dispatch = useDispatch();
  const { toggle, onToggle } = useToggle(false);

  return (
    <>
      <Styled.MobileNavigationContainer>
        <button onClick={() => dispatch(onSearch())}>
          <SVGIcon icon="SearchIcon" size={24} />
        </button>
        <button onClick={onToggle}>
          <HamburgerIcon size={24} toggle={toggle} />
        </button>
      </Styled.MobileNavigationContainer>
      <Styled.MobileMenuWrapper isOpen={toggle}>
        <Styled.MenuList>
          {GNB_MENUS.map(({ name, link }) => (
            <Styled.MenuItem key={name}>
              <Link href={link}>{name}</Link>
            </Styled.MenuItem>
          ))}
        </Styled.MenuList>
        <Styled.BottomWrapper>
          {userMenu.map(({ name, link }) => (
            <Link key={name} href={link}>
              <a>{name}</a>
            </Link>
          ))}
        </Styled.BottomWrapper>
      </Styled.MobileMenuWrapper>
    </>
  );
}

export default MobileNavigation;
