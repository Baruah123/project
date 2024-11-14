import React, { createContext, useContext, useState, useEffect } from 'react';
import { hashPassword, verifyPassword } from '../utils/auth';

interface User {
  name: string;
  email: string;
  mobile: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (identifier: string, password: string) => boolean;
  signup: (userData: Omit<User, 'id'>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const signup = async (userData: Omit<User, 'id'>) => {
    const hashedPassword = await hashPassword(userData.password);
    const newUser = { ...userData, password: hashedPassword };
    localStorage.setItem('users', JSON.stringify([...(JSON.parse(localStorage.getItem('users') || '[]')), newUser]));
  };

  const login = async (identifier: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === identifier || u.mobile === identifier);
    
    if (user && await verifyPassword(password, user.password)) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};