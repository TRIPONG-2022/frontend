import styled from 'styled-components';

export const Divider = () => {
  return (
    <DividerContainer>
      <DividerText>또는</DividerText>
    </DividerContainer>
  );
};

const DividerContainer = styled.div`
  position: relative;
  margin: 2.5rem 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const DividerText = styled.div`
  font-size: red;
  &::before {
    background: ${({ theme }) => theme.colors.gray[400]};
    height: 1px;
    position: absolute;
    right: 0;
    width: 40%;
    top: 50%;
    content: '';
  }
  &::after {
    background: ${({ theme }) => theme.colors.gray[400]};
    height: 1px;
    position: absolute;
    left: 0;
    width: 40%;
    top: 50%;
    content: '';
  }
`;
