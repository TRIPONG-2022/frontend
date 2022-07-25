import instance from './instance';

export const getProfileInfomation = async (userId: number) => {
  const { status, data } = await instance.get(`/users/profile/${userId}`);

  console.log(status, data);

  return data;
};
