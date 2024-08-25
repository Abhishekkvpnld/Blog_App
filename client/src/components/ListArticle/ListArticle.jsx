import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./listArticle.css";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";


const ListArticle = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/post/user-posts`, { withCredentials: true });
        if (response?.data?.success) {
          setPosts(response?.data?.data);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="list_container">
      <div className="list_title_div">
        <h3>Latest Articles</h3>

        <div className="list_title">
          <div className="title_search">
            Technology
          </div>

          <div className="title_search">
            Food
          </div>

          <div className="title_search">
            Travel
          </div>

          <div className="title_search">
            Fashion
          </div>

          <div className="search_div">
            <CiSearch className="search-icon" />
            <input type="text" name="search" id="search" className="search_input" placeholder="Search..." />
          </div>
        </div>
      </div>

      <div className="list_div">
        {
          posts?.map((post, index) => (
            <Link key={index} style={{ textDecoration: "none" }} to={"/details"}><Card data={post} /></Link>
          ))
        }

      </div>

    </div>
  )
}

export default ListArticle;