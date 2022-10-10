import useToggle from '@/hooks/useToggle';
import UserSearch from './ManagedUserSearch/ManagedUserSearch';
import ManagedUserList from './ManagedUserList/ManagedUserList';
import ManagedBlackUserList from './ManagedUserList/ManagedBlackUserList';

import * as Styled from './ManagedUser.styled';
import SearchParamsContextProvider from './contexts/SearchParamsContex';

const ManagedUser = () => {
  const { toggle: isUserSearch, onToggle, setOff, setOn } = useToggle(true);

  return (
    <SearchParamsContextProvider>
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

            <UserSearch isUserSearch={isUserSearch} />

            {isUserSearch && <ManagedUserList />}
            {!isUserSearch && <ManagedBlackUserList />}
          </Styled.Container>
        </Styled.LayoutBody>
      </Styled.LayoutContainer>
    </SearchParamsContextProvider>
  );
};

export default ManagedUser;
