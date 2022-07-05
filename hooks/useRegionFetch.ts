import React, { useState, useEffect } from 'react';

interface RegionData {
  code: string;
  name: string;
}

interface FormatData {
  value: string;
  label: string;
}

interface Props {
  url: string;
  deps?: string | undefined;
}

type UseRegionFetchReturns = [FormatData[], Map<string, string>];

function useRegionFetch({ url, deps }: Props): UseRegionFetchReturns {
  const [regionData, setRegionData] = useState<FormatData[]>([]);

  const regionMapData = React.useMemo(() => {
    const ret = new Map<string, string>();
    regionData?.forEach(({ value, label }) => {
      ret.set(value, label);
    });
    return ret;
  }, [regionData]);

  useEffect(() => {
    (async function () {
      const res = await fetch(url);
      const { regcodes } = await res.json();

      const data = regcodes?.map((obj: RegionData) => {
        return {
          value: obj.code,
          label: obj.name.split(' ')[1] || obj.name,
        };
      });

      setRegionData(() => data as FormatData[]);
    })();
  }, [url, deps]);

  return [regionData, regionMapData];
}

export default useRegionFetch;
