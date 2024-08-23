import Navbar from "../../components/Navbar/navbar";
import "./profile.css";

const Profile = () => {
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
                <button>Edit</button>
              </div>
            </div>

          </div>

          <div className="upload_btn">

          </div>

        </div>

        {/* <div className="upload_blog_section">

        </div>

        <div className="uploaded_blog_details">

        </div> */}

      </div>
    </>
  )
}

export default Profile;