import React from 'react';

import { Reply } from '@/types/reply';
import { ReplySchema } from '@/constants/schema';

import useToggle from '@/hooks/useToggle';
import ReplyForm from '@/components/reply/ReplyForm';
import ReplyItem from '@/components/reply/ReplyItem';
import useUpdateReplyMutation from '@/components/reply/hooks/useUpdateReplyMutation';
import useDeleteReplyMutation from '@/components/reply/hooks/useDeleteReplyMutation';

import PostReplyList from '../PostReplyList/PostReplyList';
import { usePostReplyListContext } from '../contexts/PostReplyListContext';

import * as Styled from './PostReplyItem.styled';

interface PostReplyItemProps {
  reply: Reply;
}

export default function PostReplyItem({ reply }: PostReplyItemProps) {
  const { toggle: isEditable, onToggle: onToggleIsEditable } = useToggle(false);
  const { mutate: updateReply } = useUpdateReplyMutation(reply);
  const { mutate: deleteReply } = useDeleteReplyMutation(reply);
  const { isOpenReplyForm, openReplyForm } =
    usePostReplyListContext('PostReplyItem');

  function onUpdate(data: ReplySchema) {
    updateReply(data.content, {
      onSuccess: () => {
        onToggleIsEditable();
      },
    });
  }

  const onDelete = () => {
    const isConfirm = window.confirm('정말로 삭제하시겠습니까?');
    if (isConfirm) {
      deleteReply(reply);
    }
  };

  return (
    <>
      <ReplyItem reply={reply}>
        {!isEditable && (
          <ReplyItem.Dropdown
            onUpdate={onToggleIsEditable}
            onDelete={onDelete}
          />
        )}
        {isEditable ? (
          <ReplyItem.ContentEditor
            onUpdate={onUpdate}
            onCancel={onToggleIsEditable}
          />
        ) : (
          <ReplyItem.Content onOpenReplyForm={() => openReplyForm(reply.id)} />
        )}
      </ReplyItem>
      <Styled.ReplyOfReplyWrapper>
        {isOpenReplyForm === reply.id && (
          <ReplyForm
            postId={reply.postId}
            replyId={reply.id}
            onCancel={() => openReplyForm(null)}
          />
        )}
        <PostReplyList postId={reply.postId} replyId={reply.id} />
      </Styled.ReplyOfReplyWrapper>
    </>
  );
}
