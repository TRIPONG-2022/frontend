import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Portal from '@/components/shared/Portal/Portal';
import SVGIcon from '@/components/shared/SVGIcon';
import Select from '@/components/shared/Select';
import ResponsiveContainer from '../shared/ResponsiveContainer';
import { SearchType } from '@/types/search';
import { offSearch } from '@/store/slice/searchSlice';
import { createSearchPostListLink } from '@/utils/post';

import * as Styled from './SearchBar.styled';

const SearchBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState<SearchType>(SearchType.TITLE);

  const setState = (value: SearchType) => setSearchType(SearchType[value]);

  return (
    <Portal selector="#portal">
      <Styled.SearchBarContainer>
        <ResponsiveContainer>
          <Styled.SearchHeaderWrapper>
            <Link href="/">
              <Styled.LogoLink>
                <SVGIcon
                  icon="LogoIcon"
                  width={110}
                  height={32}
                  color="#252525"
                />
              </Styled.LogoLink>
            </Link>
            <Styled.SearchHeaderCloseButton>
              <SVGIcon
                icon="DeleteIcon"
                aria-label="검색창 닫기"
                size={24}
                onClick={() => dispatch(offSearch())}
              />
            </Styled.SearchHeaderCloseButton>
          </Styled.SearchHeaderWrapper>
          <Styled.SearchContentWrapper>
            <Styled.SelectWrapper>
              <Select
                id="1"
                options={[
                  {
                    value: SearchType.TITLE,
                    label: '제목',
                  },
                  {
                    value: SearchType.CONTENT,
                    label: '내용',
                  },

                  {
                    value: SearchType.USER,
                    label: '유저',
                  },
                ]}
                defaultLabel="검색 타입"
                selectedValue={searchType}
                onChangeOption={setState}
              />
            </Styled.SelectWrapper>
            <Styled.SearchInputWrapper>
              <Styled.SearchInput
                placeholder="키워드를 입력해주세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchInput(e.target.value);
                }}
                value={searchInput}
              />
              <SVGIcon
                size={24}
                icon="SearchIcon"
                title="검색아이콘"
                aria-label="검색아이콘"
                color="#404040"
                onClick={() => {
                  dispatch(offSearch());
                  router.push(
                    createSearchPostListLink(searchType, searchInput),
                  );
                }}
              />
            </Styled.SearchInputWrapper>
          </Styled.SearchContentWrapper>
        </ResponsiveContainer>
      </Styled.SearchBarContainer>
    </Portal>
  );
};

export default SearchBar;
