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

export const SearchParamsContext = createContext<SearchParamsState | null>(
  null,
);

interface SearchParamsContextProviderProps {
  children: React.ReactNode;
}

const SearchParamsContextProvider = ({
  children,
}: SearchParamsContextProviderProps) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchType: 'loginId',
    keyword: '',
    size: 3,
  });

  return (
    <SearchParamsContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </SearchParamsContext.Provider>
  );
};

export default SearchParamsContextProvider;
