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

import ProfileImage from '../ProfileImage';
import ProfileInfo from '../ProfileInfo';
import { useCityQuery } from '@/hooks/useCityQuery';
import { useDistrictQuery } from '@/hooks/useDistrictQuery';
import { ProfilePatchSchema } from '@/constants/schema';
import Button from '@/components/shared/Button';
import {
  getProfileInfomation,
  patchProfileInformation,
  UserDataType,
} from '@/api/myPage';

import theme from '@/styles/theme';
import * as Styled from './Profile.styled';

const initialUserData = {
  loginId: '',
  email: '',
  gender: '',
  name: '',
  nickName: '',
  joinMethod: '',
  authentication: 0,
  birthDate: '',
  city: '',
  district: '',
  introduction: '',
  latitude: 0,
  longitude: 0,
  phoneNumber: '',
  picture: '',
  tags: [{ tag: null }],
};

const Profile = () => {
  const [userData, setUserData] = useState<UserDataType>(initialUserData);
  const { picture, authentication } = userData;
  const [isEdit, setIsEdit] = useState(false);

  const methods = useForm<ProfilePatchSchema>({
    defaultValues: useMemo(() => {
      return userData;
    }, [userData]),
  });

  const selectedCity = useWatch({ control: methods.control, name: 'city' });

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
    console.log(data);
    const { year, month, day } = data;
    if (!cityData || !districtData || !year || !month || !day) return;
    const city = cityData.regionMapData.get(data.city);
    const district = districtData.regionMapData.get(data.district);
    const birthDate = `${year}-${month}-${day}`;
    const tags = data.tags!.map((tag) => tag.tag);

    const formData = new FormData();
    if (data.picture) {
      formData.append('picture', data.picture[0]);
    }
    const sendData = {
      ...data,
      tags,
      birthDate,
      city,
      district,
      picture: formData,
    };
    console.log(sendData);
    await patchProfileInformation(sendData);
    setIsEdit(!isEdit);
  };

  return (
    <Styled.Container>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.ProfileWrapper>
            <Styled.ProfileImageWrapper>
              <ProfileImage
                picture={picture}
                authentication={authentication}
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
                  disabled={!!authentication}
                >
                  {authentication ? '인증완료' : '인증하기'}
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
