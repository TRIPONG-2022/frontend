import React, { SetStateAction } from 'react';

import { POST_CATEGORIES } from '@/constants/post-category';

import * as Styled from './PostCategoryTap.styled';
import { PostCategory } from '@/types/post';

interface PostCategoryTapProps {
  postCategory: string;
  setPostCategory: React.Dispatch<SetStateAction<PostCategory | ''>>;
}

const PostCategoryTap = ({
  postCategory,
  setPostCategory,
}: PostCategoryTapProps) => {
  return (
    <Styled.PostCategoryTapContiner>
      <Styled.Button
        active={postCategory === ''}
        onClick={() => setPostCategory('')}
      >
        전체 결과
      </Styled.Button>
      {Object.entries(POST_CATEGORIES).map(([key, label]) => (
        <Styled.Button
          key={key}
          active={key === postCategory}
          onClick={() => setPostCategory(PostCategory.Community)}
        >
          {label}
        </Styled.Button>
      ))}
    </Styled.PostCategoryTapContiner>
  );
};

export default PostCategoryTap;
