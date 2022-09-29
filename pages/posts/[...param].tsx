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
  const { data: post } = useQuery<Post>(['post', category, postId], () =>
    requestGetPost(category, postId),
  );

  if (!post) {
    return (
      <MainLayout>
        <PostNotFound />
      </MainLayout>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <title>{post.title} | TRIPONG</title>
      </Head>
      <MainLayout>
        <PostHeader post={post} />
        <PostBody post={post} />
      </MainLayout>
    </React.Fragment>
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
