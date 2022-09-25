import { useQuery } from 'react-query';
import { requestGetDistrict } from '@/api/region';

export function useDistrictQuery(cityCode?: string) {
  const results = useQuery(
    ['district', cityCode],
    () => requestGetDistrict(cityCode),
    {
      staleTime: Infinity,
      enabled: cityCode !== undefined,
    },
  );
  return results;
}
