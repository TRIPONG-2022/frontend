import React, { ChangeEvent, useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { ProfilePatchSchema } from '@/constants/schema';
import ProfileTags from '@/components/my/profile/ProfileInfoTags';
import * as Styled from './ProfileInfo.styled';

interface ProfileInfoProps {
  isEdit: boolean;
}

const ProfileInfo = ({ isEdit }: ProfileInfoProps) => {
  const [textAreaHeight, setTextAreaHeight] = useState(0);

  const { watch, register } = useFormContext<ProfilePatchSchema>();
  const { onChange, ...rest } = register('introduction');

  const intro = watch('introduction') || '';

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

        <ProfileTags isEdit={isEdit} />
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
