import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQuery,
} from 'react-query';
import { useState } from 'react';

import PostList from '@/components/post/PostList';
import { getPostList } from '@/api/search';
import MainLayout from '@/layouts/MainLayout';
import CategoryButton from '@/components/category/CategoryButton';
import { Post } from '@/types/post';

interface PostsPageProps {
  queryParam: {
    searchType: any;
    keyword: any;
  };
}

const PostsPage: NextPage<PostsPageProps> = ({ queryParam }) => {
  const [categoryValue, setCategory] = useState('');

  const { data, fetchNextPage } = useInfiniteQuery<Post[]>(
    'posts',
    ({ pageParam = 0 }) => getPostList(queryParam, pageParam),

    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length === 0 ? undefined : pages.length;
      },

      select: (data) => ({
        pages: [...data.pages].map((list) =>
          categoryValue
            ? list.filter(
                ({ category }: { category: string }) =>
                  category === categoryValue,
              )
            : list,
        ),
        pageParams: [...data.pageParams],
      }),
    },
  );

  console.log(data);

  return (
    <MainLayout>
      <CategoryButton category={categoryValue} setCategory={setCategory} />
      {queryParam.keyword && (
        <SearchTitle>
          <span>{`'${queryParam.keyword}'`}</span>으로 검색한 결과
        </SearchTitle>
      )}
      <PostList posts={data} size="lg" />
      <button type="button" onClick={() => fetchNextPage()}>
        다음페이지
      </button>
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

const SearchTitle = styled.h3`
  display: inline-block;

  border-bottom: 5px solid;
  border-color: ${({ theme }) => theme.colors.primary.hex};
  margin-bottom: 5rem;
  padding-bottom: 0.5rem;

  font-size: 1.5rem;
  span {
    font-weight: 600;
  }
`;
