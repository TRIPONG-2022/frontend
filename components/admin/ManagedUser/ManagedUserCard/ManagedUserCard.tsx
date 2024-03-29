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
    <Styled.ManagedUserCardContainer>
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
      <Styled.RoleWrapper>
        유저권한 :
        {userData.roles?.map(({ roleName }: { roleName: string }, index) => (
          <Styled.RoleSpan key={`${roleName}+ ${index}`}>
            {roleName}
          </Styled.RoleSpan>
        ))}
      </Styled.RoleWrapper>
      <Styled.CreateDate>
        가입날짜 :
        <Styled.CreateDateSpan>{userData.createdDate}</Styled.CreateDateSpan>
      </Styled.CreateDate>
      <Styled.DropdownContainer onClick={() => onToggle()}>
        <SVGIcon icon="DotThree" />
        <Styled.DropdownList toggle={toggle}>
          <Styled.Back toggle={toggle} onClick={() => setOff()} />
          <Styled.DropdownItem
            onClick={() => {
              setMenu('black');
              open();
            }}
          >
            블랙
          </Styled.DropdownItem>
          <Styled.DropdownItem
            onClick={() => {
              setMenu('roleChange');
              open();
            }}
          >
            권한변경
          </Styled.DropdownItem>
        </Styled.DropdownList>
      </Styled.DropdownContainer>

      <ManagedUserCardModal
        id={userData.id}
        isModal={isModal}
        close={close}
        menu={menu}
        selectRoles={selectRoles}
        setSelectRoles={setSelectRoles}
      />
    </Styled.ManagedUserCardContainer>
  );
};

export default ManagedUserCard;
