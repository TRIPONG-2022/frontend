import React, { SetStateAction, useCallback } from 'react';

import { SearchParams } from '@/types/search-params';
import { ManagedUserData } from '@/types/managed-user';
import useManagedBlackUserQuery from '@/components/admin/ManagedUser/hooks/useManagedBlackUserQuery';
import ManagedUserCard from '../ManagedUserCard/ManagedUserCard';
import ObserverBottom from './ObserverBottom';

interface ManagedBlackUserListProps {
  searchParams: SearchParams;
  setSearchParams: React.Dispatch<SetStateAction<SearchParams>>;
}

const ManagedBlackUserList = ({
  searchParams,
  setSearchParams,
}: ManagedBlackUserListProps) => {
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
