import { useMutation } from 'react-query';
import axios from 'axios';

const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/user/register', userData);
      return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

const loginUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', userData);
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