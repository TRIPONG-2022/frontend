import React from 'react';
import ResponsiveContainer from '@/components/shared/ResponsiveContainer';

import * as Styled from './Banner.styled';
import Link from 'next/link';

export default function Banner() {
  return (
    <Styled.BannerContainer>
      <ResponsiveContainer>
        <Styled.BannerHeading>TRIPONG</Styled.BannerHeading>
        <Styled.BannerHeading>
          여행에 <span>PONG</span> 빠지다.
        </Styled.BannerHeading>
        <Link href="/auth/login">
          <Styled.BannerLink>지금 시작하기</Styled.BannerLink>
        </Link>
      </ResponsiveContainer>
    </Styled.BannerContainer>
  );
}
