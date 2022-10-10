import { useContext } from 'react';
import { SearchParamsContext } from './SearchParamsContex';

function useSearchParamsContext() {
  const context = useContext(SearchParamsContext);

  if (context === null) {
    throw Error;
  }

  if (context === undefined) {
    throw Error;
  }

  return context;
}

export default useSearchParamsContext;
