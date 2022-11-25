import Link from 'next/link';
import React, { useEffect } from 'react';

import DesktopNavigation from '../DesktopNavigation';
import useScreenType from '@/hooks/useScreenType';
import MobileNavigation from '@/layouts/MobileNaviation';
import SVGIcon from '@/components/shared/SVGIcon';
import ResponsiveContainer from '@/components/shared/ResponsiveContainer';
import * as Styled from './GNB.styled';

const GNB = () => {
  const { isDesktop } = useScreenType();

  return (
    <Styled.HeaderContainer>
      <ResponsiveContainer>
        <Styled.NavigationWrapper>
          <Link href="/">
            <Styled.LogoLink>
              <SVGIcon icon="LogoIcon" width={120} height={50} />
            </Styled.LogoLink>
          </Link>
          {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
        </Styled.NavigationWrapper>
      </ResponsiveContainer>
    </Styled.HeaderContainer>
  );
};

export default GNB;
