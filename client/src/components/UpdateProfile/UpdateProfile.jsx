import "./updateProfile.css";
import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';



const UpdateProfile = () => {
    const navigate = useNavigate();
    // const { isAdminAuthenticated, setIsAdminAuthenticated } = useContext(context);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    const [docAvatar, setDocAvatar] = useState("");
    const [docAvatarPreview, setDocAvatarPreview] = useState("");



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

            const response = await axios.post(`${BaseUrl}/user/admin/addNew`, {      email, phone, }, { withCredentials: true });



            if (response?.data?.success) {
                toast.success(response?.data.message);
                navigate("/");
            }

        } catch (error) {
            console.log(error.message);
            toast.error(error?.response?.data?.message);
        }
    }



    return (
        <div className="profile_update_container">

            <h1 className="profile_update_title">UPDATE PROFILE</h1>

            <form className="profile_update_form" onSubmit={handleRegister} >

            <div className="add_post_inp_div" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <label htmlFor="docAvatar">
                        <img src={docAvatarPreview ? docAvatarPreview : "/userImg.png"} alt="post Img" width={"70px"} height={"70px"} style={{ border: "1px solid black", borderRadius: "50%", textAlign: "center" }} />
                    </label>
                    <input
                        className="add_post_inp"
                        type="file"
                        placeholder="Select post image..."
                        name="docAvatar"
                        id="docAvatar"
                        onChange={handleAvatar}
                    />
                </div>

                <div className='profile_update_div_category'>

                    <div className="profile_update_inp_div">
                        <label htmlFor="userName">User Name</label>
                        <input
                            className="profile_update_inp"
                            type="text"
                            placeholder="Enter User Name..."
                            name="userName"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="profile_update_inp_div">
                        <label htmlFor="role">Role</label>
                        <select className='profile_update_inp profile_update_section' name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} >
                            <option value="">Select</option>
                            <option value="TechBlogger">Tech Blogger</option>
                            <option value="TravelBlogger">Travel Blogger</option>
                            <option value="FoodBlogger">Food Blogger</option>
                            <option value="FashionBlogger">Fashion Blogger</option>
                        </select>
                    </div>

                </div>

                <div className='profile_update_div_category'>

                    <div className="profile_update_inp_div">
                        <label htmlFor="email">Email</label>
                        <input
                            className="profile_update_inp"
                            type="email"
                            placeholder="Enter Email..."
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="profile_update_inp_div">
                        <label htmlFor="phone">Phone</label>
                        <input
                            className="profile_update_inp"
                            type="number"
                            placeholder="Enter Phone Number..."
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                </div>


                <div className="button_div" style={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <button type="submit" className="profile_update_btn" >UPDATE</button>
                </div>

            </form>

        </div>
    )
}
export default UpdateProfile;