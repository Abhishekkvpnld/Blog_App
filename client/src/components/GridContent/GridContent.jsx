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
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere amet eos fuga eius perferendis, neque reiciendis sunt aperiam repudiandae alias!</h3>
                    <p className="grid_content_description">Lorem,lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam amet voluptate ea qui reiciendis eveniet harum id consectetur molestias maiores rem, illo eum repellat deleniti. Hic facilis dolor pariatur cupiditate quia vero voluptatem velit porro asperiores placeat ad nulla quis magni atque corporis deleniti, nisi suscipit ea corrupti nam sit! Voluptatum laboriosam dolorem, quas omnis unde voluptatem, distinctio laborum voluptas animi sint quidem, odit aliquid eligendi veritatis hic! Ducimus sunt dolores laboriosam sapiente quos voluptatem voluptate non ut aspernatur. Aspernatur earum incidunt rerum, vero totam aliquid cum nisi deleniti similique quidem iure quod asperiores ex. Neque facilis commodi doloribus!</p>
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