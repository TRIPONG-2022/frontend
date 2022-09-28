import useManagedBlackUserQuery from '@/hooks/useManagedBlackUserQuery';
import ManagedUserCard from '../ManagedUserCard/ManagedUserCard';

const ManagedBlackUserList = () => {
  const { data, isLoading, isError } = useManagedBlackUserQuery();

  return (
    <>
      {data?.map((data) => (
        <ManagedUserCard userData={data} key={data.id} />
      ))}
    </>
  );
};

export default ManagedBlackUserList;
