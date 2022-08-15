import React from 'react';
import * as Styled from './EditorHeader.styled';

interface EditorHeaderProps {
  category: string;
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
          <option value="review">후기, 리뷰</option>
          <option value="community">자유게시판</option>
          <option value="qna">Q&A</option>
          <option value="gathering">여행메이트모집</option>
        </select>
      </div>
    </Styled.Container>
  );
}
