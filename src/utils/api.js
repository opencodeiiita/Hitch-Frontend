import { useMutation } from 'react-query';
import axios from 'axios';

const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/register`, userData);
      return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/login`, userData);
      return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const useRegisterUser = () => {
  return useMutation(registerUser);
};

export const useLoginUser = () => {
    return useMutation(loginUser);
};