import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import theme from '@/styles/theme';
import ProfileInfo from '../ProfileInfo';
import ProfileImage from '../ProfileImage';
import Button from '@/components/shared/Button';
import { MyPageBirthDate, UserProfileData } from '@/types/my-page';
import { ProfilePatchSchema, PROFILE_PATCH_SCHEMA } from '@/constants/schema';
import { getProfileInfomation, patchProfileInformation } from '@/api/myPage';

import * as Styled from './Profile.styled';

const Profile = () => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState<UserProfileData & MyPageBirthDate>();

  const { isFetching } = useQuery('userProfile', getProfileInfomation, {
    refetchOnWindowFocus: false,
    onSuccess: (userData) => {
      setUserData(userData);
    },
  });

  const methods = useForm<ProfilePatchSchema>({
    mode: 'onChange',
    resolver: yupResolver(PROFILE_PATCH_SCHEMA),
  });

  const {
    reset,
    handleSubmit,
    formState: { isDirty, isValid },
  } = methods;

  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  const changeEditMode = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setIsEdit(!isEdit);
    },
    [isEdit],
  );

  const cancelEdit = useCallback(() => {
    reset(userData);
    setIsEdit(!isEdit);
  }, [isEdit, reset, userData]);

  const onSubmit: SubmitHandler<ProfilePatchSchema> = async (data) => {
    await patchProfileInformation(data);
    setIsEdit(!isEdit);
  };

  const moveToVerifyEmail = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      router.push('/auth/verify-email');
    },
    [router],
  );

  if (isFetching) {
    return <Styled.ProfileContainer>로딩 중.....</Styled.ProfileContainer>;
  }

  return (
    <Styled.ProfileContainer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.ProfileImageWrapper>
            <Styled.ProfileImageArea>
              <ProfileImage
                picture={userData?.picture}
                authentication={userData?.authentication}
                isEdit={isEdit}
              />
            </Styled.ProfileImageArea>

            <ProfileInfo isEdit={isEdit} />
          </Styled.ProfileImageWrapper>

          <Styled.ButtonWrapper>
            {isEdit && (
              <>
                <Button size="lg" type="submit" disabled={!isValid}>
                  수정완료
                </Button>
                <Button
                  css={{ background: `${theme.colors.gray[500]}` }}
                  size="lg"
                  onClick={cancelEdit}
                >
                  취소
                </Button>
              </>
            )}
            {!isEdit && (
              <>
                <Button onClick={changeEditMode} size={'lg'}>
                  수정하기
                </Button>
                <Button
                  css={{ background: `${theme.colors.gray[500]}` }}
                  size="lg"
                  disabled={!!userData?.authentication}
                  onClick={moveToVerifyEmail}
                >
                  {userData?.authentication ? '인증완료' : '인증하기'}
                </Button>
              </>
            )}
          </Styled.ButtonWrapper>
        </form>
      </FormProvider>
    </Styled.ProfileContainer>
  );
};

export default Profile;
