import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query';
import { useState } from 'react';

import PostList from '@/components/post/PostList';
import { getPostList } from '@/api/search';
import MainLayout from '@/layouts/MainLayout';
import PostCategoryButton from '@/components/post-category/PostCategoryButton';
import { Post } from '@/types/post';
import InView from '@/components/shared/InView';

interface PostsPageProps {
  queryParam: {
    searchType: any;
    keyword: any;
  };
}

const PostsPage: NextPage<PostsPageProps> = ({ queryParam }) => {
  const [postCategory, setPostCategory] = useState('');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<Post[]>(
    'posts',
    ({ pageParam = 0 }) => getPostList(queryParam, pageParam),

    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length === 0 ? undefined : pages.length;
      },

      select: (data) => ({
        pages: [...data.pages].map((list) =>
          postCategory
            ? list.filter(
                ({ category }: { category: string }) =>
                  category === postCategory,
              )
            : list,
        ),
        pageParams: [...data.pageParams],
      }),
    },
  );

  const onChange = (isInView: boolean, entry: IntersectionObserverEntry) => {
    if (isInView && hasNextPage) {
      fetchNextPage();
    }
  };

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

        <InView onChange={onChange} threshold={0.5}>
          <PostList posts={data} size="lg" />
        </InView>
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
