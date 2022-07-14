import SideMenu from '@/components/shared/SideMenu';
import { MY_PAGE_MENUS } from '@/constants/menus';
import { ReactNode } from 'react';
import * as Styled from './MyPageLayout.styled';

interface MyPageLayoutProps {
  menus?: {
    name: string;
    link: string;
  }[];
  children?: ReactNode;
}

const MyPageLayout = ({
  children,
  menus = MY_PAGE_MENUS,
}: MyPageLayoutProps) => {
  return (
    <Styled.Container>
      <Styled.SideMenu>
        <SideMenu title="마이페이지" menus={menus} />
      </Styled.SideMenu>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Container>
  );
};

export default MyPageLayout;
