import { NextRouter } from 'next/router';

export interface MakeMenuParamType {
  name: string;
  link: string;
  fn: () => void;
}

const MakeMenu = (
  { name, link, fn }: MakeMenuParamType,
  router: NextRouter,
) => {
  if (name === '로그아웃') {
    // 로그아웃 API
    fn();
  } else {
    router.push(link);
  }
};

export default MakeMenu;
