import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import * as Styled from './ProfileImage.styled';
import { ProfileForm } from '../Profile/Profile';
import SVGIcon from '../SVGIcon';

interface ProfileImageProps {
  isModified?: boolean;
  isAuthenticated?: boolean;
  nickName: string;
  flexDirection: 'column' | 'row';
  width: number;
  fontSize?: number;
  profileImage: string;
  register?: UseFormRegister<ProfileForm>;
}

const ProfileImage = ({
  isModified,
  nickName,
  isAuthenticated,
  flexDirection,
  width,
  fontSize = 1.75,
  profileImage,
  register,
}: ProfileImageProps) => {
  const [nick, setNick] = useState(nickName);
  const [profileImageSrc, setProfileImageSrc] = useState(profileImage);
  const imgRef = useRef<HTMLInputElement | null>(null);

  if (register) {
    var { ref, onChange, ...rest } = register('profileImage');
  }

  const onChangeNickName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  }, []);

  const onOpenFileWindow = useCallback(() => {
    if (isModified) {
      imgRef.current?.click();
    }
  }, [isModified]);

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e);
        if (e.target && typeof e.target.result === 'string') {
          setProfileImageSrc(e.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Styled.Container flexDirection={flexDirection}>
      <Styled.ProfileImageDiv width={width}>
        <Styled.ProfileImage src={profileImageSrc} onClick={onOpenFileWindow} />
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={(e) => {
            onImageChange(e);
            onChange(e);
          }}
          {...rest}
          ref={(e) => {
            ref(e);
            imgRef.current = e;
          }}
        />
      </Styled.ProfileImageDiv>
      <Styled.NicknameDiv>
        {isModified && register !== undefined && (
          <Styled.NicknameInput
            value={nick}
            minLength={3}
            maxLength={15}
            placeholder="닉네임"
            {...register('nickName')}
            onChange={(e) => {
              onChangeNickName(e);
              onChange(e);
            }}
          />
        )}
        {!isModified && (
          <Styled.Nickname fontSize={fontSize}>{nick}</Styled.Nickname>
        )}
        {!isModified && isAuthenticated && <SVGIcon icon="Authenticated" />}
      </Styled.NicknameDiv>
    </Styled.Container>
  );
};

export default ProfileImage;
