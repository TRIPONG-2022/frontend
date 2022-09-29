import { SVGIconType } from '@/components/shared/SVGIcon';
import { IconButtonColorScheme } from '@/components/shared/IconButton/IconButton.styled';

interface OauthInterface {
  iconName: SVGIconType;
  title: string;
  colorSchemeName: IconButtonColorScheme;
  linkData: string;
}

export const OAUTH_DATA: OauthInterface[] = [
  {
    iconName: 'KakaoIcon',
    title: '카카오 로그인',
    colorSchemeName: 'kakao',
    linkData: 'kakao',
  },
  {
    iconName: 'NaverIcon',
    title: '네이버 로그인',
    colorSchemeName: 'naver',
    linkData: 'naver',
  },
  {
    iconName: 'GoogleIcon',
    title: '구글 로그인',
    colorSchemeName: 'google',
    linkData: 'google',
  },
  {
    iconName: 'FacebookIcon',
    title: '페이스북 로그인',
    colorSchemeName: 'facebook',
    linkData: 'facebook',
  },
];
