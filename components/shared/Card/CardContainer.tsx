import { cardList } from '@/constants/cardData';
import styled from 'styled-components';
import CardTextGrid from './CardPresentation';

interface CardProps {
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

const CardContainer = () => {
  return (
    <Grid>
      {cardList.map((item: CardProps, index) => {
        return <CardTextGrid key={`card-id${index}`} item={item} />;
      })}
    </Grid>
  );
};

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
export default CardContainer;
