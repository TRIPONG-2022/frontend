import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 1rem;

  border: 2px solid;
  border-color: black;
  border-radius: 1rem;

  margin-bottom: 1rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: 0.25rem;
`;

export const NickName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 1rem;
`;

export const Name = styled.p`
  font-size: 1rem;
`;

export const LoginId = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 1rem;
`;

export const CreateDate = styled.p`
  font-weight: 500;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;
