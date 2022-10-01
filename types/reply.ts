export interface Reply {
  id: number;
  postId: number;
  userId: string;
  content: string;
  createDate: string;
  modifiedDate: string;
  parentReply: number | null;
}

export interface GetReplyParams {
  page?: number;
  size?: number;
}
