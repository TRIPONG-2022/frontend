import { useQuery } from 'react-query';
import { requestGetCities } from '@/api/region';

export function useCityQuery() {
  const results = useQuery('city', requestGetCities, {
    staleTime: Infinity,
  });

  return results;
}
