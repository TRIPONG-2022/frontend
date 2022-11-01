import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Portal from '@/components/shared/Portal/Portal';
import SVGIcon from '@/components/shared/SVGIcon';
import { createSearchPostListLink } from '@/utils/post';
import Select from '@/components/shared/Select';

import * as Styled from './SearchBar.styled';
import { SearchType } from '@/types/search';
import { useDispatch } from 'react-redux';
import { offSearch } from '@/store/slice/searchSlice';

const SearchBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState<SearchType>(SearchType.TITLE);

  const setState = (value: SearchType) => setSearchType(SearchType[value]);

  return (
    <>
      <Portal selector="#portal">
        <Styled.SearchBarContainer>
          <Styled.SelectWrapper>
            <Styled.DeleteIconWrapper>
              <SVGIcon
                width="1em"
                height="1em"
                icon="ChevronLeftIcon"
                title="취소아이콘"
                aria-label="취소아이콘"
                onClick={() => dispatch(offSearch())}
              />
            </Styled.DeleteIconWrapper>
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchInput(e.target.value);
              }}
              value={searchInput}
            />

            <Styled.SearchIconWrapper>
              <SVGIcon
                width="1.5em"
                height="1.55em"
                icon="SearchIcon"
                title="검색아이콘"
                aria-label="검색아이콘"
                onClick={() =>
                  router.push(createSearchPostListLink(searchType, searchInput))
                }
              />
            </Styled.SearchIconWrapper>
          </Styled.SearchInputWrapper>
        </Styled.SearchBarContainer>
      </Portal>
    </>
  );
};

export default SearchBar;
