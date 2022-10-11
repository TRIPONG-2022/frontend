import styled from 'styled-components';
import ResizableTextArea from '@/components/shared/ResizableTextArea';

export const ReplyItemContainer = styled.div`
  padding-top: 0.75rem;
`;

export const ReplyItemWrapper = styled.div`
  position: relative;
  display: flex;
  column-gap: 0.75rem;
  padding-bottom: 0.75rem;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Author = styled.strong`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
`;

export const EditIndicator = styled.span`
  color: ${({ theme }) => theme.colors.primary.hex};
  &::after {
    content: '·';
    padding: 0 0.25rem;
  }
`;

export const ReplyContentContainer = styled.div``;

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  word-break: keep-all;
  overflow-wrap: break-word;
  margin-bottom: 0.5rem;
  white-space: pre-line;
`;

export const DetailWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[600]};

  button {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const UtilWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ContentTextArea = styled(ResizableTextArea)`
  width: 100%;
  border: 0;
  font-size: 1rem;
  line-height: 1.5;
  &:focus {
    outline: none;
  }
`;

export const EditUtilWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ReplyOfReplyWrapper = styled.div`
  padding-left: 3rem;
`;
