import { useState } from 'react';

import useToggle from '@/hooks/useToggle';
import { SearchParams } from '@/types/search-params';
import UserSearch from './ManagedUserSearch/ManagedUserSearch';
import ManagedUserList from './ManagedUserList/ManagedUserList';
import ManagedBlackUserList from './ManagedUserList/ManagedBlackUserList';

import * as Styled from './ManagedUser.styled';

const ManagedUser = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchType: 'loginId',
    keyword: '',
    size: 3,
  });

  const { toggle: isUserSearch, onToggle, setOff, setOn } = useToggle(true);

  return (
    <Styled.LayoutContainer>
      <Styled.LayoutSideMenu>
        <Styled.SideMenu></Styled.SideMenu>
      </Styled.LayoutSideMenu>
      <Styled.LayoutBody>
        <Styled.Container>
          <Styled.Title>유저목록</Styled.Title>

          <Styled.GetUsersBtn
            active={isUserSearch}
            onClick={() => {
              setOn();
            }}
          >
            전체 유저 조회
          </Styled.GetUsersBtn>
          <Styled.GetUsersBtn
            active={!isUserSearch}
            onClick={() => {
              setOff();
            }}
          >
            신고된 유저 조회
          </Styled.GetUsersBtn>

          <UserSearch
            isUserSearch={isUserSearch}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />

          {isUserSearch && (
            <ManagedUserList
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          )}
          {!isUserSearch && (
            <ManagedBlackUserList
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          )}
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default ManagedUser;
