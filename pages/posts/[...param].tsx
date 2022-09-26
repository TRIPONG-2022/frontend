import type { GetServerSideProps, NextPage } from 'next';
import { checkIsValidPostPageParam, handlePostPageParam } from '@/utils/post';

interface PostPageProps {
  category: string;
  postId: string;
}

const PostPage: NextPage<PostPageProps> = ({ category, postId }) => {
  return <div>{category + postId}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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
};

export default PostPage;
