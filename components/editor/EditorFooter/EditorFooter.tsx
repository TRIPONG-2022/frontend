import React from 'react';
import Button from '@/components/shared/Button';
import * as Styled from './EditorFooter.styled';

interface EditorFooterProps {
  onCancel?: () => void;
  onPublish?: () => void;
}

export default function EditorFooter({}: EditorFooterProps) {
  return (
    <Styled.Container>
      <Button variant="outline">취소</Button>
      <Button>등록</Button>
    </Styled.Container>
  );
}
