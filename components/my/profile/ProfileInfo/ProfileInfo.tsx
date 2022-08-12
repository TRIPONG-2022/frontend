import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import {
  Control,
  useFieldArray,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

import * as Styled from './ProfileInfo.styled';

import { ProfilePatchSchema } from '@/constants/schema';
import SVGIcon from '@/components/shared/SVGIcon';

interface ProfileInfoProps {
  isEdit: boolean;
  register: UseFormRegister<ProfilePatchSchema>;
  control: Control<ProfilePatchSchema>;
  watch: UseFormWatch<ProfilePatchSchema>;
}

const ProfileInfo = ({
  isEdit,
  watch,
  register,
  control,
}: ProfileInfoProps) => {
  const [textAreaHeight, setTextAreaHeight] = useState(0);

  const { onChange, ...rest } = register('introduction');
  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control,
  });

  const tagRef = useRef<HTMLInputElement>(null);
  const intro = watch('introduction') || '';
  const bool = fields.length >= 10;

  const onResizeTextArea = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaHeight(e.target.scrollHeight);
    },
    [],
  );

  const addCharacter = useCallback(() => {
    const tag = tagRef.current!.value;
    console.log(tag);
    if (tag && isEdit) {
      const duplicate = fields.filter((field) => {
        if (field.tag === tag) return field;
      });

      if (fields.length >= 10) {
        alert('태그는 10개까지 등록할 수 있습니다.');
        return;
      }

      if (duplicate.length === 0) {
        append({ tag: tag.trim() });
        tagRef.current!.value = '';
      }
    }
  }, [fields, append, isEdit]);

  const addCharacterEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addCharacter();
      }
    },
    [addCharacter],
  );

  const removeCharacter = useCallback(
    (idx: number) => {
      if (isEdit) remove(idx);
    },
    [remove, isEdit],
  );

  return (
    <Styled.Container isEdit={isEdit}>
      <Styled.InfoWrapper>
        <ModifyInfo
          id="email"
          label="이메일"
          type="text"
          {...register('email')}
          readOnly
        />
        <ModifyInfo
          id="name"
          label="이름"
          type="text"
          {...register('name')}
          readOnly
        />
        <ModifyInfo
          id="phoneNumber"
          label="휴대폰 번호"
          type="text"
          {...register('phoneNumber')}
          readOnly
        />
        <ModifyInfo
          id="birthDate"
          label="생일"
          type="text"
          {...register('birthDate')}
          readOnly
        />
        <ModifyInfo
          id="city"
          label="도시"
          type="text"
          {...register('city')}
          readOnly={!isEdit}
        />
        <ModifyInfo
          id="district"
          label="지역"
          type="text"
          {...register('district')}
          readOnly={!isEdit}
        />

        <Styled.InfoLabel htmlFor="introduction">
          소개글{' '}
          {isEdit && (
            <Styled.MiniText>{` ( ${intro?.length} / 500 )`}</Styled.MiniText>
          )}
        </Styled.InfoLabel>
        <Styled.InformationTextarea
          id="introduction"
          textAreaHeight={textAreaHeight}
          maxLength={500}
          readOnly={!isEdit}
          onChange={(e) => {
            onChange(e);
            onResizeTextArea(e);
          }}
          {...rest}
        />
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
                onClick={() => removeCharacter(idx)}
                key={field.id}
                {...register(`tags.${idx}.tag`)}
              >
                {`#${field.tag}`}
              </Styled.Tag>
            ))}
          </Styled.TagDiv>
          {isEdit && (
            <Styled.TagsInputDiv>
              <Styled.TagsInput
                onKeyDown={addCharacterEnter}
                disabled={bool}
                placeholder={
                  bool ? '성향은 10개까지 등록이 가능합니다.' : undefined
                }
                maxLength={10}
                ref={tagRef}
              />
              <Styled.TagsButton onClick={addCharacter}>
                <SVGIcon icon="PlusIcon" />
              </Styled.TagsButton>
            </Styled.TagsInputDiv>
          )}
        </Styled.TagsDiv>
      </Styled.InfoWrapper>
    </Styled.Container>
  );
};

interface ModifyInfo extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const ModifyInfo = React.forwardRef<HTMLInputElement, ModifyInfo>(
  ({ id, label, ...inputProps }, ref) => {
    return (
      <>
        <Styled.InfoLabel htmlFor={id}>{label}</Styled.InfoLabel>
        <Styled.InfoContentInput id={id} ref={ref} name={id} {...inputProps} />
      </>
    );
  },
);

ModifyInfo.displayName = 'ModifyInfo';

export default ProfileInfo;
