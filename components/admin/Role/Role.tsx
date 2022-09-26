import AddRole from './AddRole/AddRole';
import * as Styled from './Role.styled';
import RoleList from './RoleList/RoleList';

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
