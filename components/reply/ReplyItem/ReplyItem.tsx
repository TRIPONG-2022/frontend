import React, { useMemo } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';

import { AppState } from '@/store/index';
import { Reply } from '@/types/reply';
import { ReplySchema, REPLY_SCHEMA } from '@/constants/schema';
import useToggle from '@/hooks/useToggle';
import Button from '@/components/shared/Button';
import SVGIcon from '@/components/shared/SVGIcon';
import Dropdown from '@/components/shared/Dropdown';
import ReplyForm from '../ReplyForm';
import ReplyList from '../ReplyList';
import useUpdateReplyMutation from '../hooks/useUpdateReplyMutation';
import useDeleteReplyMutation from '../hooks/useDeleteReplyMutation';
import { useReplyListContext } from '../contexts/ReplyListContext';

import * as Styled from './ReplyItem.styled';

interface ReplyItemProps {
  reply: Reply;
}

export default function ReplyItem({ reply }: ReplyItemProps) {
  const { user } = useSelector((state: AppState) => state.user);
  const { isOpenReplyForm, openReplyForm } = useReplyListContext('ReplyItem');
  const { toggle: isEditable, onToggle: onToggleIsEditable } = useToggle(false);
  const { mutate: updateReply } = useUpdateReplyMutation(reply);
  const { mutate: deleteReply } = useDeleteReplyMutation(reply);

  const isAuthor = useMemo(() => user?.loginId === reply.userId, [user, reply]);
  const onUpdate = (data: ReplySchema) => {
    updateReply(data.content, {
      onSuccess: () => {
        onToggleIsEditable();
      },
    });
  };

  const onDelete = () => {
    deleteReply(reply);
  };

  return (
    <Styled.ReplyItemOuter>
      <Styled.ReplyItemInner>
        <Styled.ProfileImageContainer>
          <Image src="/images/profile.png" alt="프로필 이미지" layout="fill" />
        </Styled.ProfileImageContainer>
        <Styled.ContentContainer>
          <Styled.Author>
            {isEditable && <Styled.EditIndicator>수정중</Styled.EditIndicator>}
            {reply.userId}
          </Styled.Author>
          {!isEditable && <ReplyContent reply={reply} />}
          {isEditable && (
            <ReplyContentEditor
              reply={reply}
              onUpdate={onUpdate}
              onCancel={onToggleIsEditable}
            />
          )}
        </Styled.ContentContainer>
        {isAuthor && !isEditable && (
          <Styled.UtilContainer>
            <Dropdown>
              <Dropdown.Button>
                <SVGIcon icon="MoreVerticalIcon" />
              </Dropdown.Button>
              <Dropdown.Items width="8rem">
                <Dropdown.Item onClick={onToggleIsEditable}>
                  수정하기
                </Dropdown.Item>
                <Dropdown.Item onClick={onDelete}>삭제하기</Dropdown.Item>
              </Dropdown.Items>
            </Dropdown>
          </Styled.UtilContainer>
        )}
      </Styled.ReplyItemInner>
      <Styled.ReplyOfReplyContainer>
        {isOpenReplyForm === reply.id && (
          <ReplyForm
            postId={reply.postId}
            replyId={reply.id}
            onCancel={() => openReplyForm(null)}
          />
        )}
        <ReplyList postId={reply.postId} replyId={reply.id} />
      </Styled.ReplyOfReplyContainer>
    </Styled.ReplyItemOuter>
  );
}

function ReplyContent({ reply }: ReplyItemProps) {
  const { openReplyForm } = useReplyListContext('ReplyContent');
  const { isLogIn } = useSelector((state: AppState) => state.user);

  return (
    <React.Fragment>
      <Styled.Content>{reply.content}</Styled.Content>
      <Styled.DetailContainer>
        <span>
          {format(new Date(`${reply.modifiedDate} UTC`), 'yyyy.MM.dd hh:mm')}
        </span>
        {isLogIn && !reply.parentReply && (
          <button type="button" onClick={() => openReplyForm(reply.id)}>
            답글쓰기
          </button>
        )}
      </Styled.DetailContainer>
    </React.Fragment>
  );
}

interface ReplyContentEditorProps extends ReplyItemProps {
  onUpdate: (data: ReplySchema) => void;
  onCancel: () => void;
}

function ReplyContentEditor({
  reply,
  onUpdate,
  onCancel,
}: ReplyContentEditorProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ReplySchema>({
    mode: 'onChange',
    resolver: yupResolver(REPLY_SCHEMA),
    defaultValues: {
      content: reply.content,
    },
  });

  return (
    <form onSubmit={handleSubmit(onUpdate)}>
      <Styled.ContentTextArea
        placeholder="수정할 댓글을 입력해주세요."
        {...register('content')}
      />
      <Styled.EditUtilContainer>
        <Button variant="default" size="sm" onClick={onCancel}>
          취소
        </Button>
        <Button type="submit" size="sm" disabled={!isValid || !isDirty}>
          수정
        </Button>
      </Styled.EditUtilContainer>
    </form>
  );
}
