import React from 'react';
import Button from '@/components/shared/Button';
import * as Styled from './EditorFooter.styled';

interface EditorFooterProps {
  onCancel?: () => void;
  onPublish?: () => void;
}

export default function EditorFooter({
  onCancel,
  onPublish,
}: EditorFooterProps) {
  return (
    <Styled.Container>
      <Button variant="outline" onClick={onCancel}>
        취소
      </Button>
      <Button onClick={onPublish}>등록</Button>
    </Styled.Container>
  );
}
