import styled from 'styled-components';

export const PostFooterContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export const PostUtilWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const PostUtilButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;

  & > svg {
    margin-right: 0.25rem;
  }

  & > p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    & > strong {
      margin-left: 0.25rem;
      font-weight: 700;
    }
  }

  &:disabled {
    pointer-events: none;
  }
`;

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
