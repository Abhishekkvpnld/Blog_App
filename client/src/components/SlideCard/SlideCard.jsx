import { useContext } from "react";
import "./slideCard.css";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SlideCard = ({ data }) => {

    const navigate = useNavigate();

    const { posts, isAuthenticated } = useContext(UserContext);

    const handleOpenSite = (data) => {
        if (!isAuthenticated) {
            toast.error("Please Login First 🔐🔐");
        } else {
            navigate(`/details/${data?._id}`)
        }
    }

    const shuffleArray = (array) => {
        return array.slice().sort(() => Math.random() - 0.6);
    };

    const shuffledArray = shuffleArray(posts);

    return (
        <div className="slide_section">
            <div className="slide_title">
                <h3>Weekly Highlights</h3>
            </div>

            <div className="slide_card">

                {shuffledArray.map((item) => (

                    <div className="slide_card_container" key={item._id} onClick={() => handleOpenSite(item)}>
                        <img src={item?.postImg?.url} alt="img" />

                        <div className="slide_card_content">
                            <h3>{item?.title}</h3>
                            <p>{item?.contentType}</p>
                            <p>{item?.content}</p>
                        </div>

                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default SlideCard;