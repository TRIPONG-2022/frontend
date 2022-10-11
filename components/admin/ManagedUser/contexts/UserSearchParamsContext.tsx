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

export const SearchParamsContext = createContext<SearchParamsState | null>(
  null,
);

export function useUserSearchParamsContext(componentName: string) {
  const context = useContext(SearchParamsContext);

  if (context === null) {
    throw new Error(`${componentName}이 존재하지 않습니다. `);
  }

  return context;
}

const UserSearchParamsContextProvider = ({
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

export default UserSearchParamsContextProvider;
