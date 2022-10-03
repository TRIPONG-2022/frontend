import React, { SetStateAction, useCallback } from 'react';

import { SearchUserParams } from '@/types/search-params';
import { ManagedUserInterface } from '@/types/managed-user';
import useManagedUserQuery from '@/components/admin/ManagedUser/hooks/useManagedUserQuery';

import styled from 'styled-components';
import ManagedUserCard from '../ManagedUserCard/ManagedUserCard';
import ObserverBottom from './ObserverBottom';

interface Props {
  searchParams: SearchUserParams;
  setSearchParams: React.Dispatch<SetStateAction<SearchUserParams>>;
}

const ManagedUserList = ({ searchParams, setSearchParams }: Props) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useManagedUserQuery(searchParams);

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

const PageButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Btn = styled.button`
  display: block;
  padding: 0.5rem 0.5rem;

  border-radius: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary.hex};

  margin-bottom: 100rem;
`;

const BottomBar = styled.div``;

export default ManagedUserList;
