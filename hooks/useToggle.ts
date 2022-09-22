import { Dispatch, SetStateAction, useState } from 'react';

const useToggle = (
  initialValue: boolean,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [toggle, setToggle] = useState(initialValue);

  return [toggle, setToggle];
};

export default useToggle;
