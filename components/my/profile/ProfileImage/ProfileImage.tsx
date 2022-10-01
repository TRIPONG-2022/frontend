import React, {
  MouseEvent,
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
  authentication: number | undefined;
  isEdit: boolean;
}

const ProfileImage = ({
  picture,
  authentication,
  isEdit,
}: ProfileImageProps) => {
  const [image, setImage] = useState(picture);
  const imgRef = useRef<HTMLInputElement | null>(null);

  const { register, watch, setValue } = useFormContext<ProfilePatchSchema>();
  const watchedNickName = watch('nickName');

  const { ref, onChange, ...rest } = register('picture');

  const onChangeImage = () => {
    if (isEdit) imgRef.current!.click();
  };

  useEffect(() => {
    if (picture) {
      setImage(`data:image/jpg;base64,${picture}`);
    }
  }, [picture]);

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
        {!!authentication && !isEdit && <SVGIcon icon="AuthenticatedIcon" />}
      </Styled.NicknameDiv>
    </Styled.Container>
  );
};

export default ProfileImage;
