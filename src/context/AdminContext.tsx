import React, { createContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../config/firebase';

interface AdminContextType {
  user: User | null;
  isLoading: boolean;
}

export const AdminContext = createContext<AdminContextType>({ user: null, isLoading: true });

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AdminContext.Provider value={{ user, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};