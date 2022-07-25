import React, { MouseEvent, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { userDataType } from 'pages/my/profile';

import * as Styled from './Profile.styled';
import ProfileImage from '../ProfileImage';
import ProfileInfo from '../ProfileInfo';
import Button from '../Button';
import theme from '@/styles/theme';
import { getProfileInfomation } from 'api/myPage';

type ProfileProps = {
  userData: userDataType;
};

export interface ProfileForm {
  nickName: string;
  picture: File;
  introduction: string;
  loginId: string;
  name: string;
  email: string;
  characteristic: {
    character: string;
  }[];
}

const Profile = ({ userData }: ProfileProps) => {
  const [isModified, setIsModified] = useState<boolean>(false);
  const {
    nickName,
    authentication,
    picture,
    introduction,
    characteristic,
    ...rest
  } = userData;

  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<ProfileForm>({
    defaultValues: { nickName, introduction, characteristic },
  });

  const changeModified = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setIsModified(!isModified);
    },
    [setIsModified, isModified],
  );

  const onSubmit: SubmitHandler<ProfileForm> = useCallback(
    (data) => {
      console.log(data);
      const sendData = {
        ...data,
        characteristic: data.characteristic.map((char) => char.character),
      };
      console.log(sendData);
      setIsModified(!isModified);
    },
    [isModified],
  );

  const test = () => {
    const res = getProfileInfomation(5);
  };

  return (
    <Styled.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.ProfileWrapper>
          <Styled.ProfileImageWrapper>
            <ProfileImage
              register={register}
              isModified={isModified}
              nickName={nickName}
              authentication={authentication}
              picture={picture}
              flexDirection="column"
              width={15}
              fontSize={1.75}
            />
          </Styled.ProfileImageWrapper>
          <ProfileInfo
            register={register}
            control={control}
            isModified={isModified}
            introduction={introduction}
            characteristic={characteristic}
            {...rest}
          />
        </Styled.ProfileWrapper>

        <Styled.ButtonWrapper>
          {isModified && (
            <Button size="lg" type="submit">
              수정완료
            </Button>
          )}
          {!isModified && (
            <>
              <Button onClick={changeModified} size={'lg'}>
                수정하기
              </Button>
              <Button
                css={{ background: `${theme.colors.gray[500]}` }}
                onClick={changeModified}
                size="lg"
                disabled={authentication}
              >
                {authentication ? '인증완료' : '인증하기'}
              </Button>
            </>
          )}
        </Styled.ButtonWrapper>
      </form>
      <button onClick={test}>test</button>
    </Styled.Container>
  );
};

export default Profile;
