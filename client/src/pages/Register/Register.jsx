import axios from 'axios';
import { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import "./register.css";
import { BaseUrl } from '../../utils/baseUrl';
import Navbar from '../../components/Navbar/navbar';


const Register = () => {

  const navigate = useNavigate();


  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const handleAvatar = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("docAvatar", docAvatar);

      const response = await axios.post(`${BaseUrl}/user/register`, formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        navigate("/");
      }

    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message);
    }
  }


  return (
    <>
      <Navbar />

      <div className="signup_container">

        <h1 className="signup_title">SIGN UP</h1>

        <form className="signup_form" onSubmit={handleRegister} >

          <div className="signup_inp_div" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <label htmlFor="docAvatar">
              <img src={docAvatarPreview ? docAvatarPreview : "/userImg.png"} alt="doctor Img" width={"70px"} height={"70px"} style={{ border: "2px solid red", borderRadius: "50%", textAlign: "center" }} />
            </label>
            <input
              className="signup_inp"
              type="file"
              placeholder="Select Doctor image..."
              name="docAvatar"
              id="docAvatar"
              onChange={handleAvatar}
            />
          </div>

          <div className='signup_div_category'>

            <div className="signup_inp_div">
              <label htmlFor="userName">User Name</label>
              <input
                className="signup_inp"
                type="text"
                placeholder="Enter User Name..."
                name="userName"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="signup_inp_div">
              <label htmlFor="email">Email</label>
              <input
                className="signup_inp"
                type="email"
                placeholder="Enter Email..."
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

          </div>

          <div className='signup_div_category'>

            <div className="signup_inp_div">
              <label htmlFor="phone">Phone</label>
              <input
                className="signup_inp"
                type="number"
                placeholder="Enter Phone Number..."
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="signup_inp_div">
              <label htmlFor="role">Role</label>
              <select className='signup_inp signup_section' name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} >
                <option value="">Select</option>
                <option value="TechBlogger">Tech Blogger</option>
                <option value="TravelBlogger">Travel Blogger</option>
                <option value="FoodBlogger">Food Blogger</option>
                <option value="FashionBlogger">Fashion Blogger</option>
              </select>
            </div>

          </div>

          <div className='signup_div_category'>

            <div className="signup_inp_div">
              <label htmlFor="password">Password</label>
              <input
                className="signup_inp signup_password"
                type="password"
                placeholder="Enter Password..."
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="signup_inp_div">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="signup_inp"
                type="password"
                placeholder="Enter Confirm Password..."
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

          </div>

          <div className="button_div" style={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <button type="submit" className="signup_btn" >SIGNUP</button>
          </div>

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <p>Already registered?</p>
            <Link to={"/login"} style={{ textDecoration: "none", margin: "5px" }} className="signup_nav">Sign In</Link>
          </div>

        </form>

      </div>
    </>
  )
}

export default Register;