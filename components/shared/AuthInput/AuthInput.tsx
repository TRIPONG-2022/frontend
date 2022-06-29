import React from 'react';
import * as Styled from './AuthInput.styled';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, errorMessage, id, ...inputProps }, ref) => {
    return (
      <Styled.Container>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        <Styled.Input
          {...inputProps}
          id={id}
          ref={ref}
          $invalid={!!errorMessage}
        />
        {errorMessage && (
          <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
        )}
      </Styled.Container>
    );
  },
);

AuthInput.displayName = 'AuthInput';

export default AuthInput;
