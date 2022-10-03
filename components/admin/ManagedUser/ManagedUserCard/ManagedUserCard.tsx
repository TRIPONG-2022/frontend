import React, { useCallback, useState } from 'react';

import { roleUser } from '@/api/admin';
import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import SVGIcon from '@/components/shared/SVGIcon';
import { ADMINUSER_MENU } from '@/constants/admin';
import useModal from '@/hooks/useModal';
import useToggle from '@/hooks/useToggle';
import { ManagedUserInterface } from '@/types/managed-user';

import * as Styled from './ManagedUserCard.styled';
import ManagedUserRoleChange from '../ManagedUserRoleChange/ManagedUserRoleChange';

import useBlackUser from '../hooks/useBlackUser';

interface Props {
  userData: ManagedUserInterface;
}
const ManagedUserCard = ({ userData }: Props) => {
  const [menu, setMenu] = useState('');
  const [selectRoles, setSelectRoles] = useState<string[]>([]);

  const [isModal, open, close] = useModal();
  const { toggle, onToggle, setOff } = useToggle(false);

  const { mutate: black } = useBlackUser();

  const changeRole = useCallback(
    async (userId: number) => {
      const { isError } = await roleUser(userId, selectRoles);

      if (!isError) close();
    },
    [selectRoles, close],
  );

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
        {userData.roles?.map(({ roleName }: { roleName: string }, index) => (
          <Styled.RoleSpan key={`${roleName}+ ${index}`}>
            {roleName}
          </Styled.RoleSpan>
        ))}
      </Styled.RoleText>
      <Styled.CreateDate>
        가입날짜 :
        <Styled.CreateDateSpan>{userData.createdDate}</Styled.CreateDateSpan>
      </Styled.CreateDate>
      <Styled.Menu onClick={() => onToggle()}>
        <SVGIcon icon="DotThree" />
        <Styled.MenuUl toggle={toggle}>
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
      <Styled.Back toggle={toggle} onClick={() => setOff()} />

      <Modal isModal={isModal} close={close}>
        <Modal.Title>{ADMINUSER_MENU[menu]?.title}</Modal.Title>
        {menu == 'roleChange' && (
          <ManagedUserRoleChange
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
            onClick={() => {
              ADMINUSER_MENU[menu]?.onClick(userData.id, {
                black,
                changeRole,
              });
              close();
            }}
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

export default ManagedUserCard;
