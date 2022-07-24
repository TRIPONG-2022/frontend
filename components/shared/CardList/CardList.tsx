import React from 'react';
import Card, { ICard } from '../Card';
import * as Styled from './CardList.styled';

interface CardListProps {
  cardList: ICard[];
  columnNumber: number;
}

export default function CardList({ cardList, columnNumber }: CardListProps) {
  return (
    <Styled.CardListContainer $columnNumber={columnNumber}>
      {cardList.map((card) => (
        <Card key={`card-list-${card.id}`} card={card} />
      ))}
    </Styled.CardListContainer>
  );
}
