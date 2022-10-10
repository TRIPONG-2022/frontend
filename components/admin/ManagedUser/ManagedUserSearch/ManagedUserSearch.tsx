import React, { useState } from 'react';

import { SearchParams } from '@/types/search-params';
import useManagedUserQuery from '@/components/admin/ManagedUser/hooks/useManagedUserQuery';
import useManagedBlackUserQuery from '@/components/admin/ManagedUser/hooks/useManagedBlackUserQuery';
import Select from '@/components/shared/Select';
import useSearchParamsContext from '../contexts/useSearchParamsContext';

import * as Styled from './ManagedUserSearch.styled';

interface ManagedUserSearchProps {
  isUserSearch: boolean;
}

const ManagedUserSearch = ({ isUserSearch }: ManagedUserSearchProps) => {
  const { searchParams, setSearchParams } = useSearchParamsContext();

  const { refetch: userRefetch } = useManagedUserQuery(searchParams);

  const { refetch: blackRefetch } = useManagedBlackUserQuery(searchParams);

  const [searchInput, setsearchInput] = useState<string>('');

  const setState =
    (setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>) =>
    (value: string) =>
      setSearchParams((prev) => ({ ...prev, searchType: value }));

  const handleUserSearch = async () => {
    await setSearchParams((prev) => ({
      ...prev,
      keyword: searchInput,
    }));
    userRefetch();
  };

  const handleBlackUserSearch = async () => {
    await setSearchParams((prev) => ({
      ...prev,
      keyword: searchInput,
    }));
    blackRefetch();
  };

  return (
    <Styled.Container>
      <Styled.SelectContainer>
        <Select
          id="1"
          options={[
            {
              value: 'loginId',
              label: '로그인아이디',
            },
            {
              value: 'nickName',
              label: '닉네임',
            },
          ]}
          defaultLabel="검색 타입"
          selectedValue={searchParams.searchType}
          onChangeOption={setState(setSearchParams)}
        />
      </Styled.SelectContainer>
      <Styled.SearchInput
        onChange={(e: any) => {
          setsearchInput(e.target.value);
        }}
        value={searchInput}
      />

      <Styled.SearchButton
        onClick={() =>
          isUserSearch ? handleUserSearch() : handleBlackUserSearch()
        }
      >
        검색
      </Styled.SearchButton>
    </Styled.Container>
  );
};

export default ManagedUserSearch;
