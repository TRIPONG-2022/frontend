import React, { useState } from 'react';
import { getReportUsers, getUsers } from '@/api/admin';
import styled from 'styled-components';
import { prepareServerlessUrl } from 'next/dist/server/base-server';
import { SearchUserParams } from '@/types/search-params';
import useManagedUserQuery from '@/hooks/useManagedUserQuery';
import useManagedBlackUserQuery from '@/hooks/useManagedBlackUserQuery';
import Select from '@/components/shared/Select';
interface DataType {
  id: number;
  name: string;
  loginId: string;
  nickName: string;
  createdDate: string;
  roles: { roleName: string }[];
  reportType?: string;
  reporterName?: string;
}

interface Props {
  setUserList: React.Dispatch<React.SetStateAction<DataType[]>>;
  isUserSearch: boolean;
}

const UserSearch = ({ setUserList, isUserSearch }: Props) => {
  const [searchValue, setSearchValue] = useState<SearchUserParams>({
    searchType: 'loginId',
    keyword: '',
  });

  const { refetch: userRefetch } = useManagedUserQuery(searchValue);

  const { refetch: blackRefetch } = useManagedBlackUserQuery(searchValue);

  const setState =
    (setSearchValue: React.Dispatch<React.SetStateAction<SearchUserParams>>) =>
    (value: string) =>
      setSearchValue((prev) => ({ ...prev, searchType: value }));

  return (
    <Container>
      <SelectContainer>
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
          selectedValue={searchValue.searchType}
          onChangeOption={setState(setSearchValue)}
        />
      </SelectContainer>
      <SearchInput
        onChange={(e: any) => {
          setSearchValue((prev) => ({ ...prev, keyword: e.target.value }));
        }}
        value={searchValue.keyword}
      />

      <SearchButton
        onClick={() => (isUserSearch === true ? userRefetch() : blackRefetch())}
      >
        검색
      </SearchButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

const SelectContainer = styled.div`
  min-width: 10rem;
`;

const SearchInput = styled.input`
  border: 2px solid;
  border-radius: 1rem;
  padding: 1.25rem;

  font-size: 1rem;
  color: #000000;
`;

const SearchButton = styled.button`
  padding: 1rem;
  border-radius: 1rem;

  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
`;

export default UserSearch;
