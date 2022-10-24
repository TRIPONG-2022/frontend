import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useState } from 'react';

import PostList from '@/components/post/PostList';
import { getPostList } from '@/api/search';
import MainLayout from '@/layouts/MainLayout';
import CategoryButton from '@/components/category/CategoryButton';

const PostsPage: NextPage = () => {
  const router = useRouter();

  const { searchType, keyword } = router.query;

  const [categoryValue, setCategory] = useState('');

  const { data } = useQuery(
    'posts',
    () => getPostList({ searchType, keyword }),

    {
      select: (data) =>
        categoryValue
          ? data.filter(
              ({ category }: { category: string }) =>
                category === categoryValue,
            )
          : data,
    },
  );

  console.log(data);

  return (
    <MainLayout>
      <CategoryButton />
      {keyword && (
        <SearchTitle>
          <span>{`'${keyword}'`}</span>으로 검색한 결과
        </SearchTitle>
      )}
      <PostList posts={data} size="lg" />
    </MainLayout>
  );
};

export default PostsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const { searchType, keyword } = context.query;

  await queryClient.prefetchQuery('posts', () =>
    getPostList({ searchType, keyword }),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
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
