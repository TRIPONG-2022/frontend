import axios from 'axios';

import {
  convertCityCodeToDistrictCode,
  convertToRegionData,
  convertToRegionMapData,
} from '@/utils/region';
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

export const requestGetDistrict = async (cityCode?: string) => {
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
