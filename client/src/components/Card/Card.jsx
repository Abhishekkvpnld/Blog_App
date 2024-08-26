import "./card.css";
import { RiDislikeLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { GrShare } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";


const Card = ({ data, fetchPosts }) => {

  const { isAuthenticated, userData } = useContext(UserContext);

  const navigate = useNavigate();

  const handleOpenSite = () => {
    if (isAuthenticated) {
      navigate(`/details/${data?._id}`)
    } else {
      toast.error("Please Login First🔐🔐");
    }
  };

  const handleLike = async (id) => {
    try {

      const response = await axios.put(`${BaseUrl}/post/like/${id}`, {}, { withCredentials: true });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        fetchPosts();
      }

    } catch (error) {
      toast.error(error?.response?.data?.message)
    }

  }


  return (
    <div className="card_container">

      <img src={data?.postImg?.url} alt="img" />

      <div className="card_profile_details">

        <div>
          <p>{moment(data?.createdAt).fromNow()}</p>
        </div>
        <p>{data?.userData?.userName}</p>

      </div>

      <div className="card_content">
        <h3>{data?.title}</h3>
        <p>{data?.contentType}</p>
        <p>{data?.content}</p>
      </div>

      <div className="post_action_div">
        <div className="icon_div">
          <div className="action_icon">
            <div onClick={() => handleLike(data?._id)} >
              {data?.like.includes(userData?._id) ? < FcLike /> : <RiDislikeLine />}
            </div>
            <span>{data?.like?.length}</span></div>
          <div className="action_icon"><FaRegCommentAlt /><span>{data?.comment}</span></div>
          <div className="action_icon"><IoMdShare /><span>{data?.share}</span></div>
        </div>

        <div className="icon_link" onClick={handleOpenSite}>
          <GrShare />
        </div>
      </div>

    </div>
  )
}

export default Card;