import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import SVGIcon from '@/components/shared/SVGIcon';
import { PostEditorSchema } from '@/constants/schema';
import * as Styled from './PublishModal.styled';

interface PublishModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onPublish?: () => void;
}

export default function PublishModal({
  isOpen,
  onClose,
  onPublish,
}: PublishModalProps) {
  const { control, setValue } = useFormContext<PostEditorSchema>();
  const thumbnail = useWatch({ name: 'thumbnail', control });
  const inputRef = useRef<HTMLInputElement>(null);
  const [thumbnailBase64, SetThumbnailBase64] = useState<
    string | ArrayBuffer | null
  >(null);

  const onChangeThumbnail = (thumbnail?: File) => {
    setValue('thumbnail', thumbnail);
  };

  const toBase64 = useCallback(
    (file: File): Promise<string | ArrayBuffer | null> =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      }),
    [],
  );

  const resetThumbnail = () => {
    onChangeThumbnail(undefined);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleChangeThumbnail = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files) {
      const imageFile = files[0];
      onChangeThumbnail(imageFile);
    }
  };

  useEffect(() => {
    (async () => {
      if (!thumbnail) {
        return;
      }
      const base64 = await toBase64(thumbnail);
      SetThumbnailBase64(base64);
    })();
  }, [thumbnail, toBase64]);

  return (
    <Styled.OuterContainer $isOpen={isOpen}>
      <Styled.InnerContainer>
        <Styled.PublishModalHeading>썸네일 업로드</Styled.PublishModalHeading>
        {thumbnail && (
          <Styled.ThumbnailHandleContainer>
            <label htmlFor="thumbnail">재업로드</label>
            <button onClick={resetThumbnail}>제거</button>
          </Styled.ThumbnailHandleContainer>
        )}
        <Styled.ThumbnailContainer>
          {thumbnail && thumbnailBase64 ? (
            <Image
              src={thumbnailBase64.toString()}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <React.Fragment>
              <SVGIcon icon="ThumbnailIcon" size={128} />
              <Styled.ThumbnailUploadLabel htmlFor="thumbnail">
                썸네일 업로드
              </Styled.ThumbnailUploadLabel>
            </React.Fragment>
          )}
          <input
            id="thumbnail"
            name="thumbnail"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChangeThumbnail}
            ref={inputRef}
            hidden
          />
        </Styled.ThumbnailContainer>
        <Styled.ButtonContainer>
          <Button variant="outline" onClick={onClose}>
            돌아가기
          </Button>
          <Button disabled={!Boolean(thumbnail)} onClick={onPublish}>
            출간하기
          </Button>
        </Styled.ButtonContainer>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  );
}
