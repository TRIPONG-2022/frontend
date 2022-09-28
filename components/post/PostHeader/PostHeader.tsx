import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { Post } from '@/types/post';
import { POST_CATEGORIES } from '@/constants/post-category';

import * as Styled from './PostHeader.styled';
import SVGIcon from '@/components/shared/SVGIcon';

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <Styled.PostHeaderContainer>
      <Styled.PostCategory>
        {POST_CATEGORIES[post.category]}
      </Styled.PostCategory>
      <Styled.PostTitle>{post.title}</Styled.PostTitle>

      <Styled.PostDetailContainer>
        <Styled.PostDetailLeftContainer>
          <Styled.AuthorProfileImage>
            <Image
              src="/images/profile.png"
              alt="프로필 이미지"
              layout="fill"
            />
          </Styled.AuthorProfileImage>
          <Styled.PostAuthorAndDate>
            <Styled.PostAuthor>{post.author}</Styled.PostAuthor>
            <Styled.PostDate>
              {format(new Date(), 'yyyy.MM.dd')}
            </Styled.PostDate>
          </Styled.PostAuthorAndDate>
        </Styled.PostDetailLeftContainer>
        <Styled.PostDetailRightContainer>
          <Styled.PostInfo>
            <SVGIcon icon="HeartIcon" size={16} />
            <span>{post.likeCount}</span>
          </Styled.PostInfo>
          <Styled.PostInfo>
            <SVGIcon icon="EyeIcon" size={16} />
            <span>{post.viewCount}</span>
          </Styled.PostInfo>
        </Styled.PostDetailRightContainer>
      </Styled.PostDetailContainer>
    </Styled.PostHeaderContainer>
  );
}
