import axios, { AxiosError } from 'axios';
import instance from './instance';

interface EnroleAdminType {
  roleName: string;
  description: string;
}

// 권한

export const getRoles = async () => {
  try {
    const data = await instance.get('/admin/roles');
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

export const getUsers = async () => {
  try {
    const data = await instance.get('/admin/users');
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

export const getReportUsers = async () => {
  try {
    const data = await instance.get('/admin/reports/users');
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

export const blackUser = async (userId: number) => {
  try {
    const data = await instance.patch(`/admin/reports/users/black/${userId}`);
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

export const roleUser = async (userId: number, roleNames: string) => {
  try {
    const data = await instance.patch(`/admin/users/${userId}`, {
      roleNames,
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

//게시글

export const getPosts = async () => {
  try {
    const data = await instance.get('/admin/posts');
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

export const getReportPosts = async () => {
  try {
    const data = await instance.get('/admin/reports/posts');
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
