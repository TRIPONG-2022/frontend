import { getRoles } from '@/api/admin';
import React, { useEffect, useState } from 'react';
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

const UserRoleChange = ({ selectRoles, setSelectRoles }: PropsType) => {
  const [roleList, setRoleList] = useState<RoleType[]>([]);

  const getRoleList = async () => {
    const { data } = await getRoles();
    console.log(data);
    if (data) {
      setRoleList(data);
    }
  };

  useEffect(() => {
    getRoleList();
  }, []);

  return (
    <Container>
      <ul>
        {roleList
          .filter((list) => !selectRoles?.includes(list.roleName))
          .map((list) => (
            <RoleLi
              key={list.roleId}
              onClick={() => setSelectRoles((prev) => [...prev, list.roleName])}
            >
              {list.roleName}
            </RoleLi>
          ))}
      </ul>
      {selectRoles.length !== 0 && (
        <SelectRoles>
          {selectRoles.map((item) => (
            <Role key={`${item}`}>{item}</Role>
          ))}
        </SelectRoles>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  margin-top: 1rem;
`;

const RoleLi = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 1rem;

  background-color: gray;
`;

const SelectRoles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border: 1px solid black;
  border-radius: 1rem;
`;

const Role = styled.p`
  margin-left: 1rem;
  padding: 1rem;

  background-color: gray;
`;

export default UserRoleChange;
