import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { getReportUsers, getUsers } from '@/api/admin';
import { ManagedUserInterface } from '@/types/managed-user';

import * as Styled from './ManagedUser.styled';
import ManagedUserCard from './ManagedUserCard/ManagedUserCard';
import UserSearch from './ManagedUserSearch/ManagedUserSearch';
import ManagedUserList from './ManagedUserList/ManagedUserList';

const ManagedUser = () => {
  const [userList, setUserList] = useState<ManagedUserInterface[]>([]);
  const [activeBtn, setActiveBtn] = useState(true);

  const getUserList = async () => {
    const data = await getUsers();

    if (data) {
      setUserList(data.content);
    }
  };

  const getReportUserList = async () => {
    const { data } = await getReportUsers();

    if (data) {
      setUserList(data.content);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Styled.LayoutContainer>
      <Styled.LayoutSideMenu>
        <Styled.SideMenu></Styled.SideMenu>
      </Styled.LayoutSideMenu>
      <Styled.LayoutBody>
        <Styled.Container>
          <Styled.Title>유저목록</Styled.Title>

          <Styled.GetUsersBtn
            active={activeBtn}
            onClick={() => {
              setActiveBtn((prev) => !prev);
              getUserList();
            }}
          >
            전체 유저 조회
          </Styled.GetUsersBtn>
          <Styled.GetUsersBtn
            active={!activeBtn}
            onClick={() => {
              setActiveBtn((prev) => !prev);
              getReportUserList();
            }}
          >
            신고된 유저 조회
          </Styled.GetUsersBtn>

          <UserSearch setUserList={setUserList} isUserSearch={activeBtn} />
          {/* 
          {userList?.map((data: ManagedUserInterface) => (
            <ManagedUserCard userData={data} key={data.id} />
          ))} */}
          <ManagedUserList />
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default ManagedUser;
