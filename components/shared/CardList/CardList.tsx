import React from 'react';
import Card, { ICard } from '../Card';
import * as Styled from './CardList.styled';

interface CardListProps {
  cardList: ICard[];
  columnNumber: number | boolean;
}

export default function CardList({ cardList, columnNumber }: CardListProps) {
  console.log(columnNumber);
  return (
    <>
      {columnNumber ? (
        <Styled.CardListContainer $columnNumber={columnNumber as number}>
          {cardList.map((card) => (
            <Card key={`card-list-${card.id}`} card={card} />
          ))}
        </Styled.CardListContainer>
      ) : null}
    </>
  );
}
