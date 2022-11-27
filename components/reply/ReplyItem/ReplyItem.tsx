import React, { createContext, useContext, useMemo } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';

import { AppState } from '@/store/index';
import { Reply } from '@/types/reply';
import { elapsedTime } from '@/utils/date';
import { ReplySchema, REPLY_SCHEMA } from '@/constants/schema';
import SVGIcon from '@/components/shared/SVGIcon';
import Button from '@/components/shared/Button';
import Dropdown from '@/components/shared/Dropdown';

import * as Styled from './ReplyItem.styled';

interface ReplyItemContextState {
  reply: Reply;
}

const ReplyItemContext = createContext<ReplyItemContextState | null>(null);

function useReplyItemContext(componentName: string) {
  const context = useContext(ReplyItemContext);
  if (!context) {
    throw new Error(
      `<${componentName} /> is missing a parent <ReplyItem /> component.`,
    );
  }
  return context;
}

interface ReplyItemProps {
  reply: Reply;
  children?: React.ReactNode;
}

function ReplyItem({ reply, children }: ReplyItemProps) {
  return (
    <ReplyItemContext.Provider value={{ reply }}>
      <Styled.ReplyItemContainer>
        <Styled.ReplyItemWrapper>
          <Styled.ProfileImageWrapper>
            <Image
              src="/images/profile.png"
              alt="프로필 이미지"
              layout="fill"
            />
          </Styled.ProfileImageWrapper>
          <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
        </Styled.ReplyItemWrapper>
      </Styled.ReplyItemContainer>
    </ReplyItemContext.Provider>
  );
}

interface ReplyContentProps {
  onOpenReplyForm?: () => void;
}

function ReplyContent({ onOpenReplyForm }: ReplyContentProps) {
  const { reply } = useReplyItemContext('ReplyContent');
  const { isLogIn } = useSelector((state: AppState) => state.user);
  const isReplyButtonVisible = useMemo(
    () => isLogIn && !reply.parentReply && onOpenReplyForm,
    [isLogIn, reply, onOpenReplyForm],
  );
  const isEdited = useMemo(
    () => reply.createdDate !== reply.modifiedDate,
    [reply],
  );

  return (
    <Styled.ReplyContentContainer>
      <Styled.Author>{reply.userId}</Styled.Author>
      <Styled.Content>{reply.content}</Styled.Content>
      <Styled.DetailWrapper>
        <span>
          {elapsedTime(`${reply.modifiedDate} UTC`)}
          {isEdited && ' • 수정됨'}
        </span>
        {isReplyButtonVisible && (
          <button type="button" onClick={onOpenReplyForm}>
            답글쓰기
          </button>
        )}
      </Styled.DetailWrapper>
    </Styled.ReplyContentContainer>
  );
}

interface ReplyContentEditorProps {
  onUpdate: (data: ReplySchema) => void;
  onCancel: () => void;
}

function ReplyContentEditor({ onUpdate, onCancel }: ReplyContentEditorProps) {
  const { reply } = useReplyItemContext('ReplyContentEditor');
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
    <Styled.ReplyContentEditorContainer>
      <Styled.Author>
        <Styled.EditIndicator>수정중</Styled.EditIndicator>
        {reply.userId}
      </Styled.Author>
      <form onSubmit={handleSubmit(onUpdate)}>
        <Styled.ContentTextArea
          placeholder="수정할 댓글을 입력해주세요."
          {...register('content')}
        />
        <Styled.EditUtilWrapper>
          <Button type="submit" size="sm" disabled={!isValid || !isDirty}>
            수정
          </Button>
          <Button variant="default" size="sm" onClick={onCancel}>
            취소
          </Button>
        </Styled.EditUtilWrapper>
      </form>
    </Styled.ReplyContentEditorContainer>
  );
}

interface ReplyDropdownProps {
  onUpdate?: () => void;
  onDelete?: () => void;
}

function ReplyDropdown({ onUpdate, onDelete }: ReplyDropdownProps) {
  return (
    <Styled.UtilWrapper>
      <Dropdown>
        <Dropdown.Button>
          <SVGIcon icon="MoreVerticalIcon" />
        </Dropdown.Button>
        <Dropdown.Items width="8rem">
          <Dropdown.Item onClick={onUpdate}>수정하기</Dropdown.Item>
          <Dropdown.Item onClick={onDelete}>삭제하기</Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>
    </Styled.UtilWrapper>
  );
}

export default Object.assign(ReplyItem, {
  Content: ReplyContent,
  ContentEditor: ReplyContentEditor,
  Dropdown: ReplyDropdown,
});
