import useRoleQuery from '@/components/admin/Role/hooks/useRoleQuery';
import { RoleData } from '@/types/managed-role';
import RoleCard from '../RoleCard/RoleCard';

import * as Styled from './RoleList.styled';

const RoleList = () => {
  const { data, isLoading, isError, refetch } = useRoleQuery();

  if (isLoading)
    return (
      <Styled.LoadingContainer>
        <p>로딩중</p>
      </Styled.LoadingContainer>
    );

  if (isError)
    return (
      <>
        <div>에러발생</div>
        <button onClick={() => refetch()}>다시 불러오기</button>
      </>
    );
  return (
    <Styled.RoleListContainer>
      {data?.map((item: RoleData) => (
        <RoleCard item={item} key={item.roleId} />
      ))}
    </Styled.RoleListContainer>
  );
};

export default RoleList;
