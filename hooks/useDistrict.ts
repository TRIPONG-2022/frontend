import { useState, useEffect } from 'react';

function useDistrict(city: string | undefined) {
  const [district, setDistrict] = useState<[]>();

  useEffect(() => {
    (async function () {
      if (!city) {
        return;
      }
      const res = await fetch(
        `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${city?.substring(
          0,
          2,
        )}*000000&is_ignore_zero=true`,
      );
      const { regcodes } = await res.json();

      setDistrict(regcodes);
    })();
    // API 예외 처리
    // fetch 자체도 커스텀 hook  fetch 예외처리
    // useFetch 검색해보기
    // react-query swr hook
    // axios 쓰는 이유 BASE URL instance 만드는게 편하다. 인터셉터 활용 이걸로 acess token 관리 err 관리  fetch 에 제네릭? response 타입 지정이 편하다
  }, [city]);

  return { district };
}

export default useDistrict;
