export interface ManagedPostData {
  userId: number;
  postId: number;
  title: string;
  loginId: string;
  nickName: string;
  postCreatedDate: string;
  category: string;
}

export interface ManagedPostPageData {
  content: ManagedPostData[];
  totalPages: number;
  totalElements: number;
}
