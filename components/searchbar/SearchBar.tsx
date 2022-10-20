import { useRouter } from 'next/router';
import { useState } from 'react';

import Portal from '@/components/shared/Portal/Portal';
import SVGIcon from '@/components/shared/SVGIcon';
import Select from '../shared/Select';

import * as Styled from './SearchBar.styled';

interface PoratalPageProps {
  setOff: () => void;
}

const SearchBar = ({ setOff }: PoratalPageProps) => {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState<string>('TITLE');

  const setState =
    (setSearchParams: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) =>
      setSearchParams((prev) => value);
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
                onClick={() => setOff()}
              />
            </Styled.DeleteIconWrapper>
            <Select
              id="1"
              options={[
                {
                  value: 'TITLE',
                  label: '제목',
                },
                {
                  value: 'CONTENT',
                  label: '내용',
                },

                {
                  value: 'USER',
                  label: '유저',
                },
              ]}
              defaultLabel="검색 타입"
              selectedValue={searchType}
              onChangeOption={setState(setSearchType)}
            />
          </Styled.SelectWrapper>
          <Styled.SearchInputWrapper>
            <Styled.SearchInput
              onChange={(e: any) => {
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
                onClick={() => router.push(`/search?keyword=${searchInput}`)}
                // onClick={} 어떤 것에 대한 검색을 주로 이룰지....
              />
            </Styled.SearchIconWrapper>
          </Styled.SearchInputWrapper>
        </Styled.SearchBarContainer>
      </Portal>
    </>
  );
};

export default SearchBar;
