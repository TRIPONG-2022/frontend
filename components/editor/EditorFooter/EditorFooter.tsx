import React from 'react';
import Button from '@/components/shared/Button';
import * as Styled from './EditorFooter.styled';
import { FormState } from 'react-hook-form';
import { PostEditorSchema } from '@/constants/schema';

interface EditorFooterProps {
  onCancel?: () => void;
  onPublish?: () => void;
  formState: FormState<PostEditorSchema>;
}

export default function EditorFooter({
  formState: { isValid },
  onCancel,
  onPublish,
}: EditorFooterProps) {
  return (
    <Styled.Container>
      <Button variant="outline" onClick={onCancel}>
        취소
      </Button>
      <Button onClick={onPublish} disabled={!isValid}>
        등록
      </Button>
    </Styled.Container>
  );
}
