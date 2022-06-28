import React, { useState, useEffect } from 'react';

// 여기서 number 0으로 바꾸면 지역이 안뜨는 오류 발견 why??
// 여기서 더 한다면, useSWR로 리팩토링 하거나, setState도 return값으로 err값도 return 값으로
const useRegionFetch = (url: string, deps: string | number = 1) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    (async function () {
      if (!url) return;
      if (!deps) return;

      const res = await fetch(url);
      const { regcodes } = await res.json();

      setResponse(regcodes);
    })();
  }, [deps]);

  return { response };
};

export default useRegionFetch;
