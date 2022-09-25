import { RegionData, RegionResponseData } from '@/types/region';

export const convertToRegionMapData = (data: RegionData[]) => {
  return new Map<string, string>(
    data.map(({ value, label }) => [value, label]),
  );
};

export const convertToRegionData = ({ regcodes }: RegionResponseData) => {
  return regcodes.map(({ code, name }) => ({
    value: code,
    label: name.split(' ')[1] || name,
  }));
};

export const convertCityCodeToDistrictCode = (cityCode: string) => {
  return `${cityCode.substring(0, 2)}*000000`;
};
