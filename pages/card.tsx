import CardPresenter from '@/components/shared/Card/CardPresenter';
import styled from 'styled-components';

const CardPage = () => {
  return (
    // <div style={{ maxWidth: '768px', margin: '0 auto', padding: '10rem 4rem' }}>
    <Grid>
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
      <CardPresenter />
    </Grid>
    // </div>
  );
};

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
`;
export default CardPage;
