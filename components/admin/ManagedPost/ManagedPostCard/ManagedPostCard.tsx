import { useState } from 'react';

import useToggle from '@/hooks/useToggle';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import { ManagedPostData } from '@/types/managed-post';
import ManagedPostCardModal from './ManagedPostCardModal';

import * as Styled from './ManagedPostCard.styled';

interface ManagedPostCardProps {
  postData: ManagedPostData;
}

const AdminPostCard = ({ postData }: ManagedPostCardProps) => {
  const [menu, setMenu] = useState('');

  const [isModal, open, close] = useModal();
  const { toggle, onToggle, setOff } = useToggle(false);

  return (
    <Styled.ManagedPostCardContainer>
      <Styled.Title>{postData.title}</Styled.Title>
      <Styled.DropdownContainer onClick={() => onToggle()}>
        <SVGIcon icon="DotThree" />
        <Styled.DropdownList toggle={toggle}>
          <Styled.DropdownItem
            onClick={() => {
              setMenu('deletePost');
              open();
            }}
          >
            게시물 삭제
          </Styled.DropdownItem>
          <Styled.DropdownItem
            onClick={() => {
              setMenu('black');
              open();
            }}
          >
            작성자 블랙
          </Styled.DropdownItem>
        </Styled.DropdownList>
      </Styled.DropdownContainer>

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
    </Styled.ManagedPostCardContainer>
  );
};

export default AdminPostCard;
