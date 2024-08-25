
import { createContext, useState } from "react";

// Create a UserContext
export const UserContext = createContext({isAuthenticated:false});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <UserContext.Provider value={{ userData, setIsAuthenticated, isAuthenticated,setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

