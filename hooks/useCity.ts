import { useState, useEffect } from 'react';

function useCity() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(
        'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000',
      );
      const { regcodes } = await res.json();

      setCity(regcodes);
    })();
  }, []);

  return { city };
}

export default useCity;
