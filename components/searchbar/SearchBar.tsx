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
import Link from 'next/link';

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
          <Styled.Header>
            <Styled.LogoDiv onClick={() => dispatch(offSearch())}>
              <Link href="/">
                <a>
                  <SVGIcon icon={'LogoIcon'} width={120} height={50} />
                </a>
              </Link>
            </Styled.LogoDiv>
            <Styled.HeaderDelete>
              <SVGIcon
                width="2rem"
                height="2rem"
                icon="DeleteIcon"
                title="취소아이콘"
                aria-label="취소아이콘"
                onClick={() => dispatch(offSearch())}
              />
            </Styled.HeaderDelete>
          </Styled.Header>
          <Styled.Content>
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchInput(e.target.value);
                }}
                value={searchInput}
                placeholder="키워드를 넣어주세요"
              />

              <Styled.SearchIconWrapper>
                <SVGIcon
                  width="1.5rem"
                  height="1.55rem"
                  icon="SearchIcon"
                  title="검색아이콘"
                  aria-label="검색아이콘"
                  onClick={() => {
                    dispatch(offSearch());
                    router.push(
                      createSearchPostListLink(searchType, searchInput),
                    );
                  }}
                />
              </Styled.SearchIconWrapper>
            </Styled.SearchInputWrapper>
          </Styled.Content>
        </Styled.SearchBarContainer>
      </Portal>
    </>
  );
};

export default SearchBar;
