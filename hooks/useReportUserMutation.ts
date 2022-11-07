import { useMutation } from 'react-query';
import { requestReportUser } from '@/api/report';

export default function useReportUserMutation(userId: string | number) {
  const mutations = useMutation(
    ['reportUser', userId],
    requestReportUser(userId),
    {
      onSuccess: () => {
        alert('신고가 접수되었습니다.');
      },
    },
  );
  return mutations;
}
