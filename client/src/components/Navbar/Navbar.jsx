import { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { BaseUrl } from "../../utils/baseUrl";
import SideBar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import Search from "../SearchBar/Search";
import { UserContext } from "../../context/userContext";


const Navbar = () => {

  const navigate = useNavigate();

  const [showSearchbar, setShowSearchbar] = useState(false);
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated, userData, setSearch, search, setSearchData } = useContext(UserContext);


  const handleLogOut = async () => {
    try {

      const response = await axios.get(`${BaseUrl}/user/logout`, { withCredentials: true });

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        setIsAuthenticated(false);
        navigate("/login")
      }

    } catch (error) {
      console.log(error.message);
      toast.error(error.respose.data.message);
    }
  };

  const handleProfile = () => {
    if (!isAuthenticated) {
      toast.error("Login First🔐🔐");
    } else {
      navigate("/profile")
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${BaseUrl}/post/search`, { query: search }, { withCredentials: true });
      if (response?.data?.success) {
        setShowSearchbar(false);
        setSearchData(response?.data?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <nav className="nav_container">

      <div className="logo">
        <span> BlogSpot</span>
        <span><img src={userData?.docAvatar?.url || "./profile.jpg"} alt="profile" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></span>
      </div>

      {
        show && (
          <div>
            <SideBar show={show} setShow={setShow} handleLogOut={handleLogOut} setShowSearchbar={setShowSearchbar} />
          </div>
        )
      }

      <div className={'navLinks'}>

        <div className="links">

          <Link style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: "none" }}>
            <IoIosSearch style={{ width: "25px", height: "25px" }} onClick={handleSearch} />
            <input value={search} type="text" onChange={(e) => setSearch(e.target.value)} name="search-Inp" id="search-inp" className="search-inp" placeholder="Search..." />
          </Link>

          <Link className="link" to={"/"}>Home</Link>
          <div style={{ cursor: "pointer" }} className="link" onClick={handleProfile}>Profile</div>
          <Link className="link" to={"/"}>About Us</Link>

        </div>

        {isAuthenticated ?
          (<button className="nav_btn" onClick={handleLogOut}>LOGOUT</button>) :
          (<button className="nav_btn" onClick={() => navigate("/login")}>LOGIN</button>)
        }

      </div>
      <GiHamburgerMenu className="menu_icon" width={"65px"} style={{ marginRight: "40px" }} onClick={() => setShow(!show)} />

      {
        showSearchbar && (
          <Search setShowSearchbar={setShowSearchbar} searchValue={search} setSearchValue={setSearch} handleSearch={handleSearch} />
        )
      }
    </nav>
  )
}

export default Navbar;