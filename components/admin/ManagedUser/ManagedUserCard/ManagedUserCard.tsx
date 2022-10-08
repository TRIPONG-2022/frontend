import React, { useState } from 'react';

import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import useToggle from '@/hooks/useToggle';
import { ManagedUserData } from '@/types/managed-user';
import ManagedUserCardModal from './ManagedUserCardModal';

import * as Styled from './ManagedUserCard.styled';

interface ManagedUserCardProps {
  userData: ManagedUserData;
}
const ManagedUserCard = ({ userData }: ManagedUserCardProps) => {
  const [menu, setMenu] = useState('');
  const [selectRoles, setSelectRoles] = useState<string[]>([]);

  const [isModal, open, close] = useModal();
  const { toggle, onToggle, setOff } = useToggle(false);

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
      <Styled.MenuContainer onClick={() => onToggle()}>
        <SVGIcon icon="DotThree" />
        <Styled.MenuList toggle={toggle}>
          <Styled.MenuItem
            onClick={() => {
              setMenu('black');
              open();
            }}
          >
            블랙
          </Styled.MenuItem>
          <Styled.MenuItem
            onClick={() => {
              setMenu('roleChange');
              open();
            }}
          >
            권한변경
          </Styled.MenuItem>
        </Styled.MenuList>
      </Styled.MenuContainer>
      <Styled.Back toggle={toggle} onClick={() => setOff()} />

      <ManagedUserCardModal
        id={userData.id}
        isModal={isModal}
        close={close}
        menu={menu}
        selectRoles={selectRoles}
        setSelectRoles={setSelectRoles}
      />
    </Styled.Container>
  );
};

export default ManagedUserCard;
