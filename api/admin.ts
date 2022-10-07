import axios, { AxiosError } from 'axios';
import instance from './instance';
import { SearchParams } from '@/types/search-params';

interface EnroleAdminType {
  roleName: string;
  description: string;
}

// 권한

export const getRoles = async () => {
  const { data } = await instance.get('/admin/roles');

  return data;
};

export const enrolRoles = async ({
  roleName,
  description,
}: EnroleAdminType) => {
  try {
    const data = await instance.post('/admin/roles', {
      roleName,
      description,
    });
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
  }
};

export const deleteRoles = async (roleId: number) => {
  try {
    const data = await instance.delete(`/admin/roles/${roleId}`);
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
  }
};

//자원은 뒤로

// 유저

interface UserData {
  content: {
    id: number;
    name: string;
    loginId: string;
    nickName: string;
    createdDate: string;
    roles: { roleName: string }[];
    reportType?: string;
    reporterName?: string;
  }[];
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
  try {
    const data = await instance.patch(`/admin/reports/users/black/${userId}`);
    console.log(data);
    return {
      isError: false,
    };
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
    return {
      isError: true,
    };
  }
};

export const roleUser = async (userId: number, roleNames: string[]) => {
  try {
    const data = await instance.patch(`/admin/users/${userId}`, {
      roleNames,
    });
    console.log(data);
    return {
      isError: false,
    };
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
    return {
      isError: true,
    };
  }
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
  try {
    const data = await instance.delete(`/admin/reports/posts/${postId}`);
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
  }
};
