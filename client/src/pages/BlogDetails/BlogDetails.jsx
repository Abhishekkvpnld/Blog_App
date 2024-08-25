import Navbar from "../../components/Navbar/navbar";
import "./blogDetails.css"
import Footer from "../../components/Footer/Footer";
import { FcLike } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { BaseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";


const BlogDetails = () => {

  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/post/getPost/${id}`, { withCredentials: true });
        if (response?.data?.success) {
          setPost(response?.data?.data);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="blog_container">

        <div className="blog_details_div">

          <div className="blog_details_img">
            <img src={post?.postImg?.url} alt="Img" />
          </div>

          <div className="blog_uploader_data">
            <div className="user_data">
              <img src={post?.uploaderData?.docAvatar?.url} alt="img" />
              <p>{post?.uploaderData?.userName}</p>
            </div>

            <div className="blog_icons">
              <div className="blog_action_icon"> <FcLike className="icon" /><span>{post?.like?.length}</span></div>
              <div className="blog_action_icon"><FaRegCommentAlt className="icon" />{post?.comment}<span></span></div>
              <div className="blog_action_icon"><IoMdShare className="icon" /><span>{post?.share}</span></div>
              <p>{moment(post?.createdAt).fromNow()}</p>
            </div>
          </div>

          <div>
            <p>{post?.title}</p>
          </div>

          <div className="blog_content">
            <p>{post?.content}</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogDetails;