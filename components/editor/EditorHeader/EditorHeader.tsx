import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Select from '@/components/shared/Select';
import { PostEditorSchema } from '@/constants/schema';
import { POST_CATEGORY_OPTIONS } from '@/constants/post-category';
import { PostCategory } from '@/types/post';
import * as Styled from './EditorHeader.styled';

export default function EditorHeader() {
  const { control, setValue } = useFormContext<PostEditorSchema>();
  const selectedCategory = useWatch({ control, name: 'category' });
  const onChangeCategory = (category: PostCategory) =>
    setValue('category', category);

  return (
    <Styled.Container>
      <Styled.SelectContainer>
        <Select
          id="post-editor-category"
          defaultLabel="카테고리"
          options={POST_CATEGORY_OPTIONS}
          selectedValue={selectedCategory}
          onChangeOption={onChangeCategory}
        />
      </Styled.SelectContainer>
    </Styled.Container>
  );
}
