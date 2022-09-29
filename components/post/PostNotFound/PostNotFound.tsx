import Link from 'next/link';
import React from 'react';

import * as Styled from './PostNotFound.styled';

export default function PostNotFound() {
  return (
    <Styled.PostNotFoundContainer>
      <h1>게시글이 삭제되었거나 존재하지 않습니다.</h1>
      <Link href="/">
        <a>홈페이지로 이동</a>
      </Link>
    </Styled.PostNotFoundContainer>
  );
}
