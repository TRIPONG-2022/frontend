import React from 'react';

import { Post } from '@/types/post';
import { decodeHTML } from '@/utils/post';
import ReplyList from '@/components/reply/ReplyList';
import ReplyForm from '@/components/reply/ReplyForm';

import * as Styled from './PostBody.styled';

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <Styled.PostBodyContainer>
      <Styled.PostContent
        dangerouslySetInnerHTML={{ __html: decodeHTML(post.content) }}
      />
      <Styled.PostTagListContainer>
        <Styled.PostTagList>
          {post.tags.map((tag, i) => (
            <Styled.PostTagItem key={i}>{tag}</Styled.PostTagItem>
          ))}
        </Styled.PostTagList>
      </Styled.PostTagListContainer>
      <Styled.ReplyContainer>
        <h2>댓글</h2>
        <ReplyForm postId={post.id} />
        <ReplyList postId={post.id} />
      </Styled.ReplyContainer>
    </Styled.PostBodyContainer>
  );
}
