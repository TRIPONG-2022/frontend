import React, { useState } from 'react';

import { ManagedSearchParams } from '@/types/search-params';
import useManagedUserQuery from '@/components/admin/ManagedUser/hooks/useManagedUserQuery';
import useManagedBlackUserQuery from '@/components/admin/ManagedUser/hooks/useManagedBlackUserQuery';
import Select from '@/components/shared/Select';
import SVGIcon from '@/components/shared/SVGIcon';
import { useUserSearchParamsContext } from '../contexts/UserSearchParamsContext';

import * as Styled from './ManagedUserSearch.styled';

interface ManagedUserSearchProps {
  isUserSearch: boolean;
}

const ManagedUserSearch = ({ isUserSearch }: ManagedUserSearchProps) => {
  const { searchParams, setSearchParams } =
    useUserSearchParamsContext('ManagedUserSearch');

  const { refetch: userRefetch } = useManagedUserQuery(searchParams);

  const { refetch: blackRefetch } = useManagedBlackUserQuery(searchParams);

  const [searchInput, setsearchInput] = useState<string>('');

  const setState =
    (
      setSearchParams: React.Dispatch<
        React.SetStateAction<ManagedSearchParams>
      >,
    ) =>
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
    <Styled.ManagedUserSearchContainer>
      <Styled.SelectWrapper>
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
      </Styled.SelectWrapper>

      <Styled.SearchInputWrapper>
        <Styled.SearchInput
          type="search"
          placeholder="Search"
          onChange={(e: any) => {
            setsearchInput(e.target.value);
          }}
          value={searchInput}
        />
        <Styled.SearchIconWrapper>
          <SVGIcon
            width="1.25em"
            height="1.25em"
            icon="SearchIcon"
            title="검색아이콘"
            aria-label="검색아이콘"
            onClick={() =>
              isUserSearch ? handleUserSearch() : handleBlackUserSearch()
            }
          />
        </Styled.SearchIconWrapper>
      </Styled.SearchInputWrapper>
    </Styled.ManagedUserSearchContainer>
  );
};

export default ManagedUserSearch;
