import styled from 'styled-components';
import ResizableTextArea from '@/components/shared/ResizableTextArea';

export const ReplyFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.25rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const ReplyTextArea = styled(ResizableTextArea)`
  display: block;
  width: 100%;
  border: 0;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  &:focus {
    outline: none;
  }
`;

export const ReplySubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 0.75rem;
`;
