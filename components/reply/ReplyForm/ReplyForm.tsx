import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@/components/shared/Button';
import useCreateReplyMutation from '../hooks/useCreateReplyMutation';
import { ReplySchema, REPLY_SCHEMA } from '@/constants/schema';

import * as Styled from './ReplyForm.styled';

interface ReplyFormProps {
  postId: string | number;
  replyId?: string | number;
  onCancel?: () => void;
}

export default function ReplyForm({
  postId,
  replyId,
  onCancel,
}: ReplyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
    reset,
  } = useForm<ReplySchema>({
    mode: 'onChange',
    resolver: yupResolver(REPLY_SCHEMA),
  });

  const { mutate, isLoading } = useCreateReplyMutation(postId, replyId);

  const onSubmit = (data: ReplySchema) => {
    mutate(data.content, {
      onSuccess: () => {
        reset();
        onCancel && onCancel();
      },
    });
  };

  return (
    <Styled.ReplyFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Styled.ReplyTextArea
        preventEnterNewLine
        placeholder="댓글을 남겨보세요."
        {...register('content')}
      />
      <Styled.ReplySubmitWrapper>
        {onCancel && (
          <Button type="button" variant="default" size="sm" onClick={onCancel}>
            취소
          </Button>
        )}
        <Button
          type="submit"
          size="sm"
          disabled={!isValid || !isDirty || isLoading}
        >
          등록
        </Button>
      </Styled.ReplySubmitWrapper>
    </Styled.ReplyFormContainer>
  );
}
