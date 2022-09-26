import axios from 'axios';
import { useQuery } from 'react-query';
import { convertToRegionMapData, convertToRegionData } from 'utils/region';

import { RegionResponseData } from '@/types/region';

export const requestGetCities = async () => {
  const { data } = await axios.get<RegionResponseData>(
    'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes',
    {
      params: {
        regcode_pattern: '*00000000',
      },
    },
  );
  const regionData = convertToRegionData(data);
  const regionMapData = convertToRegionMapData(regionData);
  return { regionData, regionMapData };
};

export function useCityQuery() {
  const results = useQuery('city', requestGetCities, {
    staleTime: Infinity,
  });

  return results;
}
