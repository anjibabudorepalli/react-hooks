import React, { createContext, useContext, useState } from "react";

// 1. Create a context
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
