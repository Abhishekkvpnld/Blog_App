import { useState } from "react";
import AddPostCard from "../../components/AddPostCard/AddPostCard";
import Navbar from "../../components/Navbar/navbar";
import "./profile.css";
import { IoAddSharp } from "react-icons/io5";
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";
import Card from "../../components/Card/Card";
import UserBlog from "../../components/UserBlogs/UserBlog";


const Profile = () => {

  const [addPost, setAddPost] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [showBlog, setShowBlog] = useState(true);

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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" alt="Profile" />
            </div>

            <div className="user_details_div">
              <h4>User Name</h4>
              <p>Role/Occupation: travel blogger</p>
              <p>Email:user@gmail.com</p>
              <p>Phone:9568548526</p>

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
            <AddPostCard />
          </div>)
        }

        {
          editProfile && (<div className="upload_blog_section">
            <UpdateProfile />
          </div>)
        }

        {
          !editProfile && !addPost && (<div className="uploaded_blog_details">  

           <div>
           <UserBlog/>
           </div>
            
           <div>
           <UserBlog/>
           </div>
            
           <div>
           <UserBlog/>
           </div>
            
           <div>
           <UserBlog/>
           </div>
            
           <div>
           <UserBlog/>
           </div>
            
           <div>
           <UserBlog/>
           </div>
            
           <div>
           <UserBlog/>
           </div>
            
           <div>
           <UserBlog/>
           </div>

          </div>)
        }
      </div>
    </>
  )
}

export default Profile;