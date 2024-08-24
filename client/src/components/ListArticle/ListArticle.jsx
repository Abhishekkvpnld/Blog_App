import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./listArticle.css";
import { CiSearch } from "react-icons/ci";


const ListArticle = () => {
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
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
        <Link style={{textDecoration:"none"}} to={"/details"}><Card/></Link>
      </div>

    </div>
  )
}

export default ListArticle;