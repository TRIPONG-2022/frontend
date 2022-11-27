export enum PostCategory {
  Review = 'review',
  Board = 'board',
  QNA = 'qna',
  Gathering = 'gathering',
}

export interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  category: PostCategory;
  tags: string[];
  latitude?: number;
  longitude?: number;
  startDate?: string;
  endDate?: string;
  curHeadCount: number;
  totalHeadCount: number;
  thumbnail: string;
  budget: number;
  likeCount: number;
  viewCount: number;
  isLike?: boolean;
}
