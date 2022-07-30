import React, { MouseEvent, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as Styled from './Profile.styled';
import { UserDataType } from 'pages/my/profile';
import ProfileImage from '../ProfileImage';
import ProfileInfo from '../ProfileInfo';
import Button from '@/components/shared/Button';
import theme from '@/styles/theme';
import { ProfilePatchSchema } from '@/constants/schema';

const Profile = ({ userData }: UserDataType) => {
  const [isEdit, setIsEdit] = useState(false);
  const { picture, authentication } = userData;

  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { isDirty, errors, isValid },
  } = useForm<ProfilePatchSchema>({
    defaultValues: {
      ...userData,
    },
  });

  const changeEditMode = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setIsEdit(!isEdit);
    },
    [setIsEdit, isEdit],
  );

  const onSubmit: SubmitHandler<ProfilePatchSchema> = (data) => {
    console.log(data);
    const sendData = {
      ...data,
      tags: data.tags!.map((tag) => tag.tag),
    };
    console.log(sendData);
    setIsEdit(!isEdit);
  };

  return (
    <Styled.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.ProfileWrapper>
          <Styled.ProfileImageWrapper>
            <ProfileImage
              picture={picture}
              authentication={authentication}
              isEdit={isEdit}
              register={register}
              watch={watch}
            />
          </Styled.ProfileImageWrapper>

          <ProfileInfo
            watch={watch}
            isEdit={isEdit}
            control={control}
            register={register}
          />
        </Styled.ProfileWrapper>

        <Styled.ButtonWrapper>
          {isEdit && (
            <Button size="lg" type="submit">
              수정완료
            </Button>
          )}
          {!isEdit && (
            <>
              <Button onClick={changeEditMode} size={'lg'}>
                수정하기
              </Button>
              <Button
                css={{ background: `${theme.colors.gray[500]}` }}
                size="lg"
                disabled={authentication === 1}
              >
                {authentication ? '인증완료' : '인증하기'}
              </Button>
            </>
          )}
        </Styled.ButtonWrapper>
      </form>
    </Styled.Container>
  );
};

export default Profile;
