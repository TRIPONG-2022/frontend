import React from 'react';
import { useForm } from 'react-hook-form';
import TipTap from '../TipTap';
import TagInput from '../TagInput';
import TitleInput from '../TitleInput';
import * as Styled from './Editor.styled';
import EditorFooter from '../EditorFooter';
import EditorHeader from '../EditorHeader';
import HeadCountInput from '../HeadCountInput';

interface PostSchema {
  title: string;
  tags: string[];
  content: string;
}

interface EditorProps {
  initialValues?: PostSchema;
}

export default function Editor({ initialValues }: EditorProps) {
  const { register, handleSubmit, watch, setValue } = useForm<PostSchema>({
    defaultValues: { tags: [], ...initialValues },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Styled.Container>
      <EditorHeader />
      <HeadCountInput />
      <TitleInput
        id="title"
        type="text"
        placeholder="제목을 입력하세요."
        {...register('title')}
      />
      <TagInput
        tags={watch('tags')}
        onChange={(tags) => setValue('tags', tags)}
      />
      <TipTap
        content={initialValues?.content}
        onChange={(content) => setValue('content', content)}
      />
      <EditorFooter />
    </Styled.Container>
  );
}
