import Link from 'next/link';

import useToggle from '@/hooks/useToggle';
import useUserMenu from '@/hooks/useUserMenu';
import SVGIcon from '@/components/shared/SVGIcon';
import HamburgerIcon from '@/components/shared/HamburgerButton';
import { GNB_MENUS } from '@/constants/menus';

import * as Styled from './MobileNaviation.styled';
import { useDispatch } from 'react-redux';
import { onSearch } from '@/store/slice/searchSlice';
import { useRouter } from 'next/router';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

function MobileNavigation() {
  const router = useRouter();
  const userMenu = useUserMenu();
  const dispatch = useDispatch();
  const { toggle, onToggle } = useToggle(false);

  const movePage = (link: string) => () => {
    onToggle();
    router.push(link);
  };

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
            <Styled.MenuItem key={name} onClick={movePage(link)}>
              {name}
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
