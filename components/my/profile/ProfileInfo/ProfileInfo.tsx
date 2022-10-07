import React, { ChangeEvent, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { ProfilePatchSchema } from '@/constants/schema';
import Select from '@/components/shared/Select';
import ProfileTags from '@/components/my/profile/ProfileInfoTags';
import ProfileInfoBirthDateSelect from '@/components/my/profile/ProfileInfoBirthDateSelect/ProfileInfoBirthDateSelect';
import ProfileInfoRegionSelect from '@/components/my/profile/ProfileInfoRegionSelect/ProfileInfoRegionSelect';

import * as Styled from './ProfileInfo.styled';

interface ProfileInfoProps {
  isEdit: boolean;
}

const ProfileInfo = ({ isEdit }: ProfileInfoProps) => {
  const { watch, register, setValue, formState } =
    useFormContext<ProfilePatchSchema>();
  const { errors } = formState;

  const { onChange, ...rest } = register('introduction');

  const intro = watch('introduction');
  const selectedGender = watch('gender');

  const genderOptions = React.useMemo(
    () => [
      { value: 'male', label: '남' },
      { value: 'female', label: '여' },
    ],
    [],
  );

  const onChangeOption = (id: 'gender') => (value: string) => {
    setValue(id, value);
  };

  const onResizeTextArea = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    [],
  );

  const onChangeTextAreaRef = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e);
      onResizeTextArea(e);
    },
    [onChange, onResizeTextArea],
  );

  return (
    <Styled.Container isEdit={isEdit}>
      <Styled.InfoWrapper>
        <ModifyInfo
          id="email"
          label="이메일"
          type="text"
          readOnly
          {...register('email')}
        />
        <ModifyInfo
          id="name"
          label="이름"
          type="text"
          readOnly
          {...register('username')}
        />
        <ModifyInfo
          id="phoneNumber"
          label="휴대폰 번호"
          type="text"
          isEdit={isEdit}
          readOnly
          errorMessage={errors['phoneNumber']?.message}
          {...register('phoneNumber')}
        />
        <Select
          id="gender"
          type="profile"
          isEdit={isEdit}
          label="성별"
          defaultLabel={'성별을 선택하세요'}
          options={genderOptions}
          selectedValue={selectedGender}
          onChangeOption={onChangeOption('gender')}
        />

        <ProfileInfoBirthDateSelect isEdit={isEdit} />
        <ProfileInfoRegionSelect isEdit={isEdit} />

        <Styled.InfoLabel htmlFor="introduction">
          소개글{' '}
          {isEdit && (
            <Styled.MiniText>{` ( ${intro?.length} / 500 )`}</Styled.MiniText>
          )}
        </Styled.InfoLabel>
        <Styled.InformationTextarea
          id="introduction"
          maxLength={500}
          readOnly={!isEdit}
          onChange={onChangeTextAreaRef}
          {...rest}
        />

        <ProfileTags isEdit={isEdit} />
      </Styled.InfoWrapper>
    </Styled.Container>
  );
};

interface ModifyInfo extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  isEdit?: boolean;
  errorMessage?: string;
}

const ModifyInfo = React.forwardRef<HTMLInputElement, ModifyInfo>(
  ({ id, label, isEdit, readOnly, errorMessage, ...inputProps }, ref) => {
    return (
      <>
        <Styled.InfoLabel htmlFor={id}>{label}</Styled.InfoLabel>
        <Styled.InfoContentInput
          id={id}
          ref={ref}
          name={id}
          readOnly={readOnly && !isEdit}
          {...inputProps}
        />
        {errorMessage && (
          <Styled.InfoContentErrorMessage>
            {errorMessage}
          </Styled.InfoContentErrorMessage>
        )}
      </>
    );
  },
);

ModifyInfo.displayName = 'ModifyInfo';

export default ProfileInfo;
