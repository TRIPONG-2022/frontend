import React, { ChangeEvent, useCallback, useState } from 'react';
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';

import * as Styled from './ProfileInfo.styled';
import { ProfileForm } from '../Profile/Profile';
import SVGIcon from '../SVGIcon';

interface ProfileInfoProps {
  name: string;
  userId: string;
  email: string;
  introduction: string;
  characteristic: {
    character: string;
  }[];
  isModified: boolean;
  register: UseFormRegister<ProfileForm>;
  control: Control<ProfileForm>;
}

const ProfileInfo = ({
  name,
  userId,
  email,
  introduction,
  isModified,
  register,
  control,
}: ProfileInfoProps) => {
  const { onChange, ...rest } = register('introduction');
  const [introduce, setIntroduce] = useState(introduction);
  const [char, setChar] = useState('');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'characteristic',
  });

  const onIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
  };

  const onChangeTag = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChar(e.target.value);
  }, []);

  const addCharacter = useCallback(() => {
    if (char && isModified) {
      const duplicate = fields.filter((field) => {
        if (field.character === char) return field;
      });

      if (duplicate.length === 0) {
        append({ character: char });
        setChar('');
      }
    }
  }, [fields, append, isModified, char]);

  const removeCharacter = useCallback(
    (idx: number) => {
      if (isModified) {
        remove(idx);
      }
    },
    [remove, isModified],
  );

  return (
    <Styled.Container isModified={isModified}>
      <Styled.InfoP>아이디</Styled.InfoP>
      <Styled.InfoContentInput value={userId} readOnly />
      <Styled.InfoP>이름</Styled.InfoP>
      <Styled.InfoContentInput value={name} readOnly />
      <Styled.InfoP>이메일</Styled.InfoP>
      <Styled.InfoContentInput value={email} readOnly />
      <Styled.InfoP>소개글</Styled.InfoP>
      <Styled.InformationTextarea
        value={introduce}
        onChange={(e) => {
          onChange(e);
          onIntroduction(e);
        }}
        {...rest}
        readOnly={!isModified}
      />

      <Styled.InfoP>성향</Styled.InfoP>
      <Styled.CharacteristicDiv>
        <Styled.CharacteristicTagDiv>
          {fields.map((field, idx) => (
            <Styled.CharacteristicTag
              key={field.id}
              {...register(`characteristic.${idx}.character`)}
              onClick={() => removeCharacter(idx)}
            >
              {'#' + field.character}
            </Styled.CharacteristicTag>
          ))}
        </Styled.CharacteristicTagDiv>
        {isModified && (
          <Styled.CharacteristicInputDiv>
            <Styled.CharacteristicInput value={char} onChange={onChangeTag} />
            <Styled.CharacteristicButton type="button" onClick={addCharacter}>
              <SVGIcon icon="Plus" />
            </Styled.CharacteristicButton>
          </Styled.CharacteristicInputDiv>
        )}
      </Styled.CharacteristicDiv>
    </Styled.Container>
  );
};

export default ProfileInfo;
