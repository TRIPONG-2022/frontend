import styled from 'styled-components';

export const ManagedUserRoleChangeContainer = styled.div`
  width: 100%;

  margin-top: 1rem;
`;

export const RoleItemContainer = styled.li`
  padding: 0.75rem;
`;

export const RoleItemText = styled.span`
  padding: 0.25rem 0.375rem;
  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
  border-radius: 1rem;

  font-weight: 600;
`;

export const SelectContainer = styled.ul`
  border: 1px solid black;
  border-radius: 1rem;
`;

export const SelectedText = styled.p`
  margin: 1rem auto;

  font-weight: 600;
  text-align: center;
`;
