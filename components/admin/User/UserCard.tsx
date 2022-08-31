import { blackUser, roleUser } from '@/api/admin';
import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import SVGIcon from '@/components/shared/SVGIcon';
import { menuObj } from '@/constants/admin';
import useModal from '@/hooks/useModal';
import React, { useCallback, useState } from 'react';
import * as Styled from './UserCard.styled';
import UserRoleChange from './UserRoleChange';

interface DataType {
  userData: {
    id: number;
    name: string;
    loginId: string;
    nickName: string;
    createdDate: string;
    roles: { roleName: string }[];
    reportType?: string;
    reporterName?: string;
  };
}
const UserCard = ({ userData }: DataType) => {
  const [isModal, open, close] = useModal();

  const [activeMenu, setActiveMenu] = useState(false);
  const [menu, setMenu] = useState('');
  const [selectRoles, setSelectRoles] = useState<string[]>([]);

  const black = useCallback(
    async (userId: number) => {
      const { isError } = await blackUser(userId);

      if (!isError) close();
    },
    [close],
  );

  const changeRole = useCallback(
    async (userId: number) => {
      const { isError } = await roleUser(userId, selectRoles);

      if (!isError) close();
    },
    [selectRoles, close],
  );

  // 이렇게 구조를 짠거를 어떻게 바꿔야지...

  return (
    <Styled.Container>
      {userData.reporterName && (
        <Styled.ReportWrapper>
          <Styled.Reporter>신고자 : {userData.reporterName}</Styled.Reporter>
          <Styled.ReportType>
            신고 유형 : {userData.reportType}
          </Styled.ReportType>
        </Styled.ReportWrapper>
      )}
      <Styled.NameWrapper>
        <Styled.NickName isBlack={!!userData.reporterName}>
          {userData.nickName}
        </Styled.NickName>
        <Styled.Name>
          {userData.name ? userData.name : '추가정보 입력X'}
        </Styled.Name>
      </Styled.NameWrapper>
      <Styled.LoginId>{userData.loginId}</Styled.LoginId>
      <Styled.RoleText>
        유저권한 :
        {userData.roles?.map(({ roleName }: { roleName: string }) => (
          <Styled.RoleSpan key={roleName}>{roleName}</Styled.RoleSpan>
        ))}
      </Styled.RoleText>
      <Styled.CreateDate>
        가입날짜 :
        <Styled.CreateDateSpan>{userData.createdDate}</Styled.CreateDateSpan>
      </Styled.CreateDate>
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
      <Styled.Back
        activeMenu={activeMenu}
        onClick={() => setActiveMenu(false)}
      />

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
