import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.colors.gray[200]}; */
  padding: 1rem;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 1.5rem;
  position: relative;
`;

export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid black;
  padding-bottom: 0.25rem;
`;

export const Label = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  padding-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  padding-bottom: 0.25rem;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  cursor: pointer;
`;
