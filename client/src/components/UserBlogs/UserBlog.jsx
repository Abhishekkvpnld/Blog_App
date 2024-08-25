import axios from "axios";
import "./userBlog.css";
import { MdDeleteOutline } from "react-icons/md";
import { BaseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";
import moment from "moment";


const UserBlog = ({ data }) => {

  const postId = data?._id;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${BaseUrl}/post/delete-post/${postId}`, { withCredentials: true });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div className="card_container">
      <img src={data?.postImg.url} alt="img" />

      <div className="card_content">
        <h3>{data?.title}</h3>
        <p>{data?.contentType}</p>
        <p>{data?.content}</p>
      </div>

      <div className="icon_link">
        <div style={{ fontWeight: "500" }}>{moment(data?.createdAt).fromNow()}</div>
        <MdDeleteOutline onClick={handleDelete} className="delete_icon" title="delete" />
      </div>
    </div>

  )
}

export default UserBlog;