import { cardData } from '@/constants/cardData';
import styled, { css } from 'styled-components';
import SVGIcon from '../SVGIcon';
import { useState } from 'react';
import Link from 'next/link';
import LikeButton from '../LikeButton/LikeButton';
interface Img {
  img: string;
}

const CardPresenter = () => {
  const submit = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <Link href={'/'}>
        <Article>
          <ThumbnailContainer>
            <LocationContainer>
              <IconBox>
                <SVGIcon icon="LocationIcon" />
              </IconBox>
              <Location>{cardData.location}</Location>
            </LocationContainer>
            <Thumbnail img={cardData.thumbnail} />
          </ThumbnailContainer>
          <TextBox>
            <TitleContainer>
              <Title>
                {cardData.title}더욱 사람을 모집해봐요더욱 사람을더욱 사람을
                모집해봐요더욱 사람을asd
              </Title>
            </TitleContainer>

            <MeetingBox>
              {/* <SVGIcon icon="CalendarIcon" /> */}
              <Calender>모집기간: 07월 09일 - 15일 </Calender>
              <Calender>모집인원: 4명</Calender>
            </MeetingBox>
            <Description>
              {cardData.description}더욱 사람을 모집해봐요더욱 사람을
              모집해봐요더욱 사람을
              모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요
            </Description>

            <TagContainer>
              {cardData.tag.map((tagname) => (
                <Tag key={`id=${tagname}`}>{tagname}</Tag>
              ))}
            </TagContainer>
          </TextBox>
          <BottomBox>
            <UserContainer>
              <UserImg img={cardData.userImg} />
              <UserName>{cardData.userName}</UserName>
            </UserContainer>
            <LikeContainer onClick={submit}>
              <LikeButton />
              <LikeCount>{cardData.like}</LikeCount>
            </LikeContainer>
          </BottomBox>
        </Article>
      </Link>
    </>
  );
};

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
`;

const Thumbnail = styled.div<Img>`
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
`;

const TextBox = styled.section`
  padding: 0.75rem 0.75rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TitleContainer = styled.div`
  /* margin-bottom: 0.5rem; */
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  @media (max-width: 580px) {
    display: none;
  }
`;

const Calender = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.875rem;
  /* margin-top: 0.5rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.25rem;
  /* flex-basis: 50%; */
`;

const TagContainer = styled.div`
  justify-self: flex-end;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 0.25rem;
  @media (max-width: 580px) {
    display: none;
  }
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

const UserImg = styled.div<Img>`
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

export default CardPresenter;
