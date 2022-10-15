import instance from './instance';
import { ReportType } from '@/types/report';

export async function requestGetReportType() {
  const { data } = await instance.get<ReportType[]>('/reports/type');
  return data;
}

export function requestReportUser(userId: string | number) {
  return async (kind: string) => {
    const { data } = await instance.post(`/reports/users/${userId}`, { kind });
    return data;
  };
}

export function requestReportPost(postId: string | number) {
  return async (kind: string) => {
    const { data } = await instance.post(`/reports/users/${postId}`, { kind });
    return data;
  };
}
