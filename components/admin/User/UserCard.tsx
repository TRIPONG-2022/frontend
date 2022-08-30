import { blackUser, roleUser } from '@/api/admin';
import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import SVGIcon from '@/components/shared/SVGIcon';
import { menuObj } from '@/constants/admin';
import useModal from '@/hooks/useModal';
import React, { useState } from 'react';
import * as Styled from './UserCard.styled';
import UserRoleChange from './UserRoleChange';

// 임시
const UserCard = ({ userData }: any) => {
  const [isModal, open, close] = useModal();

  const [activeMenu, setActiveMenu] = useState(false);
  const [menu, setMenu] = useState('');
  const [selectRoles, setSelectRoles] = useState<string[]>([]);

  const black = async (userId: number) => {
    const { isError } = await blackUser(userId);

    if (!isError) close();
  };

  const changeRole = async (userId: number) => {
    const { isError } = await roleUser(userId, selectRoles);

    if (!isError) close();
  };

  // 이렇게 구조를 짠거를 어떻게 바꿔야지...

  return (
    <Styled.Container>
      <Styled.NameWrapper>
        <Styled.NickName>{userData.nickName}</Styled.NickName>
        <Styled.Name>
          {userData.name ? userData.name : '추가정보 입력X'}
        </Styled.Name>
      </Styled.NameWrapper>
      <Styled.LoginId>{userData.loginId}</Styled.LoginId>
      <Styled.CreateDate>가입날짜 : {userData.createdDate}</Styled.CreateDate>
      <Styled.Menu onClick={() => setActiveMenu((prev) => !prev)}>
        <SVGIcon icon="DotThree" />
        <Styled.MenuUl activeMenu={activeMenu}>
          <Styled.MenuLi
            onClick={() => {
              setMenu('black');
              open();
            }}
          >
            블랙
          </Styled.MenuLi>
          <Styled.MenuLi
            onClick={() => {
              setMenu('roleChange');
              open();
            }}
          >
            권한변경
          </Styled.MenuLi>
        </Styled.MenuUl>
      </Styled.Menu>
      {/* <Styled.Back
        activeMenu={activeMenu}
        onClick={() => setActiveMenu(false)}
      /> 
          해당 코드로 menu 가 active 되어있는 상태에서 menu와 관계없는 바깥구역을 클릭하면 active가 false로 변환되게끔 하고싶었다.
      */}

      <Modal isModal={isModal} close={close}>
        <Modal.Title>{menuObj[menu]?.title}</Modal.Title>
        {menu == 'roleChange' && (
          <UserRoleChange
            selectRoles={selectRoles}
            setSelectRoles={setSelectRoles}
          />
        )}
        <Modal.BtnContainers>
          <Button
            size="lg"
            type="submit"
            css={`
              width: 100%;
              margin-top: 2rem;
            `}
            onClick={() =>
              menuObj[menu]?.onClick(userData.id, {
                black,
                changeRole,
              })
            }
          >
            예
          </Button>
          <Button
            size="lg"
            type="button"
            variant="outline"
            css={`
              width: 100%;
              margin-top: 2rem;
            `}
            onClick={() => {
              setSelectRoles([]);
              close();
            }}
          >
            닫기
          </Button>
        </Modal.BtnContainers>
      </Modal>
    </Styled.Container>
  );
};

export default UserCard;
