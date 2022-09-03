import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@/components/shared/Button';
import { PostEditorSchema } from '@/constants/schema';
import * as Styled from './EditorFooter.styled';

interface EditorFooterProps {
  onCancel?: () => void;
  onPublish?: () => void;
}

export default function EditorFooter({
  onCancel,
  onPublish,
}: EditorFooterProps) {
  const {
    formState: { isValid },
  } = useFormContext<PostEditorSchema>();

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
