import { useQuery } from 'react-query';
import { requestGetReportType } from '@/api/report';

export default function useReportTypeQuery() {
  const queries = useQuery('reportType', requestGetReportType, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return queries;
}
