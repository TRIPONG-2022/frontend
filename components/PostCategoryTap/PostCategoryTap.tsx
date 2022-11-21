import React, { SetStateAction, useEffect, useRef } from 'react';

import { POST_CATEGORIES } from '@/constants/post-category';
import { PostCategory } from '@/types/post';
import PostCategoryContent from './PostCategoryContent';
import useScrollUp from './useScroll';

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

  const { scrollDirection, setScrollDirection, scrollY } = useScrollUp();

  useEffect(() => {
    if (scrollY < 160) {
      setScrollDirection('DOWN');
    }
  }, [setScrollDirection, scrollY]);

  return (
    <Styled.PostCategoryTapContiner
      ref={containerRef}
      visibleOnScroll={scrollDirection === 'UP'}
    >
      <Styled.Button
        ref={buttonRef}
        active={postCategory === ''}
        onClick={() => {
          setPostCategory('');
          tapScrollX.current = buttonRef.current?.getBoundingClientRect().x;
          containerRef.current?.scrollTo({
            behavior: 'smooth',
            left: tapScrollX.current! - 20,
          });
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
          containerRef={containerRef}
          tapScrollX={tapScrollX}
          setPostCategory={setPostCategory}
        />
      ))}
    </Styled.PostCategoryTapContiner>
  );
};

export default PostCategoryTap;
