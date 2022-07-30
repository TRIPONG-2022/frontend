import instance from './instance';

export const getProfileInfomation = async (userId: number) => {
  try {
    const { status, data } = await instance.get(`/users/profile/${userId}`);
    return data;
  } catch (err) {
    throw new Error('통신 에러');
  }
};
