import styled from 'styled-components';

export const AddRoleContainer = styled.div`
  width: 100%;
`;

export const AddRoleWrapper = styled.div`
  /* display: flex;
  align-items: center;
  @media (max-width: 550px) {
    display: block;
  } */
`;

export const AddRoleInPutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-grow: 1;

  margin-right: 1rem;
`;

export const InputWrapper = styled.div`
  flex-grow: 1;

  width: 20rem;
  max-width: 20rem;
`;

export const Button = styled.button`
  width: 8rem;

  border-radius: 1rem;
  padding: 0.75rem 0rem;

  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);

  font-size: 1.25rem;
  font-weight: 600;
`;
