import { MY_PAGE_MENUS } from '@/constants/menus';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import SVGIcon from '../SVGIcon';
import * as Styled from './SideMenu.styled';

interface SideMenuProps {
  menus: {
    name: string;
    link: string;
  }[];
  title: string;
}

const SideMenu = ({ menus, title = '마이페이지' }: SideMenuProps) => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <Styled.Container active={active}>
      <Styled.Title active={active} onClick={() => setActive(!active)}>
        {title}
        <SVGIcon icon="ArrowDownIcon" />
      </Styled.Title>
      <Styled.SideMenuUl active={active}>
        {menus.map(({ name, link }) => (
          <Link href={link} key={name}>
            <Styled.SideMenuLi
              active={router.asPath.includes(link)}
              menus={MY_PAGE_MENUS}
            >
              {name}
            </Styled.SideMenuLi>
          </Link>
        ))}
      </Styled.SideMenuUl>
    </Styled.Container>
  );
};

export default SideMenu;
