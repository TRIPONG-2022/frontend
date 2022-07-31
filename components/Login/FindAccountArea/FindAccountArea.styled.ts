import styled from 'styled-components';

export const FindAccountConatiner = styled.div`
  display: flex;
  justify-content: end;
  em + em {
    &::after {
      display: block;
      position: absolute;
      top: 3px;
      left: 5px;
      width: 1px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.gray[300]};
      content: '';
    }
  }
`;

export const FindAccountText = styled.a`
  display: inline-block;
  position: relative;
  padding-left: 10px;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: right;
  cursor: pointer;
`;
