import React from 'react';
import SVGIcon from '@/components/shared/SVGIcon';

import * as Styled from './Footer.styled';

export default function Footer() {
  return (
    <Styled.FooterContainer>
      <Styled.LogoWrapper>
        <SVGIcon icon="LogoIcon" height={36} width={160} />
        <p>© TRIPONG Corp. All rights reserved.</p>
      </Styled.LogoWrapper>
    </Styled.FooterContainer>
  );
}
