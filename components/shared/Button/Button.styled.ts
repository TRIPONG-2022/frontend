import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;

  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #0dc5d6;

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    opacity: 0.25;
    pointer-events: none;
  }
`;
