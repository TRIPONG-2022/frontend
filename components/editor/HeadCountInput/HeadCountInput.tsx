import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import InputContainer from '../InputContainer';
import SVGIcon from '@/components/shared/SVGIcon';
import { PostEditorSchema } from '@/constants/schema';
import * as Styled from './HeadCountInput.styled';

export default function HeadCountInput() {
  const { control, setValue } = useFormContext<PostEditorSchema>();
  const headCount = useWatch({
    name: 'totalHeadCount',
    control,
  });

  const subCount = () => {
    if (0 < headCount) {
      setValue('totalHeadCount', headCount - 1);
    }
  };

  const addCount = () => {
    setValue('totalHeadCount', headCount + 1);
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
