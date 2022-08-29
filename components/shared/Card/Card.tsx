import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import SVGIcon from '../SVGIcon';
import LikeButton from '../LikeButton/LikeButton';
import * as Styled from './Card.Styled';

export interface ICard {
  id: number;
  author: string;
  budget: number;
  category: string;
  title: string;
  content: string;
  curHeadCount: number;
  totalHeadCount: number;
  startDate: string;
  endDate: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  likeCount: number;
  viewCount: number;
  latitude: number;
  longitude: number;
}

interface CardProps {
  card: ICard;
}

export default function Card({ card }: CardProps) {
  const endMeetPost = useMemo(() => {
    const endDate = new Date(card.endDate);
    const currentDate = new Date();
    return endDate < currentDate;
  }, [card.endDate]);

  const onToggleLike = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Link href={'/'}>
      <Styled.Article>
        <Styled.ThumbnailContainer>
          <Styled.Thumbnail className="thumbnail" img={card.thumbnail} />
          <Styled.LocationContainer>
            <Styled.IconBox>
              <SVGIcon icon="LocationIcon" />
            </Styled.IconBox>
            <Styled.Location>{`임시 장소`}</Styled.Location>
            {/* 위에는 원래 location 으로 목적지가 들어갔어야한다 */}
          </Styled.LocationContainer>
        </Styled.ThumbnailContainer>

        <Styled.ContentContainer>
          <Styled.TopContainer>
            <Styled.TextContainer>
              <Styled.Title>
                {card.category !== 'gathering' ? null : endMeetPost ? (
                  <Styled.MeetStatus $end>모집종료</Styled.MeetStatus>
                ) : (
                  <Styled.MeetStatus>모집중</Styled.MeetStatus>
                )}
                {card.title}
              </Styled.Title>
              <Styled.Description>{card.content}</Styled.Description>
            </Styled.TextContainer>
            <Styled.TagContainer>
              {card.tags.slice(0, 3).map((tagname) => (
                <Styled.Tag key={`id=${tagname}`}>#{tagname}</Styled.Tag>
              ))}
            </Styled.TagContainer>
          </Styled.TopContainer>

          <Styled.BottomContanier>
            <Styled.UserContainer>
              <Styled.UserImg img={card.thumbnail} />
              {/* 위에는 원래 userImg가 들어가야한다. */}
              <Styled.UserName>{card.author}</Styled.UserName>
            </Styled.UserContainer>
            <Styled.LikeContainer onClick={onToggleLike}>
              <LikeButton />
              <Styled.LikeCount>
                {Number(card.likeCount) > 99 ? 99 + '+' : card.likeCount}
              </Styled.LikeCount>
            </Styled.LikeContainer>
          </Styled.BottomContanier>
        </Styled.ContentContainer>

        {card.category == 'gathering' && card.totalHeadCount == 0 && (
          <Styled.FullPost>
            <Styled.FullPostText>모집이 완료되었습니다.</Styled.FullPostText>
          </Styled.FullPost>
        )}
      </Styled.Article>
    </Link>
  );
}
