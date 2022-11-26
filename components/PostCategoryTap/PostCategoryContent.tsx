import { useRef, SetStateAction, MutableRefObject } from 'react';

import { PostCategory } from '@/types/post';

import * as Styled from './PostCategoryTap.styled';

interface PostCategoryContentProps {
  active: boolean;
  label: string;
  keyValue: string;
  handleTapScrollX: (
    targetButton: React.MutableRefObject<HTMLButtonElement | null>,
  ) => void;
  setPostCategory: React.Dispatch<SetStateAction<PostCategory | ''>>;
}

const PostCategoryContent = ({
  active,
  label,
  keyValue,
  handleTapScrollX,
  setPostCategory,
}: PostCategoryContentProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Styled.Button
      ref={buttonRef}
      active={active}
      onClick={() => {
        setPostCategory(keyValue as PostCategory);
        handleTapScrollX(buttonRef);
      }}
    >
      {label}
    </Styled.Button>
  );
};

export default PostCategoryContent;
