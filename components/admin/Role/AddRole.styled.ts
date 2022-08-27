import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const AddRoleInPutWrapper = styled.div`
  flex-grow: 1;
`;

export const AddRoleWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 10rem;

  margin-left: 1rem;
  border-radius: 2rem;

  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
`;
