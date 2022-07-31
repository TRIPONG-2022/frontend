import React, { useCallback, useRef, useState } from 'react';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import * as Styled from './ProfileImage.styled';
import { ProfilePatchSchema } from '@/constants/schema';
import SVGIcon from '@/components/shared/SVGIcon';

interface ProfileImageProps {
  picture: string | null | undefined;
  authentication: number;
  isEdit: boolean;
  register: UseFormRegister<ProfilePatchSchema>;
  watch: UseFormWatch<ProfilePatchSchema>;
  setValue: UseFormSetValue<ProfilePatchSchema>;
}

const ProfileImage = ({
  picture,
  authentication,
  isEdit,
  register,
  watch,
  setValue,
}: ProfileImageProps) => {
  const [image, setImage] = useState(picture ?? undefined);
  const imgRef = useRef<HTMLInputElement | null>(null);
  const watchedNickName = watch('nickName');

  let { ref, onChange, ...rest } = register('picture');

  const onChangeImage = () => {
    if (isEdit) imgRef.current!.click();
  };

  const removeImage = () => {
    setImage('');
    setValue('picture', '');
  };

  const getImage = useCallback(() => {
    if (imgRef.current!.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target!.result as string);
      };
      reader.readAsDataURL(imgRef.current!.files[0]);
    }
  }, []);

  return (
    <Styled.Container>
      <Styled.ProfileImageDiv>
        {isEdit && (
          <SVGIcon icon="DeleteIcon" size="20" onClick={removeImage} />
        )}
        <input
          type="file"
          ref={(e) => {
            ref(e);
            imgRef.current = e;
          }}
          onChange={(e) => {
            onChange(e);
            getImage();
          }}
          {...rest}
          hidden
        />
        <Styled.ProfileBlankDiv onClick={onChangeImage}>
          {image && <Styled.ProfileImage src={image} />}
        </Styled.ProfileBlankDiv>
      </Styled.ProfileImageDiv>
      <Styled.NicknameDiv>
        {!isEdit && <Styled.Nickname>{watchedNickName}</Styled.Nickname>}
        {isEdit && <Styled.NicknameInput {...register('nickName')} />}
        {authentication === 1 && !isEdit && (
          <SVGIcon icon="AuthenticatedIcon" />
        )}
      </Styled.NicknameDiv>
    </Styled.Container>
  );
};

export default ProfileImage;
