import { useMutation,useQuery } from 'react-query';
import axios from 'axios';

const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`, userData);
      return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, userData);
      return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

const createWorkspace = async (data) => {
  const token=localStorage.getItem('token');
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/workspace/create`, 
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        token: token
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('Unknown error occurred');
      }
  }
};

const editWorkspace = async (data) => {
  const token=localStorage.getItem('token');
  console.log(data);
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/workspace/update/${data.id}`, 
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        token: token
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('Unknown error occurred');
      }
  }
};

const getWorkspaces = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/workspace/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
        token: token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.error || 'Unknown error occurred');
  }
};

const deleteWorkspace = async (data) => {
  const token = localStorage.getItem('token');
  console.log(data);
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/workspace/delete/${data.workspaceData.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        token: token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.error || 'Unknown error occurred');
  }
};

export const useDeleteWorkspaces = () => {
  return useMutation(deleteWorkspace);
};

export const useEditWorkspace = () => {
  return useMutation(editWorkspace);
};

export const useGetWorkspaces = () => {
  return useMutation(getWorkspaces);
};

export const useRegisterUser = () => {
  return useMutation(registerUser);
};

export const useLoginUser = () => {
    return useMutation(loginUser);
};

export const useCreateWorkspace = () => {
  return useMutation(createWorkspace);
};