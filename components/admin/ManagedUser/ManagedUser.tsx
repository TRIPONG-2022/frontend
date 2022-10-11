import useToggle from '@/hooks/useToggle';
import UserSearch from './ManagedUserSearch/ManagedUserSearch';
import ManagedUserList from './ManagedUserList/ManagedUserList';
import ManagedBlackUserList from './ManagedUserList/ManagedBlackUserList';
import UserSearchParamsContextProvider from './contexts/UserSearchParamsContext';

import * as Styled from './ManagedUser.styled';

const ManagedUser = () => {
  const { toggle: isUserSearch, onToggle, setOff, setOn } = useToggle(true);

  return (
    <UserSearchParamsContextProvider>
      <Styled.LayoutContainer>
        <Styled.LayoutSideMenu>
          <Styled.SideMenu></Styled.SideMenu>
        </Styled.LayoutSideMenu>
        <Styled.LayoutBody>
          <Styled.ManagedUserContainer>
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
          </Styled.ManagedUserContainer>
        </Styled.LayoutBody>
      </Styled.LayoutContainer>
    </UserSearchParamsContextProvider>
  );
};

export default ManagedUser;
