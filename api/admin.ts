import { SearchParams } from '@/types/search-params';
import { EnroleApiParams } from '@/types/managed-role';
import { ManagedUserData } from '@/types/managed-user';
import instance from './instance';

export const getRoles = async () => {
  const { data } = await instance.get('/admin/roles');

  return data;
};

export const enrolRoles = async ({
  roleName,
  description,
}: EnroleApiParams) => {
  const data = await instance.post('/admin/roles', {
    roleName,
    description,
  });

  return data;
};

export const deleteRoles = async (roleId: number) => {
  const data = await instance.delete(`/admin/roles/${roleId}`);

  return data;
};

//자원은 뒤로

// 유저

interface UserData {
  content: ManagedUserData[];
  totalPages: number;
  totalElements: number;
}

export const getUsers = async (params?: SearchParams) => {
  const { data } = await instance.get<UserData>(`/admin/users`, {
    params: params,
  });

  return data;
};

export const getReportUsers = async (params?: SearchParams) => {
  const { data } = await instance.get(`/admin/reports/users`, {
    params: params,
  });

  return data;
};

export const blackUser = async (userId: number) => {
  const data = await instance.patch(`/admin/reports/users/black/${userId}`);

  return data;
};

export const roleUser = async (userId: number, roleNames: string[]) => {
  const data = await instance.patch(`/admin/users/${userId}`, {
    roleNames,
  });

  return data;
};

//게시글

export const getPosts = async (params?: SearchParams) => {
  const { data } = await instance.get('/admin/posts', {
    params: params,
  });

  return data;
};

export const getReportPosts = async (params?: SearchParams) => {
  const { data } = await instance.get('/admin/reports/posts', {
    params: params,
  });

  return data;
};

export const deleteReportPosts = async (postId: number) => {
  const data = await instance.delete(`/admin/reports/posts/${postId}`);

  return data;
};
