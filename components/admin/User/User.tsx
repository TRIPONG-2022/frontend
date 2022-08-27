import styled from 'styled-components';
import { getReportUsers, getUsers } from '@/api/admin';
import { useState } from 'react';
import { useEffect } from 'react';
import * as Styled from './User.styled';
import UserCard from './UserCard';
import useModal from '@/hooks/useModal';

interface DataType {
  id: number;
  name: string;
  loginId: string;
  nickName: string;
  createDate: string;
  roles: { roleName: string }[];
}

const User = () => {
  const [userList, setUserList] = useState([]);
  const [activeBtn, setActiveBtn] = useState(true);
  const [isModal, open, close] = useModal();
  const getUserList = async () => {
    const { data } = await getUsers();
    console.log(data);
    if (data) {
      setUserList(data.content);
    }
  };

  const getReportUserList = async () => {
    const { data } = await getReportUsers();
    console.log(data);
    if (data) {
      setUserList(data.content);
    }
  };
  console.log(userList);
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
          {userList?.map((data: DataType) => (
            <UserCard userData={data} key={data.id} />
          ))}
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default User;
