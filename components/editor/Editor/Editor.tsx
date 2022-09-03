import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';
import TipTap from '../TipTap';
import TagInput from '../TagInput';
import TitleInput from '../TitleInput';
import EditorFooter from '../EditorFooter';
import EditorHeader from '../EditorHeader';
import HeadCountInput from '../HeadCountInput';
import DateRangeInput from '../DateRangeInput';
import PublishModal from '../PublishModal';
import { PostEditorSchema } from '@/constants/schema';
import { requestCreatePost } from '@/api/post';
import * as Styled from './Editor.styled';

interface EditorProps {
  initialValues?: Partial<PostEditorSchema>;
}

export default function Editor({ initialValues }: EditorProps) {
  const router = useRouter();
  const [isOpenPublishModal, setIsOpenPublishModal] = useState<boolean>(false);
  const { register, handleSubmit, watch, setValue, formState } =
    useFormContext<PostEditorSchema>();

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

  const onSubmit = async (data: PostEditorSchema) => {
    alert(JSON.stringify(data));
    // await requestCreatePost(data);
    // router.replace('/posts');
  };

  const openPublishModal = () => {
    setIsOpenPublishModal(true);
  };

  const closePublishModal = () => {
    setIsOpenPublishModal(false);
  };

  return (
    <Styled.Container>
      <EditorHeader />
      {watch('category') === 'gathering' && (
        <React.Fragment>
          <HeadCountInput />
          <DateRangeInput />
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
