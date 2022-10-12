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

export const SearchParamsContext = createContext<SearchParamsState | null>(
  null,
);

export function useUserSearchParamsContext(componentName: string) {
  const context = useContext(SearchParamsContext);

  if (context === null) {
    throw new Error(
      `${componentName}에 상위 <UserSearchParamsContextProvider>가 존재하지 않습니다. `,
    );
  }

  return context;
}

const UserSearchParamsContextProvider = ({
  children,
}: SearchParamsContextProviderProps) => {
  const [searchParams, setSearchParams] = useState<ManagedSearchParams>({
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
