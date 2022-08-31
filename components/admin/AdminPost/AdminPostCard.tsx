interface PostType {
  postData: {
    userId: number;
    postId: number;
    title: string;
    loginId: string;
    nickName: string;
    postCreatedDate: string;
  };
}

const AdminPostCard = ({ postData }: PostType) => {
  return (
    <div>
      <h1>{postData.userId}</h1>
    </div>
  );
};

export default AdminPostCard;
