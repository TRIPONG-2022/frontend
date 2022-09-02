import type { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Editor from '@/components/editor/Editor';
import { PostEditorSchema, POST_EDITOR_SCHEMA } from '@/constants/schema';

const WritePage: NextPage = () => {
  const methods = useForm<PostEditorSchema>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
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

  return (
    <FormProvider {...methods}>
      <Editor />
    </FormProvider>
  );
};

export default WritePage;
