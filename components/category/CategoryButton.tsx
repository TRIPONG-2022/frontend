import { POST_CATEGORIES, POST_CATEGORY_KEYS } from '@/constants/post-category';
import React, { SetStateAction } from 'react';
import * as Styled from './CategoryButton.styled';

interface CategoryButtonProps {
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
}

const CategoryButton = ({ category, setCategory }: CategoryButtonProps) => {
  return (
    <Styled.Continer>
      <Styled.Button active={category === ''} onClick={() => setCategory('')}>
        전체 결과
      </Styled.Button>
      {POST_CATEGORY_KEYS.map((item) => (
        <Styled.Button
          key={item}
          active={item === category}
          onClick={() => setCategory(item)}
        >
          {POST_CATEGORIES[item]}
        </Styled.Button>
      ))}
    </Styled.Continer>
  );
};

export default CategoryButton;
