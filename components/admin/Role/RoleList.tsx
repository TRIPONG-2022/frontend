import { getRoles } from '@/api/admin';
import { useState } from 'react';
import { useEffect } from 'react';
import RoleCard from './RoleCard';
import * as Styled from './RoleList.styled';

interface GetRoleType {
  data: RoleType[];
  isError: boolean;
}

interface RoleType {
  roleId: number;
  roleName: string;
  description: string;
}

const RoleList = () => {
  const [roleList, setRoleList] = useState<RoleType[]>([]);
  const getRoleList = async () => {
    const { data } = await getRoles();
    console.log(data);
    if (data) {
      setRoleList(data);
    }
  };

  console.log(roleList);

  useEffect(() => {
    getRoleList();
  }, []);
  return (
    <Styled.Container>
      {roleList?.map((item: RoleType) => (
        <RoleCard item={item} key={item.roleId} />
      ))}
    </Styled.Container>
  );
};

export default RoleList;
