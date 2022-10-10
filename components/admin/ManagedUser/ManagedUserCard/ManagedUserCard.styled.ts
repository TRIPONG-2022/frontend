import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 1rem;

  height: 30rem;

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

interface NickNameProps {
  isBlack: boolean;
}

export const NickName = styled.p<NickNameProps>`
  ${({ isBlack }) =>
    isBlack &&
    css`
      color: red;
    `}

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

export const CreateDateSpan = styled.span`
  margin-left: 0.5rem;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;

  z-index: 10;
  cursor: pointer;
`;

interface ActiveProps {
  toggle: boolean;
}

export const Back = styled.div<ActiveProps>`
  ${({ toggle }) =>
    toggle &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      z-index: 5;
    `}
`;

export const DropdownList = styled.ul<ActiveProps>`
  position: absolute;
  top: 1rem;
  right: 0;

  ${({ toggle }) =>
    !toggle &&
    css`
      display: none;
    `}

  z-index: 20;
`;

export const DropdownItem = styled.li`
  width: 5rem;

  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 0.5rem;

  padding: 0.5rem;

  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[500]};

  z-index: 10;
`;

export const RoleWrapper = styled.p`
  margin-bottom: 0.75rem;

  font-size: 1rem;
  line-height: 2rem;
`;

export const RoleSpan = styled.span`
  position: relative;

  margin-right: 1rem;

  padding: 0.25rem 0.375rem;
  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
  border-radius: 1rem;

  font-weight: 600;

  &:first-child {
    margin-left: 0.5rem;
  }

  &:not(:last-child)::after {
    position: absolute;
    width: 1.75rem;
    text-align: center;
    content: '-';
  }
`;

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 1rem;
`;

export const Reporter = styled.p`
  font-weight: 600;

  margin-right: 2rem;
`;

export const ReportType = styled.p`
  font-weight: 600;

  margin-right: 2rem;
`;
