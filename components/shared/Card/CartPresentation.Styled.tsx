import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

interface ImgStyledProps {
  img: string;
}

interface MeetStatusProps {
  end?: boolean;
}

export const FullPost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(85, 85, 85, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
`;

export const FullPostText = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  /* @media (max-width: 630px) {
    height: 60%;
  } */
  ${SCREEN_TABLET} {
    height: 60%;
  }
`;

export const Thumbnail = styled.div<ImgStyledProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Article = styled.article`
  width: 100%;
  aspect-ratio: 1/1;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 0.75rem;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: translateY(-0.5rem);
  }
  &:hover ${Thumbnail} {
    transform: scale(1.1);
    transition: all 250ms ease-in;
  }
  /* 섬네일 사진을 확대하고 싶었는데, absoulte로 고정해둔 제주도가 없어진다.. */
  position: relative;
`;

export const TextBox = styled.section`
  padding: 1rem 0.75rem 0.75rem;
  height: 30%;
  display: grid;
  ${SCREEN_TABLET} {
    height: 40%;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MeetStatus = styled.strong<MeetStatusProps>`
  color: ${({ theme }) => theme.colors.primary.hex};
  ${({ end }) => end && 'color: #aaa'};
  margin-right: 0.25rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  padding: 0.375rem 0.75rem;
  border-radius: 1.5rem;
  flex-shrink: 0;
  font-size: 0.75rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const IconBox = styled.div`
  background-color: white;
  padding: 0.4rem;
  border-radius: 9999px;
`;

export const Location = styled.p`
  margin-left: 0.5rem;
`;

export const MeetingBox = styled.div`
  display: flex;

  justify-content: space-around;
  font-size: 0.875rem;
  background-color: #86c9e8;
  border-radius: 10px;
  padding: 5px 0;
`;

export const Calender = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.25rem;
  max-height: 1.25rem;

  ${SCREEN_TABLET} {
    -webkit-line-clamp: 2;
    max-height: 2.5rem;
    color: red;
  }

  ${SCREEN_DESKTOP} {
    -webkit-line-clamp: 3;
    max-height: 3.75rem;
    color: blue;
  }
`;

export const TagContainer = styled.div`
  align-self: flex-end;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 0.25rem;
`;

export const Tag = styled.small`
  margin-right: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #86c9e8;
`;

export const BottomBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  padding: 0.625rem 0.75rem;
  height: 10%;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.div<ImgStyledProps>`
  width: 1.75rem;
  height: 1.75rem;
  background-image: url(${(props) => props.img});
  background-size: 1.75rem;
  background-repeat: no-repeat;
  border-radius: 99999px;
`;

export const UserName = styled.p`
  margin-left: 0.5rem;
`;

export const LikeContainer = styled.div`
  display: flex;
`;

export const LikeCount = styled.p`
  margin-left: 0.5rem;
  &::after {
    display: inline-block;
    content: '+';
  }
`;
