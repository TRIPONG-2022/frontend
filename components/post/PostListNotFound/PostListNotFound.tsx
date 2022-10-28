import Link from 'next/link';
import React from 'react';

import * as Styled from './PostListNotFound.styled';

export default function PostListNotFound() {
  return (
    <Styled.PostListNotFoundContainer>
      <h1>조건에 일치하는 게시물이 없습니다.</h1>
    </Styled.PostListNotFoundContainer>
  );
}
