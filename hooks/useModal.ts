import React, { useState } from 'react';

function useModal() {
  const [isModal, setIsModal] = useState(false);

  const open = () => {
    setIsModal(true);
  };
  const close = () => {
    setIsModal(false);
  };

  return { isModal, open, close };
}

export default useModal;
