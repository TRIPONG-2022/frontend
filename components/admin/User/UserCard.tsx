import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import { useState } from 'react';
import * as Styled from './UserCard.styled';

// 임시
const UserCard = ({ userData }: any) => {
  const [isModal, open, close] = useModal();

  const [activeToggle, setActiveToggle] = useState(false);
  const [toggle, setToggle] = useState('');

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
      <Styled.Menu onClick={() => open()}>
        <SVGIcon icon="DotThree" />
      </Styled.Menu>
      <Modal isModal={isModal} close={close}>
        <Modal.Title>해당 유저를 블랙하시겠습니까?</Modal.Title>
        <Modal.BtnContainers>
          <Button
            size="lg"
            type="submit"
            css={`
              width: 100%;
              margin-top: 2rem;
            `}
            onClick={() => alert('테스트')}
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
