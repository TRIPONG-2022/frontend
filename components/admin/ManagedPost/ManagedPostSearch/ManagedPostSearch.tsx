import { useState } from 'react';

import Select from '@/components/shared/Select';
import { SearchParams } from '@/types/search-params';
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
          | SearchParams
          | ((searchParams: SearchParams) => SearchParams),
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
    <Styled.Container>
      <Styled.SelectContainer>
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
      </Styled.SelectContainer>
      <Styled.SearchInput
        onChange={(e: any) => {
          setsearchInput(e.target.value);
        }}
        value={searchInput}
      />

      <Styled.SearchButton
        onClick={() =>
          isePostSearch ? handlePostSearch() : handleReportPostSearch()
        }
      >
        검색
      </Styled.SearchButton>
    </Styled.Container>
  );
};

export default ManagedPostSearch;
