import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState(initialValue);

  const action = {
    toggle: toggle,
    onToggle: () => setToggle(!toggle),
    setOff: () => setToggle(false),
    setOn: () => setToggle(true),
  };

  return action;
};

export default useToggle;
