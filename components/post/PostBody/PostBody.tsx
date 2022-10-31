import React from 'react';

import { Post, PostCategory } from '@/types/post';
import { decodeHTML } from '@/utils/post';
import { getGatheringDate } from '@/utils/date';
import ReplyForm from '@/components/reply/ReplyForm';
import PostReplyList from '../PostReplyList';

import * as Styled from './PostBody.styled';

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <Styled.PostBodyContainer>
      {post.category === PostCategory.Gathering && (
        <GatheringContent post={post} />
      )}
      <Styled.PostContent
        dangerouslySetInnerHTML={{ __html: decodeHTML(post.content) }}
      />
      <Styled.PostTagListWrapper>
        <Styled.PostTagList>
          {post.tags.map((tag, i) => (
            <Styled.PostTagItem key={i}>{tag}</Styled.PostTagItem>
          ))}
        </Styled.PostTagList>
      </Styled.PostTagListWrapper>
      <Styled.ReplyWrapper>
        <h2>댓글</h2>
        <ReplyForm postId={post.id} />
        <PostReplyList postId={post.id} />
      </Styled.ReplyWrapper>
    </Styled.PostBodyContainer>
  );
}

function GatheringContent({ post }: PostBodyProps) {
  return (
    <Styled.GatheringContentContainer>
      <Styled.GatheringInfo>
        <strong>여행 기간</strong>
        <span>{getGatheringDate(post.startDate, post.endDate)}</span>
      </Styled.GatheringInfo>
      <Styled.GatheringInfo>
        <strong>여행 인원</strong>
        <span>
          {post.curHeadCount} / {post.totalHeadCount}명
        </span>
      </Styled.GatheringInfo>
    </Styled.GatheringContentContainer>
  );
}
