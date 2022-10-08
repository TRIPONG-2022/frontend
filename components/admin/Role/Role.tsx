import AddRole from './AddRole/AddRole';
import RoleList from './RoleList/RoleList';

import * as Styled from './Role.styled';

const Role = () => {
  return (
    <Styled.LayoutContainer>
      <Styled.LayoutSideMenu>
        <Styled.SideMenu></Styled.SideMenu>
      </Styled.LayoutSideMenu>
      <Styled.LayoutBody>
        <Styled.Container>
          <AddRole />

          <RoleList />
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default Role;
