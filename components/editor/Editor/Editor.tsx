import React from 'react';
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
  const { register, handleSubmit, watch, setValue } = useForm<PostSchema>({
    defaultValues: { tags: [], ...initialValues },
  });

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
          <Styled.DateRangeContainer>
            <label>모집기간</label>
            <DatePicker
              date={watch('startDate') || new Date()}
              onChange={(date) => setValue('startDate', date)}
              selectsStart
              startDate={watch('startDate')}
              endDate={watch('endDate')}
              minDate={new Date()}
            />
            <SVGIcon icon="ArrowRightIcon" />
            <DatePicker
              date={watch('endDate') || new Date()}
              onChange={(date) => setValue('endDate', date)}
              selectsEnd
              startDate={watch('startDate')}
              endDate={watch('endDate')}
              minDate={watch('startDate')}
            />
          </Styled.DateRangeContainer>
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
      <EditorFooter />
    </Styled.Container>
  );
}
