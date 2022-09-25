import React, { KeyboardEvent, useCallback, useRef } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { ProfilePatchSchema } from '@/constants/schema';
import SVGIcon from '@/components/shared/SVGIcon';
import * as Styled from './ProfileInfoTags.styled';

interface ProfileInfoTagsProps {
  isEdit: boolean;
}

const ProfileInfoTags = ({ isEdit }: ProfileInfoTagsProps) => {
  const { register, control } = useFormContext<ProfilePatchSchema>();

  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control,
  });

  const tagRef = useRef<HTMLInputElement>(null);
  const bool = fields.length >= 10;

  const addTag = useCallback(() => {
    const tagValue = tagRef.current!.value;
    console.log(tagValue);
    if (tagValue && isEdit) {
      const duplicate = fields.filter((field) => {
        if (field.tag === tagValue) return field;
      });

      if (fields.length >= 10) {
        alert('태그는 10개까지 등록할 수 있습니다.');
        return;
      }

      if (duplicate.length === 0) {
        append({ tag: tagValue.trim() });
        tagRef.current!.value = '';
      }
    }
  }, [fields, append, isEdit]);

  const addTagEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
      }
    },
    [addTag],
  );

  const removeTag = useCallback(
    (idx: number) => {
      if (isEdit) remove(idx);
    },
    [remove, isEdit],
  );

  return (
    <Styled.Container>
      <Styled.InfoLabel>
        성향{' '}
        {isEdit && (
          <Styled.MiniText>{`( ${fields.length} / 10 )`}</Styled.MiniText>
        )}
      </Styled.InfoLabel>
      <Styled.TagsDiv>
        <Styled.TagDiv>
          {fields.map((field, idx) => (
            <Styled.Tag
              onClick={() => removeTag(idx)}
              key={field.id}
              {...register(`tags.${idx}.tag`)}
            >
              {`${field.tag}`}
            </Styled.Tag>
          ))}
        </Styled.TagDiv>
        {isEdit && (
          <Styled.TagsInputDiv>
            <Styled.TagsInput
              onKeyDown={addTagEnter}
              disabled={bool}
              placeholder={
                bool ? '성향은 10개까지 등록이 가능합니다.' : undefined
              }
              maxLength={10}
              ref={tagRef}
            />
            <Styled.TagsButton onClick={addTag}>
              <SVGIcon icon="PlusIcon" />
            </Styled.TagsButton>
          </Styled.TagsInputDiv>
        )}
      </Styled.TagsDiv>
    </Styled.Container>
  );
};

export default ProfileInfoTags;
