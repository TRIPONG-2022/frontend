import type { NextPage } from 'next';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'store';
import wrapper from 'store/wrapstore';
import { increment, decrement, makeOne } from 'store/counterSlice';

interface ReduxTestPageProps {
  counter: number;
}

const TestPage: NextPage<ReduxTestPageProps> = (props) => {
  const counter = useSelector((state: RootState) => state.counter.counter);

  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div>
      <p>{counter}</p>
      <p>serversideProps프롭스로 받아온 {props.counter}</p>
      <h1 className="">TRIPONG</h1>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <Link href={'/reduxtest'}>
        <a>reduxtest로 이동</a>
      </Link>
      <Link href={'/'}>
        <a>index로 이동</a>
      </Link>
      <Link href={'/reduxwrapper'}>
        <a>wrapper 이동</a>
      </Link>
    </div>
  );
};

export default TestPage;
