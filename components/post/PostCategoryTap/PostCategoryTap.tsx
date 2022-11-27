import React, { SetStateAction, useEffect, useMemo, useRef } from 'react';

import { POST_CATEGORIES } from '@/constants/post-category';
import { PostCategory } from '@/types/post';
import PostCategoryContent from './PostCategoryContent';
import useScrollUp from '@/hooks/useScroll';

import * as Styled from './PostCategoryTap.styled';

interface PostCategoryTapProps {
  postCategory: string;
  setPostCategory: React.Dispatch<SetStateAction<PostCategory | ''>>;
}

const PostCategoryTap = ({
  postCategory,
  setPostCategory,
}: PostCategoryTapProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const tapScrollX = useRef<number | undefined>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [scrollDirection, scrollY] = useScrollUp();

  const visibleOnScroll = useMemo(
    () => scrollY > 160 && scrollDirection === 'UP',
    [scrollY, scrollDirection],
  );

  function handleTapScrollX(
    targetButton: React.MutableRefObject<HTMLButtonElement | null>,
  ) {
    tapScrollX.current = targetButton.current?.getBoundingClientRect().x;
    containerRef.current?.scrollTo({
      behavior: 'smooth',
      left: containerRef.current?.scrollLeft + tapScrollX.current! - 20,
    });
  }

  return (
    <Styled.PostCategoryTapContiner
      ref={containerRef}
      visibleOnScroll={visibleOnScroll}
    >
      <Styled.Button
        ref={buttonRef}
        active={postCategory === ''}
        onClick={() => {
          setPostCategory('');
          handleTapScrollX(buttonRef);
        }}
      >
        전체 결과
      </Styled.Button>
      {Object.entries(POST_CATEGORIES).map(([key, label]) => (
        <PostCategoryContent
          key={key}
          active={key === postCategory}
          label={label}
          keyValue={key}
          handleTapScrollX={handleTapScrollX}
          setPostCategory={setPostCategory}
        />
      ))}
    </Styled.PostCategoryTapContiner>
  );
};

export default PostCategoryTap;
