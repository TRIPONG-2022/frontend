import React from 'react';
import { POST_CATEGORIES } from '@/constants/post-category';
import * as Styled from './EditorHeader.styled';

interface EditorHeaderProps {
  category?: string;
  onChangeCategory: (category: string) => void;
}

export default function EditorHeader({
  category,
  onChangeCategory,
}: EditorHeaderProps) {
  return (
    <Styled.Container>
      <div>
        <select
          defaultValue=""
          value={category}
          onChange={(event) => onChangeCategory(event.target.value)}
        >
          <option value="">카테고리</option>
          {Object.entries(POST_CATEGORIES).map(([category, label]) => (
            <option value={category} key={`category-option-${category}`}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </Styled.Container>
  );
}
