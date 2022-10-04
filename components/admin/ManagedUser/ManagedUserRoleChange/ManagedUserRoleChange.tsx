import React from 'react';

import useRoleQuery from '@/hooks/useRoleQuery';

import styled from 'styled-components';

interface RoleType {
  roleId: number;
  roleName: string;
  description: string;
}

interface PropsType {
  selectRoles: string[];
  setSelectRoles: React.Dispatch<React.SetStateAction<string[]>>;
}

const ManagedUserRoleChange = ({ selectRoles, setSelectRoles }: PropsType) => {
  const { data, isLoading } = useRoleQuery();

  return (
    <Container>
      <ul>
        {data &&
          data
            .filter((list) => !selectRoles?.includes(list.roleName))
            .map((list) => (
              <RoleItem
                key={list.roleId}
                onClick={() =>
                  setSelectRoles((prev) => [...prev, list.roleName])
                }
              >
                <RoleItemText>{list.roleName}</RoleItemText>
              </RoleItem>
            ))}
      </ul>
      <SelectContainer>
        <SelectedText>추가될 권한</SelectedText>
        {selectRoles.length !== 0 &&
          selectRoles.map((item) => (
            <SelectedRoles key={`${item}`}>
              <RoleItemText
                onClick={() =>
                  setSelectRoles((prev) =>
                    prev.filter((roleName) => roleName !== item),
                  )
                }
              >
                {item}
              </RoleItemText>
            </SelectedRoles>
          ))}
      </SelectContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  margin-top: 1rem;
`;

const RoleItem = styled.li`
  padding: 0.75rem;
`;

const RoleItemText = styled.span`
  padding: 0.25rem 0.375rem;
  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
  border-radius: 1rem;

  font-weight: 600;
`;

const SelectedText = styled.p`
  margin: 1rem auto;

  font-weight: 600;
  text-align: center;
`;

const SelectContainer = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
`;

const SelectedRoles = styled.div`
  padding: 0.75rem;
`;

export default ManagedUserRoleChange;
