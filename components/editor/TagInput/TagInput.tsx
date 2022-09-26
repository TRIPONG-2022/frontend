import React, { useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import InputContainer from '../InputContainer';
import { PostEditorSchema } from '@/constants/schema';
import * as Styled from './TagInput.styled';

export default function TagInput() {
  const { control, setValue } = useFormContext<PostEditorSchema>();
  const tags = useWatch({ name: 'tags', control });
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeTags = (tags: string[]) => {
    setValue('tags', tags);
  };

  const onInsert = (tag: string) => {
    if (tag === '' || tags.includes(tag)) {
      return;
    }
    let processed = tag.trim();
    if (processed.charAt(0) === '#') {
      processed = processed.slice(1, processed.length);
    }
    onChangeTags([...tags, processed]);
  };

  const onRemove = (tag: string) => {
    onChangeTags(tags.filter((value) => value !== tag));
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      return;
    }
    if (inputRef.current) {
      const currentValue = inputRef.current.value;
      if (event.key === 'Backspace' && currentValue === '') {
        event.preventDefault();
        onChangeTags(tags.slice(0, -1));
      }
    }
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const currentValue = inputRef.current.value;
      if (event.key === 'Enter' && currentValue) {
        onInsert(currentValue);
        inputRef.current.value = '';
      }
    }
  };

  return (
    <InputContainer>
      <Styled.TagList>
        {0 < tags.length &&
          tags?.map((tag) => (
            <Styled.TagItem key={`editor-${tag}`} onClick={() => onRemove(tag)}>
              #{tag}
            </Styled.TagItem>
          ))}
        <Styled.Input
          id="tag"
          type="text"
          placeholder="태그를 입력하세요.(최대 10개)"
          disabled={10 <= tags.length}
          hidden={10 <= tags.length}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          ref={inputRef}
        />
      </Styled.TagList>
    </InputContainer>
  );
}
