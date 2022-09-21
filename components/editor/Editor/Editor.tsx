import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import TipTap from '../TipTap';
import TagInput from '../TagInput';
import TitleInput from '../TitleInput';
import EditorFooter from '../EditorFooter';
import EditorHeader from '../EditorHeader';
import HeadCountInput from '../HeadCountInput';
import DateRangeInput from '../DateRangeInput';
import * as Styled from './Editor.styled';
import PublishModal from '../PublishModal';

interface PostSchema {
  category: string;
  title: string;
  tags: string[];
  content: string;
  thumbnail: string;
  totalHeadCount?: number;
  startDate?: Date;
  endDate?: Date;
}

interface EditorProps {
  initialValues?: PostSchema;
}

export default function Editor({ initialValues }: EditorProps) {
  const router = useRouter();
  const [isOpenPublishModal, setIsOpenPublishModal] = useState<boolean>(false);
  const { register, handleSubmit, watch, setValue } = useForm<PostSchema>({
    defaultValues: { tags: [], ...initialValues },
  });

  const onChangeCategory = useCallback(
    (category: string) => {
      setValue('category', category);
    },
    [setValue],
  );

  const onChangeHeadCount = useCallback(
    (headCount: number) => {
      setValue('totalHeadCount', headCount);
    },
    [setValue],
  );

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

  const onChangeTags = useCallback(
    (tags: string[]) => {
      setValue('tags', tags);
    },
    [setValue],
  );

  const onChangeContent = useCallback(
    (content: string) => {
      setValue('content', content);
    },
    [setValue],
  );

  const onChangeThumbnail = useCallback(
    (thumbnail: string) => {
      setValue('thumbnail', thumbnail);
    },
    [setValue],
  );

  const onCancel = () => {
    router.back();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const openPublishModal = () => {
    setIsOpenPublishModal(true);
  };

  const closePublishModal = () => {
    setIsOpenPublishModal(false);
  };

  return (
    <Styled.Container>
      <EditorHeader
        category={watch('category')}
        onChangeCategory={onChangeCategory}
      />
      {watch('category') === 'gathering' && (
        <React.Fragment>
          <HeadCountInput
            headCount={watch('totalHeadCount') || 0}
            onChange={onChangeHeadCount}
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
      <TagInput tags={watch('tags')} onChange={onChangeTags} />
      <TipTap content={initialValues?.content} onChange={onChangeContent} />
      <EditorFooter onCancel={onCancel} onPublish={openPublishModal} />
      <PublishModal
        thumbnail={watch('thumbnail')}
        onChangeThumbnail={onChangeThumbnail}
        isOpen={isOpenPublishModal}
        onClose={closePublishModal}
        onPublish={handleSubmit(onSubmit)}
      />
    </Styled.Container>
  );
}
