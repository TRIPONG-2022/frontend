import React from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import SVGIcon from '@/components/shared/SVGIcon';
import * as Styled from './PublishModal.styled';

interface PublishModalProps {
  isOpen: boolean;
  thumbnail?: string;
  onChangeThumbnail: (thumbnail: string) => void;
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
  const resetThumbnail = () => {
    onChangeThumbnail('');
  };

  const handleChangeThumbnail = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChangeThumbnail(
      'https://images.unsplash.com/photo-1657299143474-c456e8388ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80',
    );
  };

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
          {thumbnail ? (
            <Image
              src={thumbnail}
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
