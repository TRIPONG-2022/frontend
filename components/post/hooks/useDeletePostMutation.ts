import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { requestDeletePost } from '@/api/post';

export default function useDeletePostMutation() {
  const router = useRouter();
  const mutations = useMutation('delete-post', requestDeletePost, {
    onSuccess: () => {
      alert('포스트가 삭제되었습니다.');
      router.push('/');
    },
  });
  return mutations;
}
