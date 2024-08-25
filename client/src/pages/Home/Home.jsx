
import Footer from "../../components/Footer/Footer";
import GridContent from "../../components/GridContent/GridContent";
import ListArticle from "../../components/ListArticle/ListArticle";
import Navbar from "../../components/Navbar/Navbar.jsx";

import SlideCard from "../../components/SlideCard/SlideCard";
import "./home.css";

const Home = () => {


  return (

    <>
      <Navbar />
      {/* <Slide/> */}
      <GridContent />
      <ListArticle />
      <SlideCard />
      <Footer />
    </>

  )
}

export default Home;