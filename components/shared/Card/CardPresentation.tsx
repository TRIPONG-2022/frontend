import styled, { css } from 'styled-components';
import SVGIcon from '../SVGIcon';
import React, { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import LikeButton from '../LikeButton/LikeButton';
import * as Styled from './CartPresentation.Styled';

interface CardProps {
  item: {
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
  };
  endMeetPost: boolean;
  // likeToggle: (e: React.MouseEvent<HTMLDivElement>) => void;
  likeToggle: any;
}

const CardTextGrid = ({ item, endMeetPost, likeToggle }: CardProps) => {
  return (
    <>
      <Link href={'/'}>
        <Styled.Article>
          {item.category == 'gathering' && item.totalHeadCount == 0 && (
            <Styled.FullPost>
              <Styled.FullPostText>모집이 완료되었습니다.</Styled.FullPostText>
            </Styled.FullPost>
          )}
          <Styled.ThumbnailContainer>
            <Styled.LocationContainer>
              <Styled.IconBox>
                <SVGIcon icon="LocationIcon" />
              </Styled.IconBox>
              <Styled.Location>{item.location}</Styled.Location>
            </Styled.LocationContainer>
            <Styled.Thumbnail img={item.thumbnail} />
          </Styled.ThumbnailContainer>

          <Styled.TextBox>
            <Styled.Title>
              {item.category !== 'gathering' ? null : endMeetPost ? (
                <Styled.MeetStatus end>모집종료</Styled.MeetStatus>
              ) : (
                <Styled.MeetStatus>모집중</Styled.MeetStatus>
              )}
              {item.title}더욱 사람을 모집해봐요더욱 사람을더욱 사람을
              모집해봐요더욱 사람을asd
            </Styled.Title>

            <Styled.Description>
              {item.description}더욱 사람을 모집해봐요더욱 사람을 모집해봐요더욱
              사람을
              모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요
              모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요모집해봐요
            </Styled.Description>

            <Styled.TagContainer>
              {item.tag.map((tagname) => (
                <Styled.Tag key={`id=${tagname}`}>{tagname}</Styled.Tag>
              ))}
            </Styled.TagContainer>
          </Styled.TextBox>
          <Styled.BottomBox>
            <Styled.UserContainer>
              <Styled.UserImg img={item.userImg} />
              <Styled.UserName>{item.userName}</Styled.UserName>
            </Styled.UserContainer>
            <Styled.LikeContainer onClick={likeToggle}>
              <LikeButton />
              <Styled.LikeCount>{item.like}</Styled.LikeCount>
            </Styled.LikeContainer>
          </Styled.BottomBox>
        </Styled.Article>
      </Link>
    </>
  );
};

export default CardTextGrid;
