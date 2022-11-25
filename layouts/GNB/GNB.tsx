import Link from 'next/link';

import DesktopNavigation from '../DesktopNavigation';
import useScreenType from '@/hooks/useScreenType';
import MobileNavigation from '@/layouts/MobileNaviation';
import SVGIcon from '@/components/shared/SVGIcon';
import ResponsiveContainer from '@/components/shared/ResponsiveContainer';

import * as Styled from './GNB.styled';

export default function GNB() {
  const { isDesktop } = useScreenType();

  return (
    <Styled.GNBContainer>
      <ResponsiveContainer>
        <Styled.NavigationWrapper>
          <Link href="/">
            <Styled.LogoLink>
              <SVGIcon
                icon="LogoIcon"
                width={110}
                height={32}
                color="#252525"
              />
            </Styled.LogoLink>
          </Link>
          {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
        </Styled.NavigationWrapper>
      </ResponsiveContainer>
    </Styled.GNBContainer>
  );
}
