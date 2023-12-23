'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if localStorage is available (client-side)
    const storedToken = localStorage.getItem('token');
    setAuthenticated(!!storedToken);
  }, []);

  const login = () => {
    // Perform login logic if needed
    setAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic if needed
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
