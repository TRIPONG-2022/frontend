import React, { useState, useEffect } from 'react';

// 여기서 number 0으로 바꾸면 지역이 안뜨는 오류 발견 why??
const useRegionFetch = (url: string, deps: string | number = 1) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    (async function () {
      if (!deps) return;

      const res = await fetch(url);
      const { regcodes } = await res.json();

      setResponse(regcodes);
    })();
    console.log('리렌더');
  }, [deps]);

  return { response };
};

export default useRegionFetch;
