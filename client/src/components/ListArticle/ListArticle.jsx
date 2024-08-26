import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./listArticle.css";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";
import { UserContext } from "../../context/userContext";
import { blogType } from "../../contants/blogs";


const ListArticle = () => {

  const { setPosts, posts, search, setSearch, searchData, setSearchData } = useContext(UserContext);


  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/post/allPosts`, { withCredentials: true });
      if (response?.data?.success) {
        setPosts(response?.data?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);


  const handleSearch = async (q) => {
    try {
      if (!q) {
        const response = await axios.post(`${BaseUrl}/post/search`, { query: search }, { withCredentials: true });
        if (response?.data?.success) {
          setSearchData(response?.data?.data);
        }
      } else {
        const response = await axios.post(`${BaseUrl}/post/search`, { query: q }, { withCredentials: true });
        if (response?.data?.success) {
          setSearchData(response?.data?.data);
        }
      }

    } catch (error) {
      toast.error(error?.response?.data?.message)
    }

  }

  return (
    <div className="list_container">
      <div className="list_title_div">
        <h3>Latest Articles</h3>

        <div className="list_title">
          {
            blogType.map((type, index) => (
              <div className="title_search" key={index} onClick={() => handleSearch(type.value)}>
                {
                  type.value
                }
              </div>
            ))
          }

          <div className="search_div">
            <CiSearch className="search-icon" onClick={handleSearch} />
            <input type="text" name="search" id="search" className="search_input" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="list_div">
        {searchData.length > 0 ? searchData?.map((post, index) => (
          <div key={index}><Card data={post} fetchPosts={fetchPosts} /></div>
        )) :
          posts?.map((post, index) => (
            <div key={index}><Card data={post} fetchPosts={fetchPosts}/></div>
          ))
        }
      </div>

    </div>
  )
}

export default ListArticle;