import { SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${SCREEN_TABLET} {
    padding-right: 1.75rem;
  }
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  width: 50%;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 0;
`;

export const ContentBox = styled.div`
  width: 100%;
  padding: 0.5rem;
`;
