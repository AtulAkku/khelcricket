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
    <div className="carousel mx-5 m y-2 rounded shadow">
      <div class="carousel-indicators">
              {
                images.map((image, index) => (
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} class={(currentImageIndex === index) ? "active" : ''} aria-current="true" aria-label="Slide 1"></button>
                ))
              }
              {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
      {/* <button className="arrow prev px-2 shadow" onClick={goToPrevSlide}>&#10094;</button> */}
      <div className="slide slide-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      </div>
      {/* <button className="arrow next px-2 shadow" onClick={goToNextSlide}>&#10095;</button> */}
    </div>
  );
};

export default Carousel;
