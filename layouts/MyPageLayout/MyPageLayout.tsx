import SideMenu from '@/components/shared/SideMenu';
import { ReactNode } from 'react';
import * as Styled from './MyPageLayout.styled';

interface MyPageLayoutProps {
  menus: {
    name: string;
    link: string;
  }[];
  children?: ReactNode;
}

const MyPageLayout = ({ children, menus }: MyPageLayoutProps) => {
  return (
    <Styled.Container>
      <Styled.SideMenu>
        <SideMenu menus={menus} />
      </Styled.SideMenu>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Container>
  );
};

export default MyPageLayout;
