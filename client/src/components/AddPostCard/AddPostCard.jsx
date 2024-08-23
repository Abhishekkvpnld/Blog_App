import "./addPostCard.css";
import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BaseUrl } from "../../utils/baseUrl";



const AddPostCard = () => {
    const navigate = useNavigate();
    // const { isAdminAuthenticated } = useContext(context);

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [content, setContent] = useState("");
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

        // try {

        //     const formData = new FormData();

        //     formData.append("title",title);
        //     formData.append("content",content);
        //     formData.append("type",type);
        //     formData.append("docAvatar", docAvatar);

        //     const response = await axios.post(`${BaseUrl}/user/post/addNew`, formData,
        //         {
        //             withCredentials: true,
        //             headers: {
        //                 "Content-Type": "multipart/form-data"
        //             }
        //         }
        //     );

        //     if (response?.data?.success) {
        //         toast.success(response?.data?.message);
        //         navigate("/profile");
        //     }

        // } catch (error) {
        //     console.log(error.message);
        //     toast.error(error?.response?.data?.message);
        // }
    }



    return (
        <div className="add_post_container">

            <h1 className="add_post_title">ADD NEW BLOG</h1>

            <form className="add_post_form" onSubmit={handleRegister} >


                <div className="add_post_inp_div" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <label htmlFor="docAvatar">
                        <img src={docAvatarPreview ? docAvatarPreview : "/addImg.png"} alt="post Img" width={"70px"} height={"70px"} style={{ border: "1px solid black", borderRadius: "50%", textAlign: "center" }} />
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


                <div className='add_post_div_category'>

                    <div className="add_post_inp_div">
                        <label htmlFor="title">Title</label>
                        <input
                            className="add_post_inp add_post_title"
                            type="text"
                            placeholder="Enter Title..."
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="add_post_inp_div">
                        <label htmlFor="type">Blog Type</label>
                        <select className='add_post_inp' name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} >
                            <option value="">Select</option>
                            <option value="Technology">Technology</option>
                            <option value="Travel">Travel</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Food">Food</option>
                        </select>
                    </div>

                </div>

                <div className="add_post_textArea">
                    <label htmlFor="content">Content</label>
                    <textarea
                        placeholder="Enter content..."
                        name="content"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>



                <div className="button_div" style={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <button type="submit" className="add_post_btn" >ADD NEW POST</button>
                </div>

            </form>

        </div>
    )
}
export default AddPostCard