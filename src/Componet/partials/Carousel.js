import React, { useEffect, useState } from 'react';

const Carousel = ({ images, interval = 2000 }) => {
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
    <div className="row">
      <div className="col-12 col-lg-6">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="carousel mx-5 m y-2 rounded shadow">
          <div className="carousel-indicators">
            {
              images.map((image, index) => (
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={(currentImageIndex === index) ? "active" : ''} aria-current="true" aria-label="Slide 1"></button>
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
      </div>
    </div>
  );
};

export default Carousel;
