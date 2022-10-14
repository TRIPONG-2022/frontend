import { createContext, useCallback, useContext, useState } from 'react';

interface ReplyListContextState {
  isOpenReplyForm: string | number | null;
  openReplyForm: (replyId: string | number | null) => void;
}

const ReplyListContext = createContext<ReplyListContextState | null>(null);

export function useReplyListContext(componentName: string) {
  const context = useContext(ReplyListContext);
  if (!context) {
    throw new Error(
      `<${componentName} /> is missing a parent <ReplyListContextProvider /> component.`,
    );
  }
  return context;
}

interface ReplyListContextProviderProps {
  children?: React.ReactNode;
}

export default function ReplyListContextProvider({
  children,
}: ReplyListContextProviderProps) {
  const [isOpenReplyForm, setIsOpenReplyForm] = useState<
    string | number | null
  >(null);

  const openReplyForm = useCallback((replyId: string | number | null) => {
    setIsOpenReplyForm(replyId);
  }, []);

  return (
    <ReplyListContext.Provider value={{ openReplyForm, isOpenReplyForm }}>
      {children}
    </ReplyListContext.Provider>
  );
}
