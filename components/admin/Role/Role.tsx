import useToggle from '@/hooks/useToggle';
import AddRole from './AddRole/AddRole';
import RoleList from './RoleList/RoleList';

import * as Styled from './Role.styled';

const Role = () => {
  const { toggle: isAddRole, onToggle, setOff, setOn } = useToggle(false);

  return (
    <Styled.LayoutContainer>
      <Styled.LayoutSideMenu>
        <Styled.SideMenu></Styled.SideMenu>
      </Styled.LayoutSideMenu>
      <Styled.LayoutBody>
        <Styled.RoleContainer>
          <Styled.Test onClick={setOn}>
            {!isAddRole && <span>권한 생성하러 가기</span>}

            {isAddRole && <AddRole setOff={setOff} />}
          </Styled.Test>

          <RoleList />
        </Styled.RoleContainer>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default Role;
