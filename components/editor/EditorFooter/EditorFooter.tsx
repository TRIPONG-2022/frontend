import React from 'react';
import Button from '@/components/shared/Button';
import * as Styled from './EditorFooter.styled';
import { FormState } from 'react-hook-form';
import { PostSchema } from '../Editor/Editor';

interface EditorFooterProps {
  onCancel?: () => void;
  onPublish?: () => void;
  formState: FormState<PostSchema>;
}

export default function EditorFooter({
  onCancel,
  onPublish,
  formState: { isValid, isDirty },
}: EditorFooterProps) {
  return (
    <Styled.Container>
      <Button variant="outline" onClick={onCancel}>
        취소
      </Button>
      <Button onClick={onPublish} disabled={!isValid || !isDirty}>
        등록
      </Button>
    </Styled.Container>
  );
}
