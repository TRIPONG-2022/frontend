import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';

import { fileToObjectURL } from '@/utils/image';
import { ProfilePatchSchema } from '@/constants/schema';
import SVGIcon from '@/components/shared/SVGIcon';

import * as Styled from './ProfileImage.styled';

interface ProfileImageProps {
  picture: string | null | undefined;
  isEdit: boolean;
  authentication: number | undefined;
}

const ProfileImage = ({
  picture,
  authentication,
  isEdit,
}: ProfileImageProps) => {
  const [image, setImage] = useState(
    picture && `data:image/jpg;base64,${picture}`,
  );
  const imgRef = useRef<HTMLInputElement | null>(null);

  const { register, watch, setValue, formState } =
    useFormContext<ProfilePatchSchema>();
  const { errors } = formState;

  const watchedNickName = watch('nickName');
  const {
    ref: pictureRef,
    onChange: pictureOnChange,
    ...rest
  } = register('picture');

  const onChangeImage = () => {
    if (isEdit) imgRef.current!.click();
  };

  const removeImage = () => {
    setImage('');
    setValue('picture', '');
  };

  const getImage = useCallback(async () => {
    if (imgRef.current!.files) {
      const url = await fileToObjectURL(imgRef.current!.files[0]);
      setImage(url);
    }
  }, []);

  const setImageRef = (e: HTMLInputElement) => {
    imgRef.current = e;
    pictureRef(e);
  };

  const onChangeImageRef = (e: ChangeEvent<HTMLInputElement>) => {
    getImage();
    pictureOnChange(e);
  };

  return (
    <Styled.ProfileImageContainer>
      <Styled.ProfileImageDiv>
        {isEdit && (
          <SVGIcon icon="DeleteIcon" size="20" onClick={removeImage} />
        )}
        <input
          type="file"
          ref={setImageRef}
          onChange={onChangeImageRef}
          hidden
          {...rest}
        />
        <Styled.ProfileBlankDiv onClick={onChangeImage}>
          {image && <Styled.ProfileImage src={image} />}
        </Styled.ProfileBlankDiv>
      </Styled.ProfileImageDiv>
      <Styled.NicknameDiv>
        {!isEdit && <Styled.Nickname>{watchedNickName}</Styled.Nickname>}
        {isEdit && (
          <Styled.NicknameInput maxLength={11} {...register('nickName')} />
        )}
        {!!authentication && !isEdit && <SVGIcon icon="AuthenticatedIcon" />}
      </Styled.NicknameDiv>
      <Styled.NicknameDiv>
        <Styled.NicknameErrorMessage>
          {errors.nickName?.message && `*${errors.nickName?.message}`}
        </Styled.NicknameErrorMessage>
      </Styled.NicknameDiv>
    </Styled.ProfileImageContainer>
  );
};

export default ProfileImage;
