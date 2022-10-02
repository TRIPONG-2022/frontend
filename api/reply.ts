import instance from './instance';
import { GetReplyParams, Reply } from '@/types/reply';

export async function requestGetRepliesByPost(
  postId: string | number,
  params: GetReplyParams,
) {
  const { data } = await instance.get<Reply[]>(`/replies/parent/${postId}`, {
    params,
  });
  return data;
}

export async function requestGetRepliesByReply(
  postId: string | number,
  replyId: string | number,
  params: GetReplyParams,
) {
  const { data } = await instance.get<Reply[]>(
    `/replies/children/${postId}/${replyId}`,
    {
      params,
    },
  );
  return data;
}

export function requestCreateReply(
  postId: string | number,
  replyId?: string | number,
) {
  const url = replyId ? `/replies/${postId}/${replyId}` : `/replies/${postId}`;

  return async (content: string) => {
    await instance.post(url, {
      content,
    });
  };
}

export async function requestUpdateReply(
  postId: string | number,
  replyId: string | number,
  content: string,
) {
  await instance.patch(`/replies/${postId}/${replyId}`, { content });
}

export async function requestDeleteReply(
  postId: string | number,
  replyId: string | number,
) {
  await instance.delete(`/replies/${postId}/${replyId}`);
}
