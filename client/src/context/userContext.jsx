
import axios from "axios";
import { createContext, useState } from "react";
import { BaseUrl } from "../utils/baseUrl";

// Create a UserContext
export const UserContext = createContext({ isAuthenticated: false });

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchData, setSearchData] = useState([]);


  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/user/userData`, { withCredentials: true });

      if (response?.data?.success) {
        setIsAuthenticated(true);
        setUserData(response?.data?.data);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ userData, fetchUserData, setIsAuthenticated, isAuthenticated, setUserData, setPosts, posts, search, setSearch, searchData, setSearchData }}>
      {children}
    </UserContext.Provider>
  );
};

