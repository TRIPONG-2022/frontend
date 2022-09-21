import axios from 'axios';
import { useQuery } from 'react-query';
import {
  RegionData,
  RegionResponseData,
  convertToRegionMapData,
  convertToRegionData,
  convertCityCodeToDistrictCode,
} from 'utils/region';

const requestGetDistrict = async (cityCode?: string) => {
  if (cityCode === undefined) {
    return;
  }

  const { data } = await axios.get<RegionResponseData>(
    `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes`,
    {
      params: {
        regcode_pattern: convertCityCodeToDistrictCode(cityCode),
        is_ignore_zero: true,
      },
    },
  );
  const regionData = convertToRegionData(data);
  const regionMapData = convertToRegionMapData(regionData);
  return {
    regionData,
    regionMapData,
  };
};

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
