import React from 'react';

import * as Styled from './ResponsiveContainer.styled';

interface ResponsiveContainerProps {
  children?: React.ReactNode;
}
export default function ResponsiveContainer({
  children,
}: ResponsiveContainerProps) {
  return <Styled.ResponsiveContainer>{children}</Styled.ResponsiveContainer>;
}
