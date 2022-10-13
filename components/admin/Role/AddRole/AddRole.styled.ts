import styled from 'styled-components';

export const AddRoleContainer = styled.div`
  width: 100%;
`;

export const AddRoleInPutWrapper = styled.div`
  flex-grow: 1;
`;

export const AddRoleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 10rem;

  margin-left: 1rem;
  border-radius: 1rem;
  padding: 1.75rem;

  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);

  font-size: 1.25rem;
  font-weight: 600;
`;
