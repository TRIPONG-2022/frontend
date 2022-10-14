import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Post, PostCategory } from '@/types/post';
import { getGatheringDate } from '@/utils/date';
import { createPostLink, decodeHTML, removeHTMLTag } from '@/utils/post';
import SVGIcon from '@/components/shared/SVGIcon';

import * as Styled from './PostItem.styled';

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  return (
    <Styled.PostItemContainer>
      {post.thumbnail && (
        <Styled.ThumbnailWrapper>
          <Link href={createPostLink(post.id, post.category)}>
            <Styled.PostLink>
              <Image
                src={`data:image/png;base64,${post.thumbnail}`}
                alt="Thumbnail"
                layout="fill"
                quality={90}
                objectFit="cover"
              />
            </Styled.PostLink>
          </Link>
        </Styled.ThumbnailWrapper>
      )}
      <Styled.ContentWrapper>
        {post.category === PostCategory.Gathering ? (
          <GatheringContent post={post} />
        ) : (
          <PostContent post={post} />
        )}
        <Styled.BottomWrapper>
          <Styled.ProfileWrapper>
            <Styled.ProfileImageWrapper>
              <Image
                src="/images/profile.png"
                alt="프로필 이미지"
                layout="fill"
                objectFit="cover"
              />
            </Styled.ProfileImageWrapper>
            <span>{post.author}</span>
          </Styled.ProfileWrapper>
          <Styled.InfoWrapper>
            <Styled.InfoWrapper>
              <SVGIcon icon="HeartIcon" size={16} />
              <span>{post.likeCount}</span>
            </Styled.InfoWrapper>
            <Styled.InfoWrapper>
              <SVGIcon icon="EyeIcon" size={16} />
              <span>{post.viewCount}</span>
            </Styled.InfoWrapper>
          </Styled.InfoWrapper>
        </Styled.BottomWrapper>
      </Styled.ContentWrapper>
    </Styled.PostItemContainer>
  );
}

function PostContent({ post }: PostItemProps) {
  return (
    <Styled.PostContentContainer>
      <Link href={createPostLink(post.id, post.category)}>
        <Styled.PostLink>
          <Styled.Title>{post.title}</Styled.Title>
          <Styled.Description>
            {removeHTMLTag(decodeHTML(post.content))}
          </Styled.Description>
        </Styled.PostLink>
      </Link>
      <Styled.TagList>
        {post.tags.map((tag, index) => (
          <Styled.TagItem key={index}>#{tag}</Styled.TagItem>
        ))}
      </Styled.TagList>
    </Styled.PostContentContainer>
  );
}

function GatheringContent({ post }: PostItemProps) {
  return (
    <Styled.GatheringContentContainer>
      <Link href={createPostLink(post.id, post.category)}>
        <Styled.PostLink>
          <Styled.Title>{post.title}</Styled.Title>
          <Styled.GatheringInfoWrapper>
            <p>
              <strong>여행 기간</strong>
              <span>{getGatheringDate(post.startDate, post.endDate)}</span>
            </p>
            <p>
              <strong>여행 인원</strong>
              <span>
                {post.curHeadCount} / {post.totalHeadCount}명
              </span>
            </p>
          </Styled.GatheringInfoWrapper>
        </Styled.PostLink>
      </Link>
    </Styled.GatheringContentContainer>
  );
}

export default React.memo(PostItem);
