import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { SearchParams } from '@/types/search-params';

interface SearchParamsState {
  searchParams: SearchParams;
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
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
    throw new Error(`${componentName}이 존재하지 않습니다. `);
  }

  return context;
}

const PostSearchParamsContextProvider = ({
  children,
}: SearchParamsContextProviderProps) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
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
