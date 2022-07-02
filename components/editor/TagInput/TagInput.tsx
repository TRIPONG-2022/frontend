import React, { useCallback, useRef } from 'react';
import * as Styled from './TagInput.styled';

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagInput({ tags, onChange }: TagInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onInsert = useCallback(
    (tag: string) => {
      if (tag === '' || tags.includes(tag)) {
        return;
      }
      let processed = tag.trim();
      if (processed.charAt(0) === '#') {
        processed = processed.slice(1, processed.length);
      }
      onChange([...tags, processed]);
    },
    [tags, onChange],
  );

  const onRemove = useCallback(
    (tag: string) => {
      onChange(tags.filter((value) => value !== tag));
    },
    [tags, onChange],
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        return;
      }
      if (inputRef.current) {
        const currentValue = inputRef.current.value;
        if (event.key === 'Backspace' && currentValue === '') {
          event.preventDefault();
          onChange(tags.slice(0, -1));
        }
      }
    },
    [tags, onChange],
  );

  const onKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (inputRef.current) {
        const currentValue = inputRef.current.value;
        if (event.key === 'Enter' && currentValue) {
          onInsert(currentValue);
          inputRef.current.value = '';
        }
      }
    },
    [onInsert],
  );

  return (
    <Styled.Container>
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
    </Styled.Container>
  );
}
