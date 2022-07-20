import { cardList } from '@/constants/cardData';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import CardPresentation from './CardPresentation';

interface CardListProps {
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
}

const CardContainer = () => {
  return (
    <Grid>
      {cardList.map((item: CardListProps, index) => {
        return <Card key={`card-id${index}`} item={item} />;
      })}
    </Grid>
  );
};

const Card = ({ item }: CardProps) => {
  const [endMeetPost, setEndMeetPost] = useState(false);

  useLayoutEffect(() => {
    const endDate = new Date(item.endDate);
    const currentDate = new Date();
    if (endDate < currentDate) {
      setEndMeetPost(true);
    }
  }, []);

  const submit = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <CardPresentation
      item={item}
      endMeetPost={endMeetPost}
      likeToggle={submit}
    />
  );
};

export default CardContainer;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(290px, 1fr));
  gap: 0.75rem;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 630px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
