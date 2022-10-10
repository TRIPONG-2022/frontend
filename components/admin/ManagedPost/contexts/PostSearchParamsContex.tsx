import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

import { SearchParams } from '@/types/search-params';

interface SearchParamsState {
  searchParams: SearchParams;
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
}

export const PostSearchParamsContext = createContext<SearchParamsState | null>(
  null,
);

interface SearchParamsContextProviderProps {
  children: React.ReactNode;
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
