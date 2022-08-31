import React, { useState } from 'react';
import { getReportUsers, getUsers } from '@/api/admin';
import styled from 'styled-components';
import { prepareServerlessUrl } from 'next/dist/server/base-server';

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

interface SearchQueryType {
  searchType: string;
  keyword: string;
}

const UserSearch = ({ setUserList, isUserSearch }: Props) => {
  const [searchValue, setSearchValue] = useState({
    searchType: 'loginId',
    keyword: '',
  });

  const getUserList = async ({ searchType, keyword }: SearchQueryType) => {
    const { data } = await getUsers({ searchType, keyword });
    console.log(data);
    if (data) {
      setUserList(data.content);
    }
  };

  const getReportUserList = async ({
    searchType,
    keyword,
  }: SearchQueryType) => {
    const { data } = await getReportUsers({ searchType, keyword });
    console.log(data);
    if (data) {
      setUserList(data.content);
    }
  };

  return (
    <InputWrapper>
      <SearchCategoryWrapper>
        <SearchCategory
          onClick={() =>
            setSearchValue((prev) => ({ ...prev, searchType: 'loginId' }))
          }
        >
          loginId
        </SearchCategory>

        <SearchCategory
          onClick={() =>
            setSearchValue((prev) => ({ ...prev, searchType: 'nickName' }))
          }
        >
          nickName
        </SearchCategory>
      </SearchCategoryWrapper>

      <SearchInput
        onChange={(e: any) => {
          setSearchValue((prev) => ({ ...prev, keyword: e.target.value }));
        }}
        value={searchValue.keyword}
      />

      <SearchButton
        onClick={() =>
          isUserSearch === true
            ? getUserList(searchValue)
            : getReportUserList(searchValue)
        }
      >
        검색
      </SearchButton>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;

  margin-bottom: 2rem;
`;

const SearchCategoryWrapper = styled.ul``;

const SearchCategory = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 1rem;

  background-color: gray;
  cursor: pointer;
`;

const SearchInput = styled.input``;

const SearchButton = styled.button`
  padding: 1rem;
  border-radius: 1rem;

  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
`;

export default UserSearch;
