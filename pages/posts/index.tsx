import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import { dehydrate, QueryClient } from 'react-query';
import { useMemo, useState } from 'react';

import PostList from '@/components/post/PostList';
import { getPostList } from '@/api/search';
import MainLayout from '@/layouts/MainLayout';
import PostCategoryTap from '@/components/post/PostCategoryTap/PostCategoryTap';
import InView from '@/components/shared/InView';
import PostListNotFound from '@/components/post/PostListNotFound';
import usePostListQuery from '@/hooks/usePostListQuery';
import Dropdown from '@/components/shared/Dropdown';
import { PostCategory } from '@/types/post';
import { handlePostCategoryQuery } from '@/utils/post';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

interface PostsPageProps {
  queryParam: {
    searchType: string;
    keyword: string;
  };
  category: PostCategory | '';
}

type Sort = 'desc' | 'asc';

const sortObj: {
  [key: string]: string;
} = {
  desc: '최신순',
  asc: '오래된순',
};

const PostsPage: NextPage<PostsPageProps> = ({ queryParam, category }) => {
  const [postCategory, setPostCategory] = useState<PostCategory | ''>(category);
  const [sort, setSort] = useState<Sort>('desc');

  const { data, fetchNextPage, hasNextPage } = usePostListQuery(
    queryParam,
    postCategory,
    sort,
  );

  useIsomorphicLayoutEffect(() => {
    setPostCategory(category);
  }, [category]);

  const onChange = (isInView: boolean, entry: IntersectionObserverEntry) => {
    if (isInView && hasNextPage) {
      fetchNextPage();
    }
  };

  const hasList = useMemo(
    () => data?.pages.find((page) => page.length !== 0),
    [data?.pages],
  );

  const postData = useMemo(
    () => data?.pages.reduce((acc, cur) => [...acc, ...cur]),
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
            <Dropdown.Button>{sortObj[sort]}</Dropdown.Button>
            <Dropdown.Items width="8rem">
              {Object.entries(sortObj).map(([key, value]) => (
                <Dropdown.Item key={key} onClick={() => setSort(key as Sort)}>
                  {value}
                </Dropdown.Item>
              ))}
            </Dropdown.Items>
          </Dropdown>
        </ButtonWrap>

        {hasList ? (
          <InView onChange={onChange} threshold={0.5}>
            <PostList posts={postData} size="lg" />
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

  const { searchType, keyword, category } = context.query;
  await queryClient.prefetchInfiniteQuery(['posts', 'desc'], () =>
    getPostList({ searchType, keyword }),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      queryParam: JSON.parse(JSON.stringify({ searchType, keyword })),
      category: handlePostCategoryQuery(category),
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
  justify-content: flex-end;

  margin-bottom: 1rem;

  font-weight: 700;
`;
