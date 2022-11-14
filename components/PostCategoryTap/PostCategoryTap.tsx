import React, { SetStateAction, useRef } from 'react';

import { POST_CATEGORIES } from '@/constants/post-category';
import { PostCategory } from '@/types/post';
import PostCategoryContent from './PostCategoryContent';
import useScrollUp from './useScrollUp';

import * as Styled from './PostCategoryTap.styled';

interface PostCategoryTapProps {
  postCategory: string;
  setPostCategory: React.Dispatch<SetStateAction<PostCategory | ''>>;
}

const PostCategoryTap = ({
  postCategory,
  setPostCategory,
}: PostCategoryTapProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const scrollX = useRef<number | undefined>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = useScrollUp();

  return (
    <Styled.PostCategoryTapContiner ref={containerRef} scroll={scroll}>
      <Styled.Button
        ref={ref}
        active={postCategory === ''}
        onClick={() => {
          setPostCategory('');
          scrollX.current = ref.current?.getBoundingClientRect().x;
          containerRef.current?.scrollTo({
            behavior: 'smooth',
            left: scrollX.current! - 20,
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
          scrollX={scrollX}
          setPostCategory={setPostCategory}
        />
      ))}
    </Styled.PostCategoryTapContiner>
  );
};

export default PostCategoryTap;
