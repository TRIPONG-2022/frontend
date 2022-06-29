import React from 'react';
import * as Styled from './JoinNotiBar.styled';

interface JoinNotiBarProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement> {
  errorMessages?: string;
}

const JoinNotiBar = React.forwardRef<HTMLParagraphElement, JoinNotiBarProps>(
  ({ errorMessages }, ref) => {
    return (
      <Styled.Container>
        {errorMessages && (
          <Styled.ErrorMessage>{errorMessages}</Styled.ErrorMessage>
        )}
      </Styled.Container>
    );
  },
);

JoinNotiBar.displayName = 'JoinNotiBar';

export default JoinNotiBar;
