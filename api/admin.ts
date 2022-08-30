import axios, { AxiosError } from 'axios';
import instance from './instance';

interface EnroleAdminType {
  roleName: string;
  description: string;
}

// 권한

interface RoleType {
  roleId: number;
  roleName: string;
  description: string;
}

export const getRoles = async () => {
  try {
    const { data } = await instance.get<RoleType[]>('/admin/roles');
    return {
      data,
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

export const enrolRoles = async ({
  roleName,
  description,
}: EnroleAdminType) => {
  console.log(roleName);
  try {
    const data = await instance.post('/admin/roles', {
      roleName,
      description,
    });
    console.log(data);
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
    const { data } = await instance.get(`/admin/users`);
    // const { data } = await instance.get(`/admin/users?page=0&size=${4}`);
    return {
      data,
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

export const getReportUsers = async () => {
  try {
    const { data } = await instance.get('/admin/reports/users');
    return {
      data,
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

export const getPosts = async () => {
  try {
    const { data } = await instance.get('/admin/posts');
    console.log(data);
    return {
      data,
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

export const getReportPosts = async () => {
  try {
    const { data } = await instance.get('/admin/reports/posts');
    return {
      data,
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
