import styled from 'styled-components';

export const PostItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.6255rem 0;
`;

export const Title = styled.strong`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0.75rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const TagList = styled.ul`
  display: flex;
  column-gap: 0.25rem;
`;

export const TagItem = styled.li`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  margin-right: 0.5rem;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[500]};

  div + div {
    margin-left: 0.25rem;
  }
`;
