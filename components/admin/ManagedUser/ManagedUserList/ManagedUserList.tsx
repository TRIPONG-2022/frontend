import { getUsers } from '@/api/admin';
import useManagedUserQuery from '@/hooks/useManagedUserQuery';
import { isAllOf } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import ManagedUserCard from '../ManagedUserCard/ManagedUserCard';
import { ManagedUserInterface } from '@/types/managed-user';

const ManagedUserList = () => {
  // const { data, isLoading } = useManagedUserQuery();

  // console.log(data);

  const [pageNumber, setPageNumber] = useState<number>(0);

  const {
    data: infinity,
    fetchNextPage,
    fetchPreviousPage,
    hasPreviousPage,
    hasNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery(
    'list',
    async ({ pageParam = 0 }) => await getUsers({ size: 1, page: pageParam }),
    {
      staleTime: 6000,
      getNextPageParam: (_lastPage, pages) => {
        if (_lastPage.totalPages - 1 <= pageNumber) {
          return undefined;
        }

        return pageNumber + 1;
      },
      getPreviousPageParam: (_lastPage, pages) => {
        if (pageNumber < 1) {
          return undefined;
        }

        return pageNumber - 1;
      },
      onError: () => console.log('에러'),
    },
  );

  const hasNextQuery = () => {
    if (infinity?.pages[pageNumber + 1]) {
      setPageNumber((prev) => prev + 1);
    } else {
      fetchNextPage();
      setPageNumber((prev) => prev + 1);
    }
  };

  if (isLoading)
    return (
      <>
        <p>로딩</p>
      </>
    );

  if (isError)
    return (
      <>
        <p>에러발생</p>
      </>
    );

  return (
    <>
      {infinity?.pages[pageNumber] &&
        infinity?.pages[pageNumber]?.content?.map(
          (data: ManagedUserInterface) => (
            <ManagedUserCard userData={data} key={data.id} />
          ),
        )}

      <PageButtonContainer>
        <Btn
          onClick={() => {
            setPageNumber((prev) => prev - 1);
          }}
          disabled={!hasPreviousPage}
        >
          이전
        </Btn>
        <Btn onClick={() => hasNextQuery()} disabled={!hasNextPage}>
          다음
        </Btn>
      </PageButtonContainer>
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
`;

export default ManagedUserList;
