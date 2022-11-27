import { PostEditorSchema } from './schema';

export const DEFAULT_POST_SCHEMA: Partial<PostEditorSchema> = {
  title: '',
  category: undefined,
  tags: [],
  content: '',
  totalHeadCount: 1,
  startDate: new Date(),
  endDate: new Date(),
  thumbnail: undefined,
};
