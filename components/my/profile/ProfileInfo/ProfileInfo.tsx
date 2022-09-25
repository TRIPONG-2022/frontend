import React, { ChangeEvent, useCallback, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import ProfileTags from '@/components/my/profile/ProfileInfoTags';
import Select from '@/components/shared/Select';
import ProfileInfoBirthDateSelect from '@/components/my/profile/ProfileInfoBirthDateSelect/ProfileInfoBirthDateSelect';
import { ProfilePatchSchema } from '@/constants/schema';
import * as Styled from './ProfileInfo.styled';
import ProfileInfoRegionSelect from '@/components/my/profile/ProfileInfoRegionSelect/ProfileInfoRegionSelect';

interface ProfileInfoProps {
  isEdit: boolean;
}

const ProfileInfo = ({ isEdit }: ProfileInfoProps) => {
  const [textAreaHeight, setTextAreaHeight] = useState(0);

  const { watch, register, control, setValue } =
    useFormContext<ProfilePatchSchema>();
  const { onChange, ...rest } = register('introduction');

  const intro = watch('introduction') || '';

  const onChangeOption = (id: 'gender') => (value: string) => {
    setValue(id, value);
  };
  const selectedGender = useWatch({ control, name: 'gender' });
  const genderOptions = React.useMemo(
    () => [
      { value: 'male', label: '남' },
      { value: 'female', label: '여' },
    ],
    [],
  );

  const onResizeTextArea = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaHeight(e.target.scrollHeight);
    },
    [],
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
          isEdit={isEdit}
          {...register('name')}
        />
        <ModifyInfo
          id="phoneNumber"
          label="휴대폰 번호"
          type="text"
          isEdit={isEdit}
          {...register('phoneNumber')}
        />
        <Select
          id="gender"
          type="profile"
          isEdit={isEdit}
          label="성별"
          defaultLabel="성별을 선택하세요."
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
          textAreaHeight={textAreaHeight}
          maxLength={500}
          readOnly={!isEdit}
          onChange={(e) => {
            onChange(e);
            onResizeTextArea(e);
          }}
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
}

const ModifyInfo = React.forwardRef<HTMLInputElement, ModifyInfo>(
  ({ id, label, isEdit, ...inputProps }, ref) => {
    return (
      <>
        <Styled.InfoLabel htmlFor={id}>{label}</Styled.InfoLabel>
        <Styled.InfoContentInput
          id={id}
          ref={ref}
          name={id}
          {...inputProps}
          readOnly={!isEdit}
        />
      </>
    );
  },
);

ModifyInfo.displayName = 'ModifyInfo';

export default ProfileInfo;
