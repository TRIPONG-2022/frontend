import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import SVGIcon from '../SVGIcon';
import LikeButton from '../LikeButton/LikeButton';
import * as Styled from './Card.Styled';

export interface ICard {
  id: number;
  category: string;
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
            <Styled.Location>{card.location}</Styled.Location>
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
              <Styled.Description>{card.description}</Styled.Description>
            </Styled.TextContainer>
            <Styled.TagContainer>
              {card.tag.slice(0, 3).map((tagname) => (
                <Styled.Tag key={`id=${tagname}`}>#{tagname}</Styled.Tag>
              ))}
            </Styled.TagContainer>
          </Styled.TopContainer>

          <Styled.BottomContanier>
            <Styled.UserContainer>
              <Styled.UserImg img={card.userImg} />
              <Styled.UserName>{card.userName}</Styled.UserName>
            </Styled.UserContainer>
            <Styled.LikeContainer onClick={onToggleLike}>
              <LikeButton />
              <Styled.LikeCount>
                {Number(card.like) > 99 ? 99 + '+' : card.like}
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
