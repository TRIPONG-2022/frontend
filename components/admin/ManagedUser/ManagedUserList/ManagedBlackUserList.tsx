import React, { SetStateAction, useCallback } from 'react';

import { SearchUserParams } from '@/types/search-params';
import { ManagedUserInterface } from '@/types/managed-user';
import useManagedBlackUserQuery from '@/components/admin/ManagedUser/hooks/useManagedBlackUserQuery';

import ManagedUserCard from '../ManagedUserCard/ManagedUserCard';
import ObserverBottom from './ObserverBottom';

interface Props {
  searchParams: SearchUserParams;
  setSearchParams: React.Dispatch<SetStateAction<SearchUserParams>>;
}

const ManagedUserList = ({ searchParams, setSearchParams }: Props) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useManagedBlackUserQuery(searchParams);

  const getNextPage = useCallback(() => {
    setSearchParams((prev) => ({ ...prev, page: prev.page + 1 }));
    fetchNextPage();
  }, [setSearchParams, fetchNextPage]);

  if (isLoading) return <div>로딩 중</div>;

  if (isError) return <div>에러발생</div>;

  return (
    <>
      {data?.pages.map(({ content }) =>
        content?.map((data: ManagedUserInterface) => (
          <ManagedUserCard userData={data} key={data.id} />
        )),
      )}
      {hasNextPage && <ObserverBottom getNextPage={getNextPage} />}
    </>
  );
};

export default ManagedUserList;
