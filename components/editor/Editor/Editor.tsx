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
import { PostEditorSchema, POST_EDITOR_SCHEMA } from '@/constants/schema';
import { yupResolver } from '@hookform/resolvers/yup';

interface EditorProps {
  initialValues?: Partial<PostEditorSchema>;
}

export default function Editor({ initialValues }: EditorProps) {
  const defaultValues = {
    title: '',
    category: undefined,
    tags: [],
    content: '',
    totalHeadCount: 1,
    startDate: new Date(),
    endDate: new Date(),
    thumbnail: undefined,
  };

  const router = useRouter();
  const [isOpenPublishModal, setIsOpenPublishModal] = useState<boolean>(false);
  const { register, handleSubmit, watch, setValue, formState } =
    useForm<PostEditorSchema>({
      mode: 'onBlur',
      reValidateMode: 'onBlur',
      resolver: yupResolver(POST_EDITOR_SCHEMA),
      defaultValues: { ...defaultValues, ...initialValues },
    });

  const onChangeCategory = useCallback(
    (category: string) => {
      setValue('category', category, { shouldValidate: true });
    },
    [setValue],
  );

  const onChangeHeadCount = useCallback(
    (headCount: number) => {
      setValue('totalHeadCount', headCount, { shouldValidate: true });
    },
    [setValue],
  );

  const onChangeStartDate = useCallback(
    (date: Date) => {
      setValue('startDate', date, { shouldValidate: true });
    },
    [setValue],
  );

  const onChangeEndDate = useCallback(
    (date: Date) => {
      setValue('endDate', date, { shouldValidate: true });
    },
    [setValue],
  );

  const onChangeTags = useCallback(
    (tags: string[]) => {
      setValue('tags', tags, { shouldValidate: true });
    },
    [setValue],
  );

  const onChangeContent = useCallback(
    (content: string) => {
      setValue('content', content, { shouldValidate: true });
    },
    [setValue],
  );

  const onChangeThumbnail = useCallback(
    (thumbnail?: File) => {
      setValue('thumbnail', thumbnail, { shouldValidate: true });
    },
    [setValue],
  );

  const onCancel = () => {
    router.back();
  };

  const onSubmit = (data: PostEditorSchema) => {
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
      <>{formState.errors.totalHeadCount}</>
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
      <EditorFooter
        formState={formState}
        onCancel={onCancel}
        onPublish={openPublishModal}
      />
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
