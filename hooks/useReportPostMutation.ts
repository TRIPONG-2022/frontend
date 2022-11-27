import { useMutation } from 'react-query';
import { requestReportPost } from '@/api/report';

export default function useReportPostMutation(postId: string | number) {
  const mutations = useMutation(
    ['reportPost', postId],
    requestReportPost(postId),
    {
      onSuccess: () => {
        alert('신고가 접수되었습니다.');
      },
    },
  );
  return mutations;
}
