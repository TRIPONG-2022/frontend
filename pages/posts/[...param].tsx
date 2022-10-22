import React from 'react';
import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import PostBody from '@/components/post/PostBody';
import PostHeader from '@/components/post/PostHeader';
import PostNotFound from '@/components/post/PostNotFound';

import { PostCategory } from '@/types/post';
import { checkIsValidPostPageParam, handlePostPageParam } from '@/utils/post';
import usePostQuery from '@/hooks/usePostQuery';

interface PostPageProps {
  category: PostCategory;
  postId: string;
}

const PostPage: NextPage<PostPageProps> = ({ category, postId }) => {
  const { data: post, isLoading } = usePostQuery(category, postId);

  return (
    <>
      <Head>
        <title>{post?.title ?? 'TRIPONG, 포스트를 찾을 수 없습니다.'}</title>
      </Head>
      <MainLayout>
        {post ? (
          <>
            <PostHeader post={post} />
            <PostBody post={post} />
          </>
        ) : (
          <PostNotFound />
        )}
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { param } = context.query;
    const [category, postId] = handlePostPageParam(param);

    if (!checkIsValidPostPageParam(category, postId)) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        category,
        postId,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PostPage;
