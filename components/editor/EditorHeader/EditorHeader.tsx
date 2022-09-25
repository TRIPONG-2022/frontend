import React from 'react';
import { useFormContext } from 'react-hook-form';
import { PostEditorSchema } from '@/constants/schema';
import { POST_CATEGORIES } from '@/constants/post-category';
import * as Styled from './EditorHeader.styled';

export default function EditorHeader() {
  const { register } = useFormContext<PostEditorSchema>();

  return (
    <Styled.Container>
      <div>
        <select {...register('category')}>
          <option value="">카테고리</option>
          {Object.entries(POST_CATEGORIES).map(([category, label]) => (
            <option value={category} key={`category-option-${category}`}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </Styled.Container>
  );
}
