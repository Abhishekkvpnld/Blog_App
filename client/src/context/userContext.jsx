
import { createContext, useState } from "react";

// Create a UserContext
export const UserContext = createContext({ isAuthenticated: false });

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchData, setSearchData] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setIsAuthenticated, isAuthenticated, setUserData, setPosts, posts, search, setSearch, searchData, setSearchData }}>
      {children}
    </UserContext.Provider>
  );
};

