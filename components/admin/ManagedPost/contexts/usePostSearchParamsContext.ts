import { useContext } from 'react';
import { PostSearchParamsContext } from './PostSearchParamsContex';

function usePostSearchParamsContext() {
  const context = useContext(PostSearchParamsContext);

  if (context === null) {
    throw Error;
  }

  if (context === undefined) {
    throw Error;
  }

  return context;
}

export default usePostSearchParamsContext;
