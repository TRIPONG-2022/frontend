import styled, { css } from 'styled-components';
import SVGIcon from '../SVGIcon';
import React, { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import LikeButton from '../LikeButton/LikeButton';

interface ImgStyledProps {
  img: string;
}

interface MeetStatusProps {
  end?: boolean;
}

interface CardProps {
  item: {
    thumbnail: string;
    title: string;
    description: string;
    tag: string[];
    userName: string;
    userImg: string;
    like: number;
    location: string;
    totalHeadCount: number;
    endDate: string;
  };
  endMeetPost: boolean;
  // likeToggle: (e: React.MouseEvent<HTMLDivElement>) => void;
  likeToggle: any;
}

const CardTextGrid = ({ item, endMeetPost, likeToggle }: CardProps) => {
  return (
    <>
      <Link href={'/'}>
        <Article>
          {item.totalHeadCount == 0 && (
            <FullPost>
              <FullPostText>모집이 완료되었습니다.</FullPostText>
            </FullPost>
          )}
          <ThumbnailContainer>
            <LocationContainer>
              <IconBox>
                <SVGIcon icon="LocationIcon" />
              </IconBox>
              <Location>{item.location}</Location>
            </LocationContainer>
            <Thumbnail img={item.thumbnail} />
          </ThumbnailContainer>

          <TextBox>
            <Title>
              {endMeetPost ? (
                <MeetStatus end>모집종료</MeetStatus>
              ) : (
                <MeetStatus>모집중</MeetStatus>
              )}
              {item.title}더욱 사람을 모집해봐요더욱 사람을더욱 사람을
              모집해봐요더욱 사람을asd
            </Title>

            <Description>
              {item.description}더욱 사람을 모집해봐요더욱 사람을 모집해봐요더욱
              사람을
              모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요
              모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요
            </Description>

            <TagContainer>
              {item.tag.map((tagname) => (
                <Tag key={`id=${tagname}`}>{tagname}</Tag>
              ))}
            </TagContainer>
          </TextBox>
          <BottomBox>
            <UserContainer>
              <UserImg img={item.userImg} />
              <UserName>{item.userName}</UserName>
            </UserContainer>
            <LikeContainer onClick={likeToggle}>
              <LikeButton />
              <LikeCount>{item.like}</LikeCount>
            </LikeContainer>
          </BottomBox>
        </Article>
      </Link>
    </>
  );
};

const FullPost = styled.div`
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

const FullPostText = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  @media (max-width: 630px) {
    height: 60%;
  }
`;

const Thumbnail = styled.div<ImgStyledProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Article = styled.article`
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

const TextBox = styled.section`
  padding: 1rem 0.75rem 0.75rem;
  height: 40%;
  display: grid;
  @media (max-width: 630px) {
    height: 30%;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MeetStatus = styled.strong<MeetStatusProps>`
  color: #39c877;
  ${({ end }) => end && 'color: #aaa'};
  margin-right: 0.25rem;
`;

const LocationContainer = styled.div`
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

const IconBox = styled.div`
  background-color: white;
  padding: 0.4rem;
  border-radius: 9999px;
`;

const Location = styled.p`
  margin-left: 0.5rem;
`;

const MeetingBox = styled.div`
  display: flex;

  justify-content: space-around;
  font-size: 0.875rem;
  background-color: #86c9e8;
  border-radius: 10px;
  padding: 5px 0;
`;

const Calender = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.25rem;
  height: 2.5rem;
  @media (max-width: 630px) {
    -webkit-line-clamp: 3;
    height: 3.75rem;
  }
`;

const TagContainer = styled.div`
  align-self: flex-end;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 0.25rem;
`;

const Tag = styled.small`
  margin-right: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #86c9e8;
`;

const BottomBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  padding: 0.6rem 0.75rem;
  height: 10%;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.div<ImgStyledProps>`
  width: 1.7rem;
  height: 1.7rem;
  background-image: url(${(props) => props.img});
  background-size: 1.7rem;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

const UserName = styled.p`
  margin-left: 0.5rem;
`;

const LikeContainer = styled.div`
  display: flex;
`;

const LikeCount = styled.p`
  margin-left: 0.5rem;
  &::after {
    display: inline-block;
    content: '+';
  }
`;

export default CardTextGrid;
