import React from 'react';

import { Post } from '@/types/post';
import { decodeHTML } from '@/utils/post';

import * as Styled from './PostBody.styled';

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  const tags: string[] = [
    '123',
    '123123',
    '123',
    '123123',
    '123',
    '123123',
    '123',
    '123123',
    '123',
    '123123',
    '123',
    '123123',
    '123',
    '123123',
  ];
  return (
    <Styled.PostBodyContainer>
      <Styled.PostContent
        dangerouslySetInnerHTML={{ __html: decodeHTML(post.content) }}
      />
      <Styled.PostTagListContainer>
        <Styled.PostTagList>
          {tags.map((tag, i) => (
            <Styled.PostTagItem key={i}>{tag}</Styled.PostTagItem>
          ))}
        </Styled.PostTagList>
      </Styled.PostTagListContainer>
    </Styled.PostBodyContainer>
  );
}
