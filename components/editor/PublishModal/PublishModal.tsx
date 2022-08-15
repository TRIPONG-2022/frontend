import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import SVGIcon from '@/components/shared/SVGIcon';
import * as Styled from './PublishModal.styled';

interface PublishModalProps {
  isOpen: boolean;
  thumbnail?: File;
  onChangeThumbnail: (thumbnail?: File) => void;
  onClose?: () => void;
  onPublish?: () => void;
}

export default function PublishModal({
  isOpen,
  thumbnail,
  onChangeThumbnail,
  onClose,
  onPublish,
}: PublishModalProps) {
  const [thumbnailBase64, SetThumbnailBase64] = useState<
    string | ArrayBuffer | null
  >(null);

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
            hidden
          />
        </Styled.ThumbnailContainer>
        <Styled.ButtonContainer>
          <Button variant="outline" onClick={onClose}>
            돌아가기
          </Button>
          <Button onClick={onPublish}>출간하기</Button>
        </Styled.ButtonContainer>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  );
}
