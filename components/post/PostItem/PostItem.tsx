import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { Post } from '@/types/post';
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
        <Styled.DetailWrapper>
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
        </Styled.DetailWrapper>
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

export default React.memo(PostItem);
