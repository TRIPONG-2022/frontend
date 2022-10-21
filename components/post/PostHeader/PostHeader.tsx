import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

import Modal from '@/components/shared/Modal';
import Select from '@/components/shared/Select';
import Button from '@/components/shared/Button';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import useReportTypeQuery from '@/hooks/useReportTypeQuery';
import useReportPostMutation from '@/hooks/useReportPostMutation';
import { Post } from '@/types/post';
import { POST_CATEGORIES } from '@/constants/post-category';

import * as Styled from './PostHeader.styled';

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <Styled.PostHeaderContainer>
      <Styled.PostCategory>
        {POST_CATEGORIES[post.category]}
      </Styled.PostCategory>
      <Styled.PostTitle>{post.title}</Styled.PostTitle>

      <Styled.PostDetailWrapper>
        <Styled.PostDetailLeftWrapper>
          <Styled.AuthorProfileImage>
            <Image
              src="/images/profile.png"
              alt="프로필 이미지"
              layout="fill"
            />
          </Styled.AuthorProfileImage>
          <Styled.PostAuthorAndDateWrapper>
            <Styled.PostAuthor>{post.author}</Styled.PostAuthor>
            <Styled.PostDate>
              {format(new Date(), 'yyyy.MM.dd')}
            </Styled.PostDate>
          </Styled.PostAuthorAndDateWrapper>
        </Styled.PostDetailLeftWrapper>
        <Styled.PostDetailRightWrapper>
          <PostReportModal post={post} />
        </Styled.PostDetailRightWrapper>
      </Styled.PostDetailWrapper>
    </Styled.PostHeaderContainer>
  );
}

function PostReportModal({ post }: PostHeaderProps) {
  const { data } = useReportTypeQuery();
  const [reportType, setReportType] = useState<string>('');
  const { mutate } = useReportPostMutation(post.id);
  const [isModal, open, close] = useModal();

  const reportPost = () => {
    mutate(reportType, {
      onSuccess: () => {
        setReportType('');
        close();
      },
    });
  };

  const onClose = () => {
    setReportType('');
    close();
  };

  const reportOptions = useMemo(
    () => data?.map(({ kr, en }) => ({ value: en, label: kr })),
    [data],
  );

  return (
    <>
      <button onClick={open}>
        <SVGIcon icon="MoreVerticalIcon" size={20} />
      </button>
      <Modal isModal={isModal} close={onClose} size="sm">
        <Modal.Title>신고하기</Modal.Title>
        <div>
          <Select
            id="report-post"
            defaultLabel="신고 유형을 선택하세요."
            selectedValue={reportType}
            onChangeOption={setReportType}
            options={reportOptions}
          />
        </div>
        <Modal.TwoBtnContainer
          leftBtn={
            <Button
              size="md"
              onClick={reportPost}
              fullWidth
              disabled={!Boolean(reportType)}
            >
              신고하기
            </Button>
          }
          rightBtn={
            <Button size="md" variant="default" onClick={onClose} fullWidth>
              취소
            </Button>
          }
        />
      </Modal>
    </>
  );
}
