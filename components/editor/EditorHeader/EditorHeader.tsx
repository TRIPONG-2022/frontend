import React from 'react';
import * as Styled from './EditorHeader.styled';

interface EditorHeaderProps {}

export default function EditorHeader({}: EditorHeaderProps) {
  return (
    <Styled.Container>
      <div>
        <select defaultValue="">
          <option value="">카테고리</option>
          <option value="review">맛집/리뷰/후기</option>
          <option value="male">커뮤니티</option>
          <option value="gathering">여행메이트모집</option>
        </select>
      </div>
      <div>서울특별시 강남구</div>
    </Styled.Container>
  );
}
