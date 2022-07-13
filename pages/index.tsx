import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import type { RootState } from 'store';
import wrapper from 'store/wrapstore';

interface ReduxTestPageProps {
  counter: number;
}

const HomePage: NextPage<ReduxTestPageProps> = (props) => {
  const counter = useSelector((state: RootState) => state.counter.counter);

  return (
    <div>
      <p>{counter}</p>
      <p>serversideProps프롭스로 받아온 {props.counter}</p>
      <h1 className="">TRIPONG</h1>
    </div>
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

      const counter = store.getState().counter.counter;
      console.log(counter);
      // console.log(data);
      return { props: { counter } };
    },
);

export default HomePage;
