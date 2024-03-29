import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';

import { ManagedUserData } from '@/types/managed-user';
import useManagedUserQuery from '@/components/admin/ManagedUser/hooks/useManagedUserQuery';
import ManagedUserCard from '../ManagedUserCard/ManagedUserCard';
import ObserverBottom from './ObserverBottom';
import { useUserSearchParamsContext } from '../contexts/UserSearchParamsContext';

import * as Styled from './ManagedUserList.styled';

const ManagedUserList = () => {
  const { searchParams } = useUserSearchParamsContext('ManagedUserList');

  const { data, isLoading, isError, fetchNextPage, hasNextPage, refetch } =
    useManagedUserQuery(searchParams);

  const getNextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const queryClient = useQueryClient();

  if (isLoading) return <div>로딩 중</div>;

  if (isError) return <div>에러발생</div>;

  return (
    <Styled.ManagedUserListContainer>
      {data?.pages.map(({ content }) =>
        content?.map((data: ManagedUserData) => (
          <ManagedUserCard userData={data} key={data.id} />
        )),
      )}
      {hasNextPage && <ObserverBottom getNextPage={getNextPage} />}
      <button
        onClick={async () => {
          queryClient.setQueryData('userList', (data: any) => {
            console.log(data);
            return {
              pages: data.pages.slice(0, 1),
              pagesParams: data.pageParams.slice(0, 1),
            };
          });
          refetch();
        }}
      >
        리페치
      </button>
    </Styled.ManagedUserListContainer>
  );
};

export default ManagedUserList;
