import { useRouter } from 'next/router';

import Portal from '@/components/shared/Portal/Portal';
import SVGIcon from '@/components/shared/SVGIcon';

import * as Styled from './SearchBar.styled';

interface PoratalPageProps {
  setOff: () => void;
}

const SearchBar = ({ setOff }: PoratalPageProps) => {
  const router = useRouter();

  return (
    <>
      <Portal selector="#portal">
        <Styled.SearchBarContainer>
          <Styled.SearchInput autoFocus />
          <Styled.SearchIconWrapper>
            <SVGIcon
              width="1.5em"
              height="1.55em"
              icon="SearchIcon"
              title="검색아이콘"
              aria-label="검색아이콘"
              // onClick={} 어떤 것에 대한 검색을 주로 이룰지....
            />
          </Styled.SearchIconWrapper>
          <Styled.DeleteIconWrapper>
            <SVGIcon
              width="1.5em"
              height="1.5em"
              icon="DeleteIcon"
              title="취소아이콘"
              aria-label="취소아이콘"
              onClick={() => setOff()}
            />
          </Styled.DeleteIconWrapper>
        </Styled.SearchBarContainer>
      </Portal>
    </>
  );
};

export default SearchBar;
