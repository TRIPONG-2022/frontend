import React from 'react';
import * as Icons from '@/assets/icons';

export type SVGIconType = keyof typeof Icons;

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  icon: SVGIconType;
  title?: string;
  size?: number | string;
}

export default function SVGIcon({
  icon,
  title,
  size,
  width,
  height,
  ...svgProps
}: SVGIconProps) {
  const IconComponent = Icons[icon];

  return (
    <IconComponent
      title={title}
      width={size || width || '1em'}
      height={size || height || '1em'}
      {...svgProps}
    />
  );
}
