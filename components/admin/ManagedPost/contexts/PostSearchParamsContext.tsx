import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { ManagedSearchParams } from '@/types/search-params';

interface SearchParamsState {
  searchParams: ManagedSearchParams;
  setSearchParams: Dispatch<SetStateAction<ManagedSearchParams>>;
}

interface SearchParamsContextProviderProps {
  children: React.ReactNode;
}

export const PostSearchParamsContext = createContext<SearchParamsState | null>(
  null,
);

export function usePostSearchParamsContext(componentName: string) {
  const context = useContext(PostSearchParamsContext);

  if (context === null) {
    throw new Error(
      `${componentName}에 상위 <PostSearchParamsContextProvider>가 존재하지 않습니다.  `,
    );
  }

  return context;
}

const PostSearchParamsContextProvider = ({
  children,
}: SearchParamsContextProviderProps) => {
  const [searchParams, setSearchParams] = useState<ManagedSearchParams>({
    searchType: 'loginId',
    keyword: '',
    size: 3,
  });

  return (
    <PostSearchParamsContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </PostSearchParamsContext.Provider>
  );
};

export default PostSearchParamsContextProvider;
