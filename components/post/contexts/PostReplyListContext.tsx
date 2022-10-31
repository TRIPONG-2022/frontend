import { createContext, useCallback, useContext, useState } from 'react';

interface PostReplyListContextState {
  isOpenReplyForm: string | number | null;
  openReplyForm: (replyId: string | number | null) => void;
}

const PostReplyListContext = createContext<PostReplyListContextState | null>(
  null,
);

export function usePostReplyListContext(componentName: string) {
  const context = useContext(PostReplyListContext);
  if (!context) {
    throw new Error(
      `<${componentName} /> is missing a parent <PostReplyListContextProvider /> component.`,
    );
  }
  return context;
}

interface PostReplyListContextProviderProps {
  children?: React.ReactNode;
}

export default function ReplyListContextProvider({
  children,
}: PostReplyListContextProviderProps) {
  const [isOpenReplyForm, setIsOpenReplyForm] = useState<
    string | number | null
  >(null);

  const openReplyForm = useCallback((replyId: string | number | null) => {
    setIsOpenReplyForm(replyId);
  }, []);

  return (
    <PostReplyListContext.Provider value={{ openReplyForm, isOpenReplyForm }}>
      {children}
    </PostReplyListContext.Provider>
  );
}
