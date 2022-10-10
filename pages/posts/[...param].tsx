import React from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';
import type { GetServerSideProps, NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import PostBody from '@/components/post/PostBody';
import PostHeader from '@/components/post/PostHeader';
import PostNotFound from '@/components/post/PostNotFound';

import { Post } from '@/types/post';
import { requestGetPost } from '@/api/post';
import { checkIsValidPostPageParam, handlePostPageParam } from '@/utils/post';

interface PostPageProps {
  category: string;
  postId: string;
}

const PostPage: NextPage<PostPageProps> = ({ category, postId }) => {
  const { data: post, isLoading } = useQuery<Post>(
    ['post', category, postId],
    () => requestGetPost(category, postId),
  );

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
