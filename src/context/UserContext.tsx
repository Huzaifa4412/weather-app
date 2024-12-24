// context/UserContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the types for the context value
interface UserContextType {
  user: { name: string; email: string } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{ name: string; email: string } | null>
  >;
}

// Create the Context with the defined type
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the Provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
