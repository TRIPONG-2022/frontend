import styled, { css } from 'styled-components';

export const AddRoleContainer = styled.div`
  width: 100%;
`;

export const AddRoleWrapper = styled.div``;

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

export const Button = styled.button<{ primary?: boolean }>`
  width: 8rem;

  margin-right: 1rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary.hex};
  border-radius: 1rem;
  padding: 0.75rem 0rem;

  ${({ primary }) =>
    primary &&
    css`
      background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
      border-color: white;
    `};

  font-size: 1.25rem;
  font-weight: 600;
`;
