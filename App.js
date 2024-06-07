import React from 'react';
import MainStackNavigator from './navigation/MainStackNavigator';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <MainStackNavigator />
    </AuthProvider>
  );
}
