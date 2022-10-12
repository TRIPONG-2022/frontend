import React, { useState } from 'react';

function useModal(): [boolean, () => void, () => void] {
  const [isModal, setIsModal] = useState(false);

  const open = () => {
    setIsModal(true);
  };
  const close = () => {
    setIsModal(false);
  };

  return [isModal, open, close];
}

export default useModal;
