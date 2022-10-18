import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: PortalProps) => {
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (document) {
      setElement(document.querySelector(selector));
    }
  }, [selector]);

  if (!element) return <></>;

  return ReactDOM.createPortal(children, element);
};

export default Portal;
