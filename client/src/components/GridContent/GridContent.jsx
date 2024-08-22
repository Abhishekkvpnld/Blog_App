import "./gridContent.css";
import { blogData } from "../../contants/sampleData.js";

const GridContent = () => {
    return (

        <div>
            <h4 style={{ marginBottom: "0", paddingLeft: "30px" }}> Recommended Article</h4>
            <div className="grid_container">
                <div className="grid_first">
                    <img src={blogData[0].imageUrl} alt="img" />
                    <div className="blog_upload_data">
                        <span style={{ fontSize: "smaller", fontWeight: "600", color: "grey" }}><img src={blogData[1].imageUrl} alt="user" style={{ width: "15px", height: "15px", borderRadius: "50%" }} /> {blogData[0].postUploaderName}</span>
                        <hr style={{ border: "0", height: "1px", width: "150px", background: "black" }} />
                        <p>{blogData[0].date}</p>
                    </div>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere amet eos fuga eius perferendis, neque reiciendis sunt aperiam repudiandae alias!</h3>
                    <p>{blogData[0].content}</p>
                </div>

                <div className="grid_second">

                    <div className="second_card">
                        <img src={blogData[0].imageUrl} alt="img" />
                        <div>
                            <div className="second_blog_upload_data">
                                <div style={{ fontSize: "10px", fontWeight: "600", color: "grey" }}><img src={blogData[1].imageUrl} alt="user" style={{ width: "15px", height: "15px", borderRadius: "50%" }} /> {blogData[0].postUploaderName}</div>
                                <p>{blogData[0].date}</p>
                            </div>
                            <h3>Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias! Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias</h3>
                            <hr style={{ width: "100%", height: "0.5px" }} />
                        </div>
                    </div>

                    <div className="second_card">
                        <img src={blogData[0].imageUrl} alt="img" />
                        <div>
                            <div className="second_blog_upload_data">
                                <div style={{ fontSize: "10px", fontWeight: "600", color: "grey" }}><img src={blogData[1].imageUrl} alt="user" style={{ width: "15px", height: "15px", borderRadius: "50%" }} /> {blogData[0].postUploaderName}</div>
                                <p>{blogData[0].date}</p>
                            </div>
                            <h3>Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias! Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias</h3>
                            <hr style={{ width: "100%", height: "0.5px" }} />
                        </div>
                    </div>

                    <div className="second_card">
                        <img src={blogData[0].imageUrl} alt="img" />
                        <div>
                            <div className="second_blog_upload_data">
                                <div style={{ fontSize: "10px", fontWeight: "600", color: "grey" }}><img src={blogData[1].imageUrl} alt="user" style={{ width: "15px", height: "15px", borderRadius: "50%" }} /> {blogData[0].postUploaderName}</div>
                                <p>{blogData[0].date}</p>
                            </div>
                            <h3>Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias! Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias</h3>
                            <hr style={{ width: "100%", height: "0.5px" }} />
                        </div>
                    </div>

                    <div className="second_card">
                        <img src={blogData[0].imageUrl} alt="img" />
                        <div>
                            <div className="second_blog_upload_data">
                                <div style={{ fontSize: "10px", fontWeight: "600", color: "grey" }}><img src={blogData[1].imageUrl} alt="user" style={{ width: "15px", height: "15px", borderRadius: "50%" }} /> {blogData[0].postUploaderName}</div>
                                <p>{blogData[0].date}</p>
                            </div>
                            <h3>Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias! Lorem ipsum dolor, neque reiciendis sunt aperiam repudiandae alias</h3>
                            <hr style={{ width: "100%", height: "0.5px" }} />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default GridContent;