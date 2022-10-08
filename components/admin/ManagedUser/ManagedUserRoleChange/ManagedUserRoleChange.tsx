import React from 'react';

import useRoleQuery from '@/components/admin/Role/hooks/useRoleQuery';

import * as Styled from './ManagedUserRoleChange.styled';

interface ManagedUserRoleChangeProps {
  selectRoles: string[];
  setSelectRoles: React.Dispatch<React.SetStateAction<string[]>>;
}

const ManagedUserRoleChange = ({
  selectRoles,
  setSelectRoles,
}: ManagedUserRoleChangeProps) => {
  const { data, isLoading } = useRoleQuery();

  return (
    <Styled.Container>
      <ul>
        {data &&
          data
            .filter((list) => !selectRoles?.includes(list.roleName))
            .map((list) => (
              <Styled.RoleItemContainer
                key={list.roleId}
                onClick={() =>
                  setSelectRoles((prev) => [...prev, list.roleName])
                }
              >
                <Styled.RoleItemText>{list.roleName}</Styled.RoleItemText>
              </Styled.RoleItemContainer>
            ))}
      </ul>
      <Styled.SelectContainer>
        <Styled.SelectedText>추가될 권한</Styled.SelectedText>
        {selectRoles.length !== 0 &&
          selectRoles.map((item) => (
            <Styled.RoleItemContainer key={`${item}`}>
              <Styled.RoleItemText
                onClick={() =>
                  setSelectRoles((prev) =>
                    prev.filter((roleName) => roleName !== item),
                  )
                }
              >
                {item}
              </Styled.RoleItemText>
            </Styled.RoleItemContainer>
          ))}
      </Styled.SelectContainer>
    </Styled.Container>
  );
};

export default ManagedUserRoleChange;
