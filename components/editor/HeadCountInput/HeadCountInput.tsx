import SVGIcon from '@/components/shared/SVGIcon';
import React, { useState } from 'react';
import * as Styled from './HeadCountInput.styled';
interface HeadCountInputProps {}

export default function HeadCountInput({}: HeadCountInputProps) {
  const [count, setCount] = useState<number>(4);

  const subCount = () => {
    if (0 < count) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Styled.Container>
      <Styled.Label htmlFor="headCountInput">모집인원</Styled.Label>
      <Styled.CountContainer>
        <Styled.CountButton onClick={subCount}>
          <SVGIcon icon="MinusIcon" />
        </Styled.CountButton>
        <Styled.CountInput>{count}</Styled.CountInput>
        <Styled.CountButton onClick={addCount}>
          <SVGIcon icon="PlusIcon" />
        </Styled.CountButton>
      </Styled.CountContainer>
    </Styled.Container>
  );
}
