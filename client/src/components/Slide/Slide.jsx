import { useState } from "react";
import "./slide.css";

const Slide = ({ blog }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blog.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + blog.length) % blog.length
      );
    };
  
    return (
      <div className="carousel">
        <button onClick={prevSlide} className="carousel__button carousel__button--left">
          &#10094;
        </button>
        <div
          className="carousel__image"
          style={{ backgroundImage: `url(${blog[currentIndex]})` }}
        ></div>
        <button onClick={nextSlide} className="carousel__button carousel__button--right">
          &#10095;
        </button>
      </div>
    );
  };
  

export default Slide;
