import React, { useCallback } from 'react';

import { ManagedUserData } from '@/types/managed-user';
import useManagedBlackUserQuery from '@/components/admin/ManagedUser/hooks/useManagedBlackUserQuery';
import ManagedUserCard from '../ManagedUserCard/ManagedUserCard';
import ObserverBottom from './ObserverBottom';
import { useUserSearchParamsContext } from '../contexts/UserSearchParamsContext';

const ManagedBlackUserList = () => {
  const { searchParams } = useUserSearchParamsContext('ManagedBlackUserList');

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useManagedBlackUserQuery(searchParams);

  const getNextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  if (isLoading) return <div>로딩 중</div>;

  if (isError) return <div>에러발생</div>;

  return (
    <>
      {data?.pages.map(({ content }) =>
        content?.map((data: ManagedUserData) => (
          <ManagedUserCard userData={data} key={data.id} />
        )),
      )}
      {hasNextPage && <ObserverBottom getNextPage={getNextPage} />}
    </>
  );
};

export default ManagedBlackUserList;
