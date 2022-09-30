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

export async function requestCreateReplyByPost(
  postId: string | number,
  content: string,
) {
  await instance.post(`/replies/${postId}`, {
    content,
  });
}

export async function requestCreateReplyByReply(
  postId: string | number,
  replyId: string | number,
  content: string,
) {
  await instance.post(`/replies/${postId}`, {
    content,
    parentReply: replyId,
  });
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
