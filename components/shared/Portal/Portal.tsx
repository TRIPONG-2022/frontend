import { NickName } from '@/components/admin/ManagedPost/ManagedPostCard/ManagedPostCard.styled';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: PortalProps) => {
  const el = document.querySelector(selector);

  return el && ReactDOM.createPortal(children, el);
};

// const el = typeof window !== 'undefined' && document.querySelector(selector);

export default Portal;
