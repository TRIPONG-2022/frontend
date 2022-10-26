import React, { useState } from 'react';

import Select from '@/components/shared/Select';
import { ManagedSearchParams } from '@/types/search-params';
import SVGIcon from '@/components/shared/SVGIcon';
import useManagedPostQuery from '../hooks/useManagedPostQuery';
import useManagedReportPostQuery from '../hooks/useManagedReportPostQuery';

import * as Styled from './ManagedPostSearch.styled';
import { usePostSearchParamsContext } from '../contexts/PostSearchParamsContext';

interface ManagedPostSearchProps {
  isePostSearch: boolean;
}

const ManagedPostSearch = ({ isePostSearch }: ManagedPostSearchProps) => {
  const { searchParams, setSearchParams } =
    usePostSearchParamsContext('ManagedPostSearch');

  const [searchInput, setsearchInput] = useState<string>('');

  const { refetch: postRefetch } = useManagedPostQuery(searchParams);

  const { refetch: reportPostRefetch } =
    useManagedReportPostQuery(searchParams);

  const setState =
    (
      setSearchParams: (
        searchParams:
          | ManagedSearchParams
          | ((searchParams: ManagedSearchParams) => ManagedSearchParams),
      ) => void,
    ) =>
    (value: string) =>
      setSearchParams((prev) => ({ ...prev, searchType: value }));

  const handlePostSearch = async () => {
    await setSearchParams((prev) => ({
      ...prev,
      keyword: searchInput,
    }));
    postRefetch();
  };

  const handleReportPostSearch = async () => {
    await setSearchParams((prev) => ({
      ...prev,
      keyword: searchInput,
    }));
    reportPostRefetch();
  };

  return (
    <Styled.ManagedPostSearchContainer>
      <Styled.SelectWrapper>
        <Select
          id="1"
          options={[
            {
              value: 'title',
              label: '제목',
            },
            {
              value: 'loginId',
              label: '아이디',
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              isePostSearch ? handlePostSearch() : handleReportPostSearch()
            }
          />
        </Styled.SearchIconWrapper>
      </Styled.SearchInputWrapper>
    </Styled.ManagedPostSearchContainer>
  );
};

export default ManagedPostSearch;
