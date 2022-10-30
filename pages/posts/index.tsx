import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import { dehydrate, QueryClient } from 'react-query';
import { useMemo, useState } from 'react';

import PostList from '@/components/post/PostList';
import { getPostList } from '@/api/search';
import MainLayout from '@/layouts/MainLayout';
import PostCategoryButton from '@/components/PostCategory/PostCategoryButton';
import InView from '@/components/shared/InView';
import PostListNotFound from '@/components/post/PostListNotFound';
import usePostListQuery from '@/hooks/usePostListQuery';

interface PostsPageProps {
  queryParam: {
    searchType: string;
    keyword: string;
  };
}

const PostsPage: NextPage<PostsPageProps> = ({ queryParam }) => {
  const [postCategory, setPostCategory] = useState('');

  const { data, fetchNextPage, hasNextPage } = usePostListQuery(
    queryParam,
    postCategory,
  );

  const onChange = (isInView: boolean, entry: IntersectionObserverEntry) => {
    if (isInView && hasNextPage) {
      fetchNextPage();
    }
  };

  const hasList = useMemo(
    () =>
      data?.pages
        .map((List) => List.length !== 0)
        .find((hasData) => hasData === true),
    [data?.pages],
  );

  return (
    <MainLayout>
      <PostsPageContainer>
        {queryParam.keyword && (
          <SearchTitle>
            <span>{queryParam.keyword}</span>으로 검색한 결과
          </SearchTitle>
        )}

        <PostCategoryButton
          postCategory={postCategory}
          setPostCategory={setPostCategory}
        />
        {hasList ? (
          <InView onChange={onChange} threshold={0.5}>
            <PostList posts={data} size="lg" />
          </InView>
        ) : (
          <PostListNotFound />
        )}
      </PostsPageContainer>
    </MainLayout>
  );
};

export default PostsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const { searchType, keyword } = context.query;

  await queryClient.prefetchInfiniteQuery('posts', () =>
    getPostList({ searchType, keyword }),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      queryParam: JSON.parse(JSON.stringify({ searchType, keyword })),
    },
  };
};

const PostsPageContainer = styled.div`
  padding-top: 5rem;
`;

const SearchTitle = styled.h3`
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;

  font-size: 1.5rem;
  font-weight: 700;

  span {
    position: relative;

    ::after {
      content: '';

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      height: 8px;

      background-color: ${({ theme }) => theme.colors.primary.hex};
      opacity: 0.5;
    }
  }
`;