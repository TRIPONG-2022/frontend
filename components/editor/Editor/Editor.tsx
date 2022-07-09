import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import TipTap from '../TipTap';
import TagInput from '../TagInput';
import TitleInput from '../TitleInput';
import * as Styled from './Editor.styled';
import EditorFooter from '../EditorFooter';
import EditorHeader from '../EditorHeader';
import HeadCountInput from '../HeadCountInput';
import DatePicker from '@/components/shared/DatePicker';
import SVGIcon from '@/components/shared/SVGIcon';
import DateRangeInput from '../DateRangeInput';
import InputContainer from '../InputContainer';

interface PostSchema {
  category: string;
  title: string;
  tags: string[];
  content: string;
  totalHeadCount?: number;
  startDate?: Date;
  endDate?: Date;
}

interface EditorProps {
  initialValues?: PostSchema;
}

export default function Editor({ initialValues }: EditorProps) {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue } = useForm<PostSchema>({
    defaultValues: { tags: [], ...initialValues },
  });

  const onChangeStartDate = useCallback(
    (date: Date) => {
      setValue('startDate', date);
    },
    [setValue],
  );

  const onChangeEndDate = useCallback(
    (date: Date) => {
      setValue('endDate', date);
    },
    [setValue],
  );

  const onCancel = () => {
    router.back();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Styled.Container>
      <EditorHeader
        category={watch('category')}
        onChangeCategory={(category) => setValue('category', category)}
      />
      {watch('category') === 'gathering' && (
        <React.Fragment>
          <HeadCountInput
            headCount={watch('totalHeadCount') || 0}
            onChange={(value) => setValue('totalHeadCount', value)}
          />
          <DateRangeInput
            startDate={watch('startDate') || new Date()}
            endDate={watch('endDate') || new Date()}
            onChangeStartDate={onChangeStartDate}
            onChangeEndDate={onChangeEndDate}
          />
        </React.Fragment>
      )}
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
      <EditorFooter onCancel={onCancel} onPublish={handleSubmit(onSubmit)} />
    </Styled.Container>
  );
}
