import React, { useState } from 'react';

import { Post } from '@/types/post';
import SVGIcon from '@/components/shared/SVGIcon';
import ReplyForm from '@/components/reply/ReplyForm';
import PostReplyList from '../PostReplyList';
import useLikeOrDislikePostMutation from '../hooks/useLikeOrDislikePostMutation';

import * as Styled from './PostFooter.styled';

interface PostFooterProps {
  post: Post;
}

export default function PostFooter({ post }: PostFooterProps) {
  const { isLoading, mutate } = useLikeOrDislikePostMutation(
    post.id,
    post.category,
  );

  const handleClickLikeButton = () => {
    console.log(post.isLike);
    mutate(Boolean(post.isLike));
  };

  return (
    <Styled.PostFooterContainer>
      <Styled.PostUtilWrapper>
        <Styled.PostUtilButton
          onClick={handleClickLikeButton}
          disabled={isLoading}
        >
          <SVGIcon
            icon={Boolean(post.isLike) ? 'HeartFillIcon' : 'HeartIcon'}
            size={20}
            color="#fb3958"
          />
          <p>
            좋아요
            <strong>{post.likeCount}</strong>
          </p>
        </Styled.PostUtilButton>
        <Styled.PostUtilButton disabled>
          <SVGIcon icon="EyeIcon" size={20} color="#404040" />
          <p>
            조회수
            <strong>{post.viewCount}</strong>
          </p>
        </Styled.PostUtilButton>
      </Styled.PostUtilWrapper>
      <Styled.ReplyWrapper>
        <h2>댓글</h2>
        <ReplyForm postId={post.id} />
        <PostReplyList postId={post.id} />
      </Styled.ReplyWrapper>
    </Styled.PostFooterContainer>
  );
}
