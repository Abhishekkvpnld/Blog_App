import { useContext, useEffect, useState } from 'react';
import "./sidebar.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FcBusinessContact } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { UserContext } from '../../context/userContext';
import { AiOutlineLogin } from "react-icons/ai";



const SideBar = ({ show, setShow, handleLogOut, setShowSearchbar }) => {

    const navigate = useNavigate();

    const { isAuthenticated } = useContext(UserContext);


    const handleGoHome = () => {
        navigate("/");
        setShow(false);
    };

    const handleSearch = () => {
        setShowSearchbar(true);
        setShow(false);
    };


    const handleProfile = () => {
        if (!isAuthenticated) {
            toast.error("Please Login First❌")
        } else {
            navigate("/profile")
        }
    }


    return (
        <>
            <nav
                style={{ position: "absolute", top: "0", left: "0", width: "100px", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "red" }}
            >
                <div className="sidebar_links">
                    <h1 >MENU</h1>
                    <IoHomeOutline title='Home' className='sidebar_icon' onClick={handleGoHome} />

                    <FcSearch title='Search' className='sidebar_icon' onClick={handleSearch} />
                    <FcBusinessContact title='Profile' className='sidebar_icon' onClick={handleProfile} />
                    <FcAbout title='About' className='sidebar_icon' />
                    {isAuthenticated ? (<IoIosLogOut title='Logout' className='sidebar_icon-logout ' onClick={handleLogOut} />) : (
                        <AiOutlineLogin title='Login' className='sidebar_icon' onClick={() => navigate("/login")} />)}
                </div>

            </nav>
        </>

    )
}

export default SideBar;