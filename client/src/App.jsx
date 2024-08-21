import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import AddPost from './pages/AddPost/AddPost';
import {Toaster} from "react-hot-toast";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='addPost' element={<AddPost/>}/>
          <Route path='/details' element={<BlogDetails />} />
        </Routes>
        <Toaster position='top-right'/>
      </Router>
    </>
  )
}

export default App
