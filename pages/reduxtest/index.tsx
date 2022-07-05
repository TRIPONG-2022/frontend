import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, makeOne } from 'store/counterSlice';
import type { RootState } from 'store';
import wrapper from 'store/wrapstore';
import axios from 'axios';

interface ReduxTestPageProps {
  counter: number;
}

const ReduxTestPage: NextPage<ReduxTestPageProps> = (props) => {
  const selectCount = useSelector((state: RootState) => state.counter.counter);
  const count = props.counter;
  const dispatch = useDispatch();
  console.log(props.counter);

  return (
    <>
      <p>props 카운트{count}</p>
      <p>useSelector 카운트 {selectCount}</p>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...ets }) => {
      // const { data } = await axios.get(
      //   `https://jsonplaceholder.typicode.com/posts/${
      //     store.getState().counter.counter
      //   }`,
      // );

      store.dispatch(makeOne());

      const counter = store.getState().counter.counter;
      // console.log(data);
      return { props: { counter } };
    },
);

export default ReduxTestPage;
