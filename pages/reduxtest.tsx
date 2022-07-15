import { NextPage } from 'next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, makeOne } from 'store/slice/exampleCounterSlice';
import type { RootState } from 'store';
import wrapper from 'store';

interface ReduxTestPageProps {
  counter: number;
}

const ReduxTestPage: NextPage<ReduxTestPageProps> = () => {
  const selectCount = useSelector(
    (state: RootState) => state.exampleCounter.counter,
  );
  const dispatch = useDispatch();

  return (
    <>
      <p>useSelector 카운트 {selectCount}</p>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...ets }) => {
      store.dispatch(makeOne());
      const counter = store.getState().exampleCounter.counter;
      console.log(counter);
      return { props: {} };
    },
);

export default ReduxTestPage;
