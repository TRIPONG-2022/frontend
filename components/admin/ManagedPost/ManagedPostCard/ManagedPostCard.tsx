import useToggle from '@/hooks/useToggle';

import styled from 'styled-components';
import * as Styled from './ManagedPostCard.styled';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import ManagedPostCardModal from './ManagedPostCardModal';
import { useState } from 'react';

interface PostType {
  postData: {
    userId: number;
    postId: number;
    title: string;
    loginId: string;
    nickName: string;
    postCreatedDate: string;
  };
}

const AdminPostCard = ({ postData }: PostType) => {
  const [menu, setMenu] = useState('');

  const [isModal, open, close] = useModal();
  const { toggle, onToggle, setOff } = useToggle(false);

  return (
    <Container>
      <Title>{postData.title}</Title>
      <Styled.MenuContainer onClick={() => onToggle()}>
        <SVGIcon icon="DotThree" />
        <Styled.MenuList toggle={toggle}>
          <Styled.MenuItem
            onClick={() => {
              setMenu('deletePost');
              open();
            }}
          >
            게시물 삭제
          </Styled.MenuItem>
          <Styled.MenuItem
            onClick={() => {
              setMenu('black');
              open();
            }}
          >
            작성자 블랙
          </Styled.MenuItem>
        </Styled.MenuList>
      </Styled.MenuContainer>

      <BottomContainer>
        <NickName>{postData.nickName}</NickName>
        <CreatedDate>{postData.postCreatedDate}</CreatedDate>
      </BottomContainer>
      <Styled.Back toggle={toggle} onClick={() => setOff()} />

      <ManagedPostCardModal
        userId={postData.userId}
        postId={postData.postId}
        isModal={isModal}
        close={close}
        menu={menu}
      />
    </Container>
  );
};

export default AdminPostCard;

const Container = styled.li`
  position: relative;
  padding: 1.5rem;

  border: 2px solid;
  border-color: black;
  border-radius: 1rem;

  margin-bottom: 1rem;
`;

const Title = styled.p`
  margin-bottom: 1.25rem;

  font-size: 1.25rem;
  font-weight: 700;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const NickName = styled.span`
  font-size: 0.875rem;
`;

const CreatedDate = styled.span`
  font-size: 0.875rem;
`;
