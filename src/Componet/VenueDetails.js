import React, { useEffect, useState } from 'react';
import { FaLocationDot, FaGlassWater } from 'react-icons/fa6';
import { MdDescription, MdFreeCancellation, MdOutlineEventSeat } from "react-icons/md";
import { BsHighlights, BsShopWindow } from "react-icons/bs";
import { PiToilet } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";


const VenueDetails = ({ interval = 2000 }) => {
  const images = [
    '../img/location/mcc.png',
    '../img/location/mohan.png'
  ]
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
    <>
      <div className=" p-4 g-0 my-4 rounded row container m-auto">
        <div className='col' >
          <div className="carousel mx-5 m y-2 rounded shadow" style={{ maxWidth: "650px" }}>
            {/* <button className="arrow prev px-2 shadow" onClick={goToPrevSlide}>&#10094;</button> */}
            <div class="carousel-indicators">
              {
                images.map((image, index) => (
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} class={(currentImageIndex === index) ? "active" : ''} aria-current="true" aria-label="Slide 1"></button>
                ))
              }
              {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="slide slide-container">
              <img src={images[currentImageIndex]} alt='' />
            </div>
            {/* <button className="arrow next px-2 shadow" onClick={goToNextSlide}>&#10095;</button> */}
          </div>
        </div>
        <div className='col d-flex align-item-center flex-column justify-content-center p-2 text-white popins'>
          <div className='text-center h2 m-0 p-3'>N S Cricket Ground</div>
          <div className='text-center m-0 p-3 rounded'>
            <a href='https://www.google.com/maps/dir/28.6325464,77.4357733/G9Q3%2B9XF+Cricket+Ground,+Sector+97,+Noida,+Uttar+Pradesh+201303' className='text-white my' style={{ textDecoration: "none" }}><FaLocationDot /> Sector 97, Noida, Uttar Pradesh 201303</a>
            <p className='my-2'>Pricing: 3000 ₹ Onwards</p>
          </div>
          <form className='p-3'>
            <div className="form-group px-5">
              <label htmlFor="title">Select Date</label>
              <input type="date" className="form-control" id="dueDate" onChange={(e) => { /*setDueDate(e.target.value)*/ }} />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="button" className="btn mx-2 bg-nav px-5 fs-6 text-white border-light">Check availability!</button>
              <button type="button" className="btn mx-2 bg-nav px-5 fs-6 text-white border-light">Book Now!</button>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-white p-2 px-5'>
        <div className='container m-5 mx-auto px-5 popins'>
          <div className='px-5'>
            <h4 className=''><MdDescription /> DESCRIPTION</h4>
            <p className='p-3'> N S Cricket Ground is a State-of-the-art Box Cricket Ground big enough to Accommodate 6v6 Game, where we've created a haven for cricket enthusiasts of all ages and skill levels. Nestled in the heart of Noida, our cricket facility offers the perfect setting for a thrilling and action-packed cricket experience Whether you're a seasoned cricketer or just looking for a fun and engaging way to spend your time, our Box Cricket Ground has something for everyone.</p>
            <hr />
            <h4 className=''><BsHighlights /> HIGHLIGHTS</h4>
            <p className='p-3 d-flex flex-row flex-wrap p-2 m-2 fs-5 '>
              <div className='p-2 m-2'><FaGlassWater /> Drinking Water</div>
              <div className='p-2 m-2'><PiToilet /> Washroom</div>
              <div className='p-2 m-2'><LuParkingCircle /> Parking</div>
              <div className='p-2 m-2'><MdOutlineEventSeat /> Seating Area</div>
              <div className='p-2 m-2'><BsShopWindow /> Rental Equipment</div>
              <div className='p-2 m-2'><FaRunning/> Warmup Area</div>
            </p>
            <hr />
            <h4 className=''><MdFreeCancellation /> CANCELLATION POLICY</h4>
            <div className='p-3'>
            <h6 className='mt-3'>Online Payment</h6>
            <p>
              100% refund if the slot is cancelled more than 24 hours before the start time.<br/>
              50% refund if the slot is cancelled more than 12 hours before the start time.<br/>
              <br/>
              <ul>
                <li>3% of the booking amount will be charged as bank charge, in addition to the cancellation charge mentioned above.</li>
                <li>Incase of split payment bookings the refund charges will be calculated on the basis of the entire slot price and not the paid amount.</li>
                <li>Hudle reserves the right to change the cancellation policy without any prior notice.</li>
              </ul>
              </p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VenueDetails