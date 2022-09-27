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
        <Styled.ThumbnailContainer>
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
        </Styled.ThumbnailContainer>
      )}
      <Styled.ContentContainer>
        <Styled.DetailContainer>
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
        </Styled.DetailContainer>
        <Styled.BottomContainer>
          <Styled.ProfileContainer>
            <Styled.ProfileImageContainer>
              <Image
                src="/images/profile.png"
                alt="프로필 이미지"
                layout="fill"
                objectFit="cover"
              />
            </Styled.ProfileImageContainer>
            <span>{post.author}</span>
          </Styled.ProfileContainer>
          <Styled.InfoContainer>
            <Styled.InfoContainer>
              <SVGIcon icon="HeartIcon" size={16} />
              <span>{post.likeCount}</span>
            </Styled.InfoContainer>
            <Styled.InfoContainer>
              <SVGIcon icon="EyeIcon" size={16} />
              <span>{post.viewCount}</span>
            </Styled.InfoContainer>
          </Styled.InfoContainer>
        </Styled.BottomContainer>
      </Styled.ContentContainer>
    </Styled.PostItemContainer>
  );
}

export default React.memo(PostItem);
