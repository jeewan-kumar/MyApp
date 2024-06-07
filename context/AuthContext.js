import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };
    loadUserData();
  }, []);

  const login = async (email, password) => {
    if (email === 'user@example.com' && password === 'password') {
      const user = { email };
      setUser(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const register = async (fullName, email, password) => {
    if (email && password && fullName) {
      const user = { fullName, email };
      setUser(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
