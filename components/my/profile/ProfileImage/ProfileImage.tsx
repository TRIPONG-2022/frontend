import React, { useRef, useState } from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';

import * as Styled from './ProfileImage.styled';
import { ProfilePatchSchema } from '@/constants/schema';
import SVGIcon from '@/components/shared/SVGIcon';

interface ProfileImageProps {
  picture: string | null | undefined;
  authentication: number;
  isEdit: boolean;
  register: UseFormRegister<ProfilePatchSchema>;
  watch: UseFormWatch<ProfilePatchSchema>;
}

const ProfileImage = ({
  picture,
  authentication,
  isEdit,
  register,
  watch,
}: ProfileImageProps) => {
  const [image, setImage] = useState(picture ?? undefined);
  const imgRef = useRef<HTMLInputElement | null>(null);
  const watchedNickName = watch('nickName');

  let { ref, onChange, ...rest } = register('picture');

  const onChangeImage = () => {
    if (isEdit) imgRef.current!.click();
  };

  const getImage = () => {
    if (imgRef.current!.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target!.result as string);
      };
      reader.readAsDataURL(imgRef.current!.files[0]);
    }
  };

  return (
    <Styled.Container>
      <Styled.ProfileImageDiv>
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
        <Styled.ProfileImage onClick={onChangeImage} src={image} />
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
