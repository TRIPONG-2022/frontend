import { useState } from 'react';
import Image from 'next/image';
import LoadingSpinner from '@/assets/icons/Loadinggif.gif';
import { RoleType } from 'types/role';
import useRoleQuery from '@/hooks/useRoleQuery';
import RoleCard from '../RoleCard/RoleCard';
import * as Styled from './RoleList.styled';

const RoleList = () => {
  const [roleList, setRoleList] = useState<RoleType[]>([]);
  const [errorType, setErrorType] = useState<string>('');

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
        <div>{errorType}</div>
        <button onClick={() => refetch()}>다시 불러오기</button>
      </>
    );
  return (
    <Styled.Container>
      {data?.map((item: RoleType) => (
        <RoleCard item={item} key={item.roleId} />
      ))}
    </Styled.Container>
  );
};

export default RoleList;