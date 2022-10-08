import { useState } from 'react';

import useToggle from '@/hooks/useToggle';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import { ManagedPostInterface } from '@/types/managed-post';
import ManagedPostCardModal from './ManagedPostCardModal';

import * as Styled from './ManagedPostCard.styled';

interface ManagedPostCardProps {
  postData: ManagedPostInterface;
}

const AdminPostCard = ({ postData }: ManagedPostCardProps) => {
  const [menu, setMenu] = useState('');

  const [isModal, open, close] = useModal();
  const { toggle, onToggle, setOff } = useToggle(false);

  return (
    <Styled.Container>
      <Styled.Title>{postData.title}</Styled.Title>
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

      <Styled.BottomContainer>
        <Styled.NickName>{postData.nickName}</Styled.NickName>
        <Styled.CreatedDate>{postData.postCreatedDate}</Styled.CreatedDate>
      </Styled.BottomContainer>
      <Styled.Back toggle={toggle} onClick={() => setOff()} />

      <ManagedPostCardModal
        userId={postData.userId}
        postId={postData.postId}
        isModal={isModal}
        close={close}
        menu={menu}
      />
    </Styled.Container>
  );
};

export default AdminPostCard;
