import { getRoles } from '@/api/admin';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface RoleType {
  roleId: number;
  roleName: string;
  description: string;
}

const UserRoleChange = () => {
  const [roleList, setRoleList] = useState<RoleType[]>([]);
  const [selectRoles, setSelectRoles] = useState<string[]>([]);

  console.log(selectRoles);
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
            <li
              key={list.roleId}
              onClick={() => setSelectRoles((prev) => [...prev, list.roleName])}
            >
              {list.roleName}
            </li>
          ))}
      </ul>
      <SelectRoles>
        {selectRoles.map((item) => (
          <Role key={`${item}`}>{item}</Role>
        ))}
      </SelectRoles>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const SelectRoles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border: 1px solid black;
  border-radius: 1rem;
`;

const Role = styled.p`
  background-color: gray;

  margin-left: 1rem;
`;

export default UserRoleChange;
