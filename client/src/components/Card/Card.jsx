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


const Card = ({ data }) => {

  const { isAuthenticated, userData } = useContext(UserContext);

  const navigate = useNavigate();

  const handleOpenSite = () => {
    if (isAuthenticated) {
      navigate(`/details/${data?._id}`)
    } else {
      toast.error("Please Login First🔐🔐");
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
            {data?.like.includes(userData?._id) ? < FcLike /> : <RiDislikeLine />}
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