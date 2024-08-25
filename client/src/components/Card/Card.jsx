import "./card.css";
import { RiDislikeLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { GrShare } from "react-icons/gr";


const Card = ({ data }) => {

  const randomThreeDigitNumber = Math.floor(Math.random() * 900) + 100;
  const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;

  return (
    <div className="card_container">
      <img src={data?.postImg?.url} alt="img" />
      <div className="profile_details">
        <img src="" alt="" />
        <p style={{ marginLeft: "5px", marginTop: "0", padding: "0" }}>update</p>
      </div>

      <div className="card_content">
        <h3>{data?.title}</h3>
        <p>{data?.contentType}</p>
        <p>{data?.content}</p>
      </div>

      <div className="post_action_div">
        <div className="icon_div">
          <div className="action_icon"> <FcLike /><span>{data?.like?.length}</span></div>
          <div className="action_icon"><FaRegCommentAlt /><span>{randomThreeDigitNumber}</span></div>
          <div className="action_icon"><IoMdShare /><span>{randomTwoDigitNumber}</span></div>
        </div>

        <div className="icon_link">
          <GrShare />
        </div>
      </div>

    </div>
  )
}

export default Card;