import React, { useEffect, useState } from 'react';

const Carousel = ({ images, interval = 2000}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, interval);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="carousel m x- 3 m y-2 r ounded">
      <button className="arrow prev px-2 shadow" onClick={goToPrevSlide}>&#10094;</button>
      <div className="slide slide-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      </div>
      <button className="arrow next px-2 shadow" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
