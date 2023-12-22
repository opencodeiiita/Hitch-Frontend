'use client'
import { AuthProvider } from '@/contexts/AuthContext';

const AuthenticationProvider = ({ children }) => {
    return <AuthProvider></AuthProvider>;
  };

export default AuthenticationProvider;