import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PostCategory } from '@/types/post';
import { PostEditorSchema, POST_EDITOR_SCHEMA } from '@/constants/schema';

import { AppState } from '@/store/index';
import Editor from '@/components/editor/Editor';
import MainLayout from '@/layouts/MainLayout';
import usePostQuery from '@/hooks/usePostQuery';
import usePostMutation from '@/hooks/usePostMutation';
import { DEFAULT_POST_SCHEMA } from '@/constants/post';
import {
  convertPostToPostSchema,
  decodeHTML,
  handleWritePostPageQuery,
} from '@/utils/post';

interface WritePageProps {
  postId: number | null;
  category: PostCategory | null;
}

const WritePage: NextPage<WritePageProps> = ({ postId, category }) => {
  const router = useRouter();
  const { user } = useSelector((state: AppState) => state.user);
  const { mutate } = usePostMutation(category, postId);
  const methods = useForm<PostEditorSchema>({
    mode: 'onChange',
    resolver: yupResolver(POST_EDITOR_SCHEMA),
    defaultValues: DEFAULT_POST_SCHEMA,
  });

  const { isSuccess, data: post } = usePostQuery(category, postId, {
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onSuccess(data) {
      if (data === null) {
        return;
      }
      if (data.author !== user?.name) {
        router.replace('/404');
        return;
      }
      methods.reset(convertPostToPostSchema(data));
    },
    onError() {
      router.push('/404');
    },
  });

  const onSubmit = async (data: PostEditorSchema) => {
    mutate(data, {
      onSuccess: () => {
        router.push(post ? `/posts/${category}/${postId}` : '/posts');
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  if (!isSuccess) {
    return null;
  }

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <Editor
          initialContent={decodeHTML(post?.content || '')}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId, category } = context.query;

  return {
    props: {
      ...handleWritePostPageQuery(category, postId),
    },
  };
};

export default WritePage;
