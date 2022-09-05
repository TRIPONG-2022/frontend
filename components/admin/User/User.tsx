import styled from 'styled-components';
import { getReportUsers, getUsers } from '@/api/admin';
import { useState } from 'react';
import { useEffect } from 'react';
import * as Styled from './User.styled';
import UserCard from './UserCard';
import useModal from '@/hooks/useModal';
import UserSearch from './UserSearch';
import { useQuery, useQueryClient } from 'react-query';

interface DataType {
  id: number;
  name: string;
  loginId: string;
  nickName: string;
  createdDate: string;
  roles: { roleName: string }[];
  reportType?: string;
  reporterName?: string;
}

const User = () => {
  const [userList, setUserList] = useState<DataType[]>([]);
  const [activeBtn, setActiveBtn] = useState(true);

  const { data } = useQuery('userList', () => getUsers({}), {
    staleTime: Infinity, // 5초
    cacheTime: Infinity, // 제한 없음
  });

  const queryClient = useQueryClient();

  console.log(queryClient);
  // queryClient.setQueryData('userList', data);
  const test = queryClient.getQueryData('userList');
  console.log(test);

  const [isModal, open, close] = useModal();

  const getUserList = async () => {
    const { data } = await getUsers({});

    if (data) {
      setUserList(data.content);
    }
  };

  const getReportUserList = async () => {
    const { data } = await getReportUsers({});

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

          {userList?.map((data: DataType) => (
            <UserCard userData={data} key={data.id} />
          ))}
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default User;
