import Footer from "../../components/Footer/Footer";
import GridContent from "../../components/GridContent/GridContent";
import Navbar from "../../components/Navbar/navbar";
import Slide from "../../components/Slide/Slide";
import "./home.css";

const Home = () => {
  return (

    <>
      <Navbar />
      {/* <Slide/> */}
      <GridContent/>
      <Footer />
    </>

  )
}

export default Home;