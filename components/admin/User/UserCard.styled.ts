import styled, { css } from 'styled-components';

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

  z-index: 10;
  cursor: pointer;
`;

interface ActiveProps {
  activeMenu: boolean;
}

// export const Back = styled.div<ActiveProps>`
//   ${({ activeMenu }) =>
//     activeMenu &&
//     css`
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       left: 0;
//       right: 0;

//       background-color: green;

//       z-index: 5;
//     `}
// `;

export const MenuUl = styled.ul<ActiveProps>`
  position: absolute;
  top: 1rem;
  right: 0;

  ${({ activeMenu }) =>
    !activeMenu &&
    css`
      display: none;
    `}

  z-index: 20;
`;

export const MenuLi = styled.li`
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
