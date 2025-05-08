// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

const generateRandomId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 10; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Just for demo: if logged in, generate ID
    if (isLoggedIn && !userId) {
      setUserId(generateRandomId());
    }
  }, [isLoggedIn, userId]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userId }}>
      {children}
    </AuthContext.Provider>
  );
};
