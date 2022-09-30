import { useRouter } from 'next/router';
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';

import {
  getProfileInfomation,
  MyPageBirthDateType,
  patchProfileInformation,
  UserDataType,
  UserSendDataType,
} from '@/api/myPage';
import { getBirthDate } from '@/utils/date';
import { useCityQuery } from '@/hooks/useCityQuery';
import { useDistrictQuery } from '@/hooks/useDistrictQuery';
import { ProfilePatchSchema } from '@/constants/schema';
import ProfileImage from '../ProfileImage';
import ProfileInfo from '../ProfileInfo';
import Button from '@/components/shared/Button';

import theme from '@/styles/theme';
import * as Styled from './Profile.styled';

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<
    UserDataType & MyPageBirthDateType
  >();
  const [isEdit, setIsEdit] = useState(false);

  const methods = useForm<ProfilePatchSchema>({
    defaultValues: useMemo(() => {
      return userData;
    }, [userData]),
  });

  const selectedCity = useWatch({ control: methods.control, name: 'city' });
  const selectedDistrict = useWatch({
    control: methods.control,
    name: 'district',
  });

  const { data: cityData } = useCityQuery();
  const { data: districtData } = useDistrictQuery(selectedCity);

  const {
    reset,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = methods;

  useEffect(() => {
    (async function setUser() {
      const userProfile = await getProfileInfomation();
      if (userProfile) {
        setUserData(userProfile);
      }
    })();
  }, []);

  // useEffect(() => {
  //   console.log(isDirty, errors, isValid);
  // }, [isDirty, errors, isValid]);

  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  const changeEditMode = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setIsEdit(!isEdit);
    },
    [setIsEdit, isEdit],
  );

  const cancelEdit = useCallback(() => {
    reset(userData);
    setIsEdit(!isEdit);
  }, [isEdit, reset, userData]);

  const onSubmit: SubmitHandler<ProfilePatchSchema> = async (data) => {
    const { year, month, day, tags, picture, latitude, longitude } = data;
    const convertedTags: string[] = tags!.map((tag) => tag.tag);

    let birthDate: string | null = null;
    if (year && month && day) {
      birthDate = getBirthDate(year, month, day);
    }

    let pic = null;
    if (picture) {
      pic = picture[0] as unknown;
    }

    console.log(picture);

    const sendData: UserSendDataType = {
      birthDate,
      picture: pic as File,
      latitude: !!latitude ? latitude + '' : '',
      longitude: !!longitude ? longitude + '' : '',
      city: data.city,
      district: data.district,
      nickName: data.nickName,
      gender: data.gender,
      introduction: data.introduction,
      phoneNumber: data.phoneNumber,
    };

    console.log('sendData', sendData);

    await patchProfileInformation(sendData, convertedTags);
    setIsEdit(!isEdit);
  };

  const moveToVerifyEmail = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      router.push('/auth/verify-email');
    },
    [router],
  );

  return (
    <Styled.Container>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.ProfileWrapper>
            <Styled.ProfileImageWrapper>
              <ProfileImage
                picture={userData?.picture}
                authentication={userData?.authentication}
                isEdit={isEdit}
              />
            </Styled.ProfileImageWrapper>

            <ProfileInfo isEdit={isEdit} />
          </Styled.ProfileWrapper>

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
    </Styled.Container>
  );
};

export default Profile;
