import Image from 'next/image';

import LoadingSpinner from '@/assets/icons/Loadinggif.gif';
import useRoleQuery from '@/hooks/useRoleQuery';
import { RoleData } from '@/types/managed-role';
import RoleCard from '../RoleCard/RoleCard';

import * as Styled from './RoleList.styled';

const RoleList = () => {
  const { data, isLoading, isError, refetch } = useRoleQuery();

  if (isLoading)
    return (
      <Styled.LoadingContainer>
        <Image src={LoadingSpinner} alt="로딩이미지" />
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
    <Styled.Container>
      {data?.map((item: RoleData) => (
        <RoleCard item={item} key={item.roleId} />
      ))}
    </Styled.Container>
  );
};

export default RoleList;
