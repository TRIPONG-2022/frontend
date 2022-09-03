import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Editor from '@/components/editor/Editor';
import { requestCreatePost } from '@/api/post';
import { PostEditorSchema, POST_EDITOR_SCHEMA } from '@/constants/schema';

const WritePage: NextPage = () => {
  const router = useRouter();
  const methods = useForm<PostEditorSchema>({
    mode: 'onChange',
    resolver: yupResolver(POST_EDITOR_SCHEMA),
    defaultValues: {
      title: '',
      category: undefined,
      tags: [],
      content: '',
      totalHeadCount: 1,
      startDate: new Date(),
      endDate: new Date(),
      thumbnail: undefined,
    },
  });

  const onSubmit = async (data: PostEditorSchema) => {
    await requestCreatePost(data);
    router.replace('/posts');
  };

  return (
    <FormProvider {...methods}>
      <Editor initialContent="" onSubmit={onSubmit} />
    </FormProvider>
  );
};

export default WritePage;
