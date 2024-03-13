import React, { useEffect, useState } from 'react';

const Carousel = ({ images, interval = 5000 }) => {
  const texts = [
    "Cricket began as a children's game in England in the 16th century",
    "Ravi Shastri is the first cricketer to hit 6 sixes in an over",
    "Shoaib Akhtar bowled the fastest delivery in the history of cricket!",
    "MS Dhoni has never scored an ODI century outside of Asia",
    "South Africa's John Watkins is the oldest living Test cricketer"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    const newTextIndex = currentTextIndex === 0 ? texts.length - 1 : currentTextIndex - 1;
    setCurrentTextIndex(newTextIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    const newTextIndex = currentTextIndex === texts.length - 1 ? 0 : currentTextIndex + 1;
    setCurrentTextIndex(newTextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, interval);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, interval]);

  return (
    <div className="row align-items-center popins g-0" style={{minHeight:'330px'}}>
      <div className="col-12 col-lg-6">
        <div className="text-carousel text-end text-white fs-1 fw-bold px-5 my-5 ms-5">
          <div className="fs-4 text-decoration-underline">Cricket Facts</div>
          <p>{texts[currentTextIndex]}</p>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="carousel mx-5 my-2 rounded shadow">
          <div className="carousel-indicators">
            {images.map((image, index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={currentImageIndex === index ? 'active' : ''}
                aria-current="true"
                aria-label={`Slide ${index + 1}`}
                key={index}
              ></button>
            ))}
          </div>
          <div className="slide slide-container">
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
