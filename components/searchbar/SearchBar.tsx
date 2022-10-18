import styled from 'styled-components';

import Portal from '@/components/shared/Portal/Portal';
import SVGIcon from '@/components/shared/SVGIcon';

interface PoratalPageProps {
  setOff: any;
}

const SearchBar = ({ setOff }: PoratalPageProps) => {
  return (
    <>
      <Portal selector="#portal">
        <Container>
          <SearchInput autoFocus />
          <SearchIconWrapper>
            <SVGIcon
              width="1.5em"
              height="1.55em"
              icon="SearchIcon"
              title="검색아이콘"
              aria-label="검색아이콘"
              // onClick={} 어떤 것에 대한 검색을 주로 이룰지....
            />
          </SearchIconWrapper>
          <DeleteIconWrapper>
            <SVGIcon
              width="1.5em"
              height="1.5em"
              icon="DeleteIcon"
              title="취소아이콘"
              aria-label="취소아이콘"
              onClick={() => setOff(false)}
            />
          </DeleteIconWrapper>
        </Container>
      </Portal>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0.375rem;
  left: 0;
  right: 0;

  /* position: relative; */
  z-index: 9999;
`;

const SearchInput = styled.input`
  width: calc(100% - 7rem);
  border: 2px solid;
  border-radius: 1.5rem;
  padding: 1.25rem 3.5rem;

  font-size: 1.25rem;
  font-weight: 600;
  outline: none;
  box-sizing: content-box;
  transition: all 0.5s;
  ::-webkit-search-cancel-button {
    display: none;
  }

  background-color: #fff;
  border-color: ${({ theme }) => theme.colors.primary.hex};
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -55%);
`;

const DeleteIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translate(0, -55%);
`;

export default SearchBar;
