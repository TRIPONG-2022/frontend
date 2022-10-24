import React from 'react';

import { Post } from '@/types/post';

import PostItem from '../PostItem';
import * as Styled from './PostList.styled';

interface PostListProps {
  posts: Post[];
  size?: Styled.PostListSize;
}

/**
 * PostList 컴포넌트
 *
 * size: 스크린 사이즈 별 칼럼 개수
 * - md: Mobile 1, Tablet ~ 2
 * - lg: Mobile 1, Tablet 2, Desktop 3
 */
export default function PostList({ posts, size = 'md' }: PostListProps) {
  return (
    <Styled.PostListContainer size={size}>
      {posts?.map((post, index) => (
        <li key={`${post.id}${index}`}>
          <PostItem post={post} />
        </li>
      ))}
    </Styled.PostListContainer>
  );
}
