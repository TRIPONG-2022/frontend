import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import { dehydrate, QueryClient } from 'react-query';
import { useMemo, useState } from 'react';

import PostList from '@/components/post/PostList';
import { getPostList } from '@/api/search';
import MainLayout from '@/layouts/MainLayout';
import PostCategoryTap from '@/components/PostCategoryTap/PostCategoryTap';
import InView from '@/components/shared/InView';
import PostListNotFound from '@/components/post/PostListNotFound';
import usePostListQuery from '@/hooks/usePostListQuery';
import Dropdown from '@/components/shared/Dropdown';
import { PostCategory } from '@/types/post';

interface PostsPageProps {
  queryParam: {
    searchType: string;
    keyword: string;
  };
}

const testObj: {
  [key: string]: string;
} = {
  desc: '최신순',
  asc: '오래된순',
};

const PostsPage: NextPage<PostsPageProps> = ({ queryParam }) => {
  console.log(queryParam);

  const [postCategory, setPostCategory] = useState<PostCategory | ''>('');
  const [sort, setSort] = useState('desc');

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
    () => data?.pages.find((page) => page.length !== 0),
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
        <PostCategoryTap
          postCategory={postCategory}
          setPostCategory={setPostCategory}
        />

        <ButtonWrap>
          <Dropdown>
            <Dropdown.Button>{testObj[sort]}</Dropdown.Button>
            <Dropdown.Items width="8rem">
              <Dropdown.Item>
                {Object.entries(testObj).map(([key, value]) => (
                  <Dropdown.Item key={key} onClick={() => setSort(key)}>
                    {value}
                  </Dropdown.Item>
                ))}
              </Dropdown.Item>
            </Dropdown.Items>
          </Dropdown>
        </ButtonWrap>

        <SortButton
          onClick={() => setSort((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
        ></SortButton>
        {hasList ? (
          <InView onChange={onChange} threshold={0.5}>
            <PostList posts={data?.pages} size="lg" />
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
  padding-top: 2rem;
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

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const SortButton = styled.button`
  font-size: 1rem;
`;
