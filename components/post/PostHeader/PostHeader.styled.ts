import { SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

export const PostHeaderContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-bottom: 1.5rem;

  ${SCREEN_TABLET} {
    padding-top: 4rem;
    margin-bottom: 2rem;
  }
`;

export const PostCategory = styled.a`
  display: block;
  margin-bottom: 0.625rem;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};

  ${SCREEN_TABLET} {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
`;

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  ${SCREEN_TABLET} {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const PostDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostDetailLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;

export const AuthorProfileImage = styled.div`
  position: relative;
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  overflow: hidden;

  ${SCREEN_TABLET} {
    width: 3rem;
    height: 3rem;
  }
`;

export const PostAuthorAndDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostAuthor = styled.span`
  display: block;

  font-size: 0.875rem;
  margin-bottom: 0.375rem;
  font-weight: 500;

  ${SCREEN_TABLET} {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const PostDate = styled.span`
  display: block;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  ${SCREEN_TABLET} {
    font-size: 0.875rem;
  }
`;

export const PostDetailRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.5rem;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
