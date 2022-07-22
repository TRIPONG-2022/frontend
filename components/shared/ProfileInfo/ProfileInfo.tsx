import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from 'react';
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';

import * as Styled from './ProfileInfo.styled';
import { ProfileForm } from '../Profile/Profile';
import SVGIcon from '../SVGIcon';

interface ProfileInfoInputProps {
  id: string;
  label: string;
  value: string;
  readOnly?: boolean;
}

const ProfileInfoInput = ({
  id,
  label,
  value,
  readOnly,
}: ProfileInfoInputProps) => {
  return (
    <>
      <Styled.InfoLabel htmlFor={label}>{label}</Styled.InfoLabel>
      <Styled.InfoContentInput name={id} value={value} readOnly={readOnly} />
    </>
  );
};

interface ProfileInfoProps {
  name: string;
  loginId: string;
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
  loginId,
  email,
  introduction,
  isModified,
  register,
  control,
}: ProfileInfoProps) => {
  const { onChange, maxLength, ...rest } = register('introduction');
  const [introduce, setIntroduce] = useState(introduction);
  const [textAreaHeight, setTextAreaHeight] = useState(0);
  const [char, setChar] = useState('');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'characteristic',
  });
  const bool = fields.length >= 10;

  const onIntroduction = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
    setTextAreaHeight(e.target.scrollHeight);
    console.log(e.target.scrollHeight);
  }, []);

  const onChangeTag = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChar(e.target.value);
  }, []);

  const addCharacter = useCallback(() => {
    if (char && isModified) {
      const duplicate = fields.filter((field) => {
        if (field.character === char) return field;
      });

      if (fields.length >= 10) {
        alert('태그는 10개까지 등록할 수 있습니다.');
        return;
      }

      if (duplicate.length === 0) {
        append({ character: char.trim() });
        setChar('');
      }
    }
  }, [fields, append, isModified, char]);

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
      if (isModified) remove(idx);
    },
    [remove, isModified],
  );

  return (
    <Styled.Container isModified={isModified}>
      <ProfileInfoInput label="아이디" id="loginId" value={loginId} readOnly />
      <ProfileInfoInput label="이름" id="name" value={name} readOnly />
      <ProfileInfoInput label="이메일" id="email" value={email} readOnly />
      <Styled.InfoLabel>
        소개글{' '}
        {isModified && (
          <Styled.MiniText>{`( ${introduce.length} / 500 )`}</Styled.MiniText>
        )}
      </Styled.InfoLabel>
      <Styled.InformationTextarea
        value={introduce}
        textAreaHeight={textAreaHeight}
        maxLength={500}
        onChange={(e) => {
          onChange(e);
          onIntroduction(e);
        }}
        {...rest}
        readOnly={!isModified}
      />

      <Styled.InfoLabel>
        성향{' '}
        {isModified && (
          <Styled.MiniText>{`( ${fields.length} / 10 )`}</Styled.MiniText>
        )}
      </Styled.InfoLabel>
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
            <Styled.CharacteristicInput
              onKeyDown={addCharacterEnter}
              disabled={bool}
              placeholder={
                bool ? '성향은 10개까지 등록이 가능합니다.' : undefined
              }
              value={char}
              maxLength={10}
              onChange={onChangeTag}
            />
            <Styled.CharacteristicButton onClick={addCharacter}>
              <SVGIcon icon="PlusIcon" />
            </Styled.CharacteristicButton>
          </Styled.CharacteristicInputDiv>
        )}
      </Styled.CharacteristicDiv>
    </Styled.Container>
  );
};

export default ProfileInfo;
