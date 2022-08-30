interface MenuType {
  [key: string]: {
    title: string;
    onClick: (userId: number, { black, changeRole }: Callback) => void;
    roles?: JSX.Element;
    // React.ReactNode 는 광범위하게 tag
  };
}

interface Callback {
  black: (userId: number) => Promise<void>;
  changeRole: (userId: number) => Promise<void>;
}

export const menuObj: MenuType = {
  black: {
    title: '해당 유저를 블랙하시겠습니까?',
    onClick: (userId, { black }) => black(userId),
  },
  roleChange: {
    title: '해당 유저의 권한을 변경하시겠습니까?',
    onClick: (userId, { changeRole }) => changeRole(userId),
  },
};
