import { useContext, useEffect, useState } from "react";
import AddPostCard from "../../components/AddPostCard/AddPostCard";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./profile.css";
import { IoAddSharp } from "react-icons/io5";
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";
import UserBlog from "../../components/UserBlogs/UserBlog";
import { UserContext } from "../../context/userContext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { BaseUrl } from "../../utils/baseUrl";


const Profile = () => {

  const { isAuthenticated, userData } = useContext(UserContext);


  const [addPost, setAddPost] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [showBlog, setShowBlog] = useState(true);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/post/user-posts`, { withCredentials: true });
        if (response?.data?.success) {
          setPosts(response?.data?.data);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }

    fetchPosts();
  }, []);
  

  const handleAddPost = () => {
    setShowBlog(false);
    setAddPost((prev) => !prev);
    setEditProfile(false);
  }

  const handleUpdateProfile = () => {
    setShowBlog(false);
    setAddPost(false);
    setEditProfile((prev) => !prev);
  }


  return (
    <>
      <Navbar />
      <div className="profile_container">

        <div className="profile_details_section">
          <div className="profile_card">

            <div className="user_img_div">
              <img src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" alt="Profile" />
            </div>

            <div className="user_details_div">
              <h4>{userData?.userName}</h4>
              <p>Role/Occupation: <span style={{ marginLeft: "3px", color: "red" }}>{userData?.role}</span></p>
              <p>Email:<span style={{ marginLeft: "3px", color: "red" }}>{userData?.email}</span></p>
              <p>Phone:<span style={{ marginLeft: "3px", color: "red" }}>{userData?.phone}</span></p>

              <div className="edit_btn_div">
                <button onClick={handleUpdateProfile}>Edit</button>
                <button onClick={handleAddPost}>Add Post</button>
              </div>
            </div>

          </div>

          <div className="upload_btn">
            <div className="upload_div">
              <h3>Upload Blog</h3>
              <div className="add_post_icon" onClick={handleAddPost}>
                <IoAddSharp />
              </div>
            </div>
          </div>

        </div>

        {
          addPost && (<div className="upload_blog_section">
            <AddPostCard setAddPost={setAddPost} />
          </div>)
        }

        {
          editProfile && (<div className="upload_blog_section">
            <UpdateProfile />
          </div>)
        }

        {
          !editProfile && !addPost && (<div className="uploaded_blog_details">

            {
              posts?.map((post, index) => (
                <div key={index}>
                  <UserBlog data={post} />
                </div>
              ))
            }

          </div>)
        }
      </div>
    </>
  )
}

export default Profile;