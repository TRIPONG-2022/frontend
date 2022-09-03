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
import { requestCreatePost } from '@/api/post';
import { PostEditorSchema } from '@/constants/schema';
import * as Styled from './Editor.styled';

interface EditorProps {
  initialContent: string;
}

export default function Editor({ initialContent }: EditorProps) {
  const router = useRouter();
  const [isOpenPublishModal, setIsOpenPublishModal] = useState<boolean>(false);
  const { register, handleSubmit, watch, setValue, formState } =
    useFormContext<PostEditorSchema>();

  const onCancel = () => {
    router.back();
  };

  const onSubmit = async (data: PostEditorSchema) => {
    console.log(data);
    // await requestCreatePost(data);
    router.replace('/posts');
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
      <TagInput />
      <TipTap initialContent={initialContent} />
      <EditorFooter onCancel={onCancel} onPublish={openPublishModal} />
      <PublishModal
        isOpen={isOpenPublishModal}
        onClose={closePublishModal}
        onPublish={handleSubmit(onSubmit)}
      />
    </Styled.Container>
  );
}
