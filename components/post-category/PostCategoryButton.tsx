import React, { SetStateAction } from 'react';

import { POST_CATEGORIES } from '@/constants/post-category';

import * as Styled from './PostCategoryButton.styled';

interface CategoryButtonProps {
  postCategory: string;
  setPostCategory: React.Dispatch<SetStateAction<string>>;
}

const CategoryButton = ({
  postCategory,
  setPostCategory,
}: CategoryButtonProps) => {
  return (
    <Styled.PostCategoryButtonContiner>
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
          onClick={() => setPostCategory(key)}
        >
          {label}
        </Styled.Button>
      ))}
    </Styled.PostCategoryButtonContiner>
  );
};

export default CategoryButton;
