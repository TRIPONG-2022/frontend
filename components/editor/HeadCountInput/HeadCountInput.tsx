import React from 'react';
import SVGIcon from '@/components/shared/SVGIcon';
import InputContainer from '../InputContainer';
import * as Styled from './HeadCountInput.styled';

interface HeadCountInputProps {
  headCount: number;
  onChange: (value: number) => void;
}

export default function HeadCountInput({
  headCount,
  onChange,
}: HeadCountInputProps) {
  const subCount = () => {
    if (0 < headCount) {
      onChange(headCount - 1);
    }
  };

  const addCount = () => {
    onChange(headCount + 1);
  };

  return (
    <InputContainer>
      <label htmlFor="headCountInput">모집인원</label>
      <Styled.CountContainer>
        <Styled.CountButton onClick={subCount}>
          <SVGIcon icon="MinusIcon" />
        </Styled.CountButton>
        <Styled.CountInput>{headCount}</Styled.CountInput>
        <Styled.CountButton onClick={addCount}>
          <SVGIcon icon="PlusIcon" />
        </Styled.CountButton>
      </Styled.CountContainer>
    </InputContainer>
  );
}
