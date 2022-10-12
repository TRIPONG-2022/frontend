interface UserDropdown {
  [key: string]: {
    title: string;
    onClick: (userId: number, { black, changeRole }: UserCallback) => void;
  };
}

interface UserCallback {
  black: (userId: number) => void;
  changeRole: (userId: number) => void;
}

interface PostDropdown {
  [key: string]: {
    title: string;
    onClick: (
      { userId, postId }: { userId: number; postId: number },

      { black, deletePost }: PostCallback,
    ) => void;
  };
}

interface PostCallback {
  black: (userId: number) => void;
  deletePost: (postId: number) => void;
}

export const ADMINUSER_DROPDOWN: UserDropdown = {
  black: {
    title: '해당 유저를 블랙하시겠습니까?',
    onClick: (userId, { black }) => black(userId),
  },
  roleChange: {
    title: '해당 유저의 권한을 변경하시겠습니까?',
    onClick: (userId, { changeRole }) => changeRole(userId),
  },
};

export const ADMINPOST_DROPDOWN: PostDropdown = {
  black: {
    title: '작성자를 블랙하시겠습니까?',
    onClick: ({ userId }, { black }) => black(userId),
  },
  deletePost: {
    title: '게시물을 삭제하시겠습니까?',
    onClick: ({ postId }, { deletePost }) => deletePost(postId),
  },
};
