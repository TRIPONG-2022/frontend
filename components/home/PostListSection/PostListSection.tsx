import { Post } from '@/types/post';
import PostList from '@/components/post/PostList';

import * as Styled from './PostListSection.styled';
import Link from 'next/link';

interface PostListSectionProps {
  title: string;
  href: string;
  posts: Post[];
}

export default function PostListSection({
  title,
  href,
  posts,
}: PostListSectionProps) {
  return (
    <Styled.PostListSectionContainer>
      <Styled.TitleWrapper>
        <h2>{title}</h2>
        <Link href={href}>
          <a>모두 보기</a>
        </Link>
      </Styled.TitleWrapper>
      <PostList size="lg" posts={posts} />
    </Styled.PostListSectionContainer>
  );
}
