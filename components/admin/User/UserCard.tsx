import { blackUser } from '@/api/admin';
import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import { useState } from 'react';
import * as Styled from './UserCard.styled';
import UserRoleChange from './UserRoleChange';

// 임시
const UserCard = ({ userData }: any) => {
  const [isModal, open, close] = useModal();

  const [activeMenu, setActiveMenu] = useState(false);
  const [menu, setMenu] = useState('');

  interface MenuTupe {
    [key: string]: {
      title: string;
      onClick: (userId: any) => void;
      roles?: any;
    };
  }

  const menuObj: MenuTupe = {
    black: {
      title: '해당 유저를 블랙하시겠습니까?',
      onClick: (userId) => black(userId),
    },
    roleChange: {
      title: '해당 유저의 권한을 변경하시겠습니까?',
      onClick: (userId) => alert(`${userId}`),
      roles: <UserRoleChange />,
    },
  };

  const black = async (userId: number) => {
    const { isError } = await blackUser(userId);

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
      <Modal isModal={isModal} close={close}>
        <Modal.Title>{menuObj[menu]?.title}</Modal.Title>
        {menuObj[menu]?.roles}
        <Modal.BtnContainers>
          <Button
            size="lg"
            type="submit"
            css={`
              width: 100%;
              margin-top: 2rem;
            `}
            onClick={() => menuObj[menu]?.onClick(userData.id)}
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
            onClick={() => close()}
          >
            닫기
          </Button>
        </Modal.BtnContainers>
      </Modal>
    </Styled.Container>
  );
};

export default UserCard;
