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
            <span
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              {isAddRole ? '등록 취소' : '권한 생성하러 가기'}
            </span>

            {isAddRole && <AddRole />}
          </Styled.Test>

          <RoleList />
        </Styled.RoleContainer>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default Role;
