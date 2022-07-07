import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as Styled from './SideMenu.styled';

interface SideMenuProps {
  menus: {
    name: string;
    link: string;
  }[];
}

const SideMenu = ({ menus }: SideMenuProps) => {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Title>마이페이지</Styled.Title>
      <Styled.SideMenuUl>
        {menus.map(({ name, link }) => (
          <Styled.SideMenuLi key={name} active={router.asPath.includes(link)}>
            <Link href={link}>{name}</Link>
          </Styled.SideMenuLi>
        ))}
      </Styled.SideMenuUl>
    </Styled.Container>
  );
};

export default SideMenu;
