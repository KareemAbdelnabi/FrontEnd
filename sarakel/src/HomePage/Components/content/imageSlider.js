import { useState } from "react";
import "./imageSlider.css"

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="image-slider">
        {currentIndex !== 0 && ( // Render previous button if currentIndex is not 0
          <button className="prev-button" onClick={goToPrevious}>
            ❮
          </button>
        )}
        <img
          src={slides[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="post-image"
        />
        {currentIndex !== slides.length - 1 && ( // Render next button if currentIndex is not the last index
          <button className="next-button" onClick={goToNext}>
            ❯
          </button>
        )}
      </div>
    );
  };
  
  export default ImageSlider;
  
  
