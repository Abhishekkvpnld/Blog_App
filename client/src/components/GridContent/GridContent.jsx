import "./gridContent.css";
import { blogData } from "../../contants/sampleData.js";

const GridContent = () => {
    return (

        <div>
            <h3 style={{ marginBottom: "0", paddingLeft: "15px" }}> Articles </h3>
            <div className="grid_container">
                <div className="grid_first">
                    <img src={blogData[0].imageUrl} alt="img" />
                    <div className="blog_upload_data">
                        <span style={{ fontSize: "smaller", fontWeight: "600", color: "grey" }}><img src={blogData[1].imageUrl} alt="user" style={{ width: "15px", height: "15px", borderRadius: "50%" }} /> {blogData[0].postUploaderName}</span>
                        <hr style={{ border: "0", height: "1px", width: "150px", background: "black" }} />
                        <p>{blogData[0].date}</p>
                    </div>
                    <h3>{blogData[0].title}</h3>
                    <p className="grid_content_description">{blogData[0].content}</p>
                </div>

                <div className="grid_second">

                    {
                        blogData.map((item) => (
                            <div className="second_card" key={item.id}>
                                <img src={item.imageUrl} alt="img" />
                                <div>
                                    <div className="second_blog_upload_data">
                                        <div style={{ fontSize: "10px", fontWeight: "600", color: "grey" }}><img src={item.imageUrl} alt="user" style={{ width: "15px", height: "15px", borderRadius: "50%" }} /> {item.postUploaderName}</div>
                                        <p>{item.date}</p>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <hr style={{ width: "100%", height: "0.5px" }} />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

    )
}

export default GridContent;