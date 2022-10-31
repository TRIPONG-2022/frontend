import React, { useCallback, useMemo, useState } from 'react';
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
import Dropdown from '@/components/shared/Dropdown';
import { useSelector } from 'react-redux';
import { AppState } from '@/store/index';
import PostReportModal from '../PostReportModal';
import { useRouter } from 'next/router';
import useDeletePostMutation from '../hooks/useDeletePostMutation';

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
          <PostDropdown post={post} />
        </Styled.PostDetailRightWrapper>
      </Styled.PostDetailWrapper>
    </Styled.PostHeaderContainer>
  );
}

function PostDropdown({ post }: PostHeaderProps) {
  const router = useRouter();
  const { user } = useSelector((state: AppState) => state.user);
  const isAuthor = useMemo(() => post.author === user?.name, [post, user]);
  const [isPostReportModalOpen, openPostReportModal, closePostReportModal] =
    useModal();
  const { mutate } = useDeletePostMutation();

  const onEdit = () => {
    router.push(`/posts/write?postId=${post.id}&category=${post.category}`);
  };

  const onDelete = useCallback(() => {
    const isConfirm = window.confirm('정말로 삭제하시겠습니까?');
    if (isConfirm) {
      mutate(post);
    }
  }, [post, mutate]);

  return (
    <>
      <Dropdown>
        <Dropdown.Button>
          <SVGIcon icon="MoreVerticalIcon" size={20} />
        </Dropdown.Button>
        {isAuthor ? (
          <Dropdown.Items width="8rem">
            <Dropdown.Item onClick={onEdit}>수정하기</Dropdown.Item>
            <Dropdown.Item onClick={onDelete}>삭제하기</Dropdown.Item>
          </Dropdown.Items>
        ) : (
          <Dropdown.Items width="8rem">
            <Dropdown.Item onClick={openPostReportModal}>
              신고하기
            </Dropdown.Item>
          </Dropdown.Items>
        )}
      </Dropdown>
      <PostReportModal
        postId={post.id}
        isOpen={isPostReportModalOpen}
        onClose={closePostReportModal}
      />
    </>
  );
}
