import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

interface ImgStyledProps {
  img: string;
}

interface MeetStatusProps {
  $end?: boolean;
}

export const FullPost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blackAlpha[700]};
`;

export const FullPostText = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Article = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 16px 48px 0px;
  transition: transform 0.25s ease-in-out;
  overflow: hidden;
  &:hover {
    & .thumbnail {
      transform: scale(1.05);
    }
  }
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const Thumbnail = styled.div<ImgStyledProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  transition: transform 0.25s ease-in;
`;

export const LocationContainer = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;

  display: flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.375rem 0.75rem;

  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.blackAlpha[500]};
`;

export const IconBox = styled.div`
  color: #000000;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  padding: 0.375rem;
  border-radius: 9999px;
`;

export const Location = styled.p`
  margin-left: 0.5rem;
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 50%;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 0.75rem;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
`;

export const MeetStatus = styled.strong<MeetStatusProps>`
  color: ${({ theme, $end }) =>
    !$end ? theme.colors.primary.hex : theme.colors.gray[500]};
  margin-right: 0.375rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 1.25rem;
  max-height: 1.25rem;

  ${SCREEN_TABLET} {
    -webkit-line-clamp: 2;
    max-height: 2.5rem;
  }

  ${SCREEN_DESKTOP} {
    -webkit-line-clamp: 3;
    max-height: 3.75rem;
  }
`;

export const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  column-gap: 0.75rem;
`;

export const Tag = styled.li`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.hex}; ;
`;

export const BottomContanier = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.blackAlpha[50]};
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.div<ImgStyledProps>`
  width: 1.75rem;
  height: 1.75rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 9999px;
`;

export const UserName = styled.p`
  font-weight: 500;
  margin-left: 0.5rem;
`;

export const LikeContainer = styled.div`
  display: flex;
`;

export const LikeCount = styled.p`
  margin-left: 0.375rem;
  font-size: 0.875rem;
`;
