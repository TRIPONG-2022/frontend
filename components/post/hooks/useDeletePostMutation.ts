import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { Post } from '@/types/post';
import { requestDeletePost } from '@/api/post';

export default function useDeletePostMutation(post: Post) {
  const router = useRouter();
  const mutations = useMutation(['delete-post', post.id], requestDeletePost, {
    onSuccess: () => {
      alert('포스트가 삭제되었습니다.');
      router.replace('/');
    },
  });
  return mutations;
}
