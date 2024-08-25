import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import { Toaster } from "react-hot-toast";
import axios from 'axios';
import { BaseUrl } from './utils/baseUrl';
import { UserContext } from './context/userContext';


function App() {

  const { isAuthenticated, setIsAuthenticated, setUserData } = useContext(UserContext);

  useEffect(() => {
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

    fetchUserData();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/details/:id' element={<BlogDetails />} />
        </Routes>
        <Toaster position='top-right' />
      </Router>
    </>
  )
}

export default App
