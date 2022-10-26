import instance from './instance';
import { GetReplyParams, Reply } from '@/types/reply';

export function requestGetReplies(
  postId: string | number,
  replyId?: string | number,
) {
  const url = replyId
    ? `/replies/children/${postId}/${replyId}`
    : `/replies/parent/${postId}`;
  return async (params: GetReplyParams) => {
    const { data } = await instance.get<Reply[]>(url, {
      params,
    });
    return data;
  };
}

export function requestCreateReply(
  postId: string | number,
  replyId?: string | number,
) {
  const url = `/replies/${postId}`;

  return async (content: string) => {
    await instance.post(url, {
      content,
      parentReply: replyId,
    });
  };
}

export function requestUpdateReply(reply: Reply) {
  return async (content: string) => {
    await instance.patch(`/replies/${reply.postId}/${reply.id}`, { content });
  };
}

export async function requestDeleteReply(reply: Reply) {
  await instance.delete(`/replies/${reply.postId}/${reply.id}`);
}
