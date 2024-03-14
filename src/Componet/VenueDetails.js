import React, { useEffect, useState } from 'react';
import { FaLocationDot, FaGlassWater } from 'react-icons/fa6';
import { MdDescription, MdFreeCancellation, MdOutlineEventSeat } from "react-icons/md";
import { BsHighlights, BsShopWindow } from "react-icons/bs";
import { PiToilet } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';
import { toast } from 'react-toastify';
import PaymentConfirm from './partials/PaymentConfirm';


const VenueDetails = ({ interval = 2000 }) => {
  const locationState = useLocation();
  const { venueId, description, link, location, pricing, title, images } = locationState.state.item;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const today = new Date().toISOString().split('T')[0];
  const { user, isAuth } = useAuth();
  const [bookingDate, setBookingDate] = useState(today);
  const [isAvail, setIsAvail] = useState(false);
  const navigate = useNavigate();
  const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
  
  const handleCheckAvail = () => {
    if (isAuth) {
      
      const selectedDate = new Date(bookingDate);
      const existingBooking = storedBookings.find((booking) => {
        const storedDate = new Date(booking.date);
        return ((storedDate.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]) && (venueId === booking.venueId));
      })
      if (existingBooking) {
        toast.error('Venue not available for the specific date!', {
          position: 'top-right',
        });
        return;
      }
      else {
        toast.success('Hurray You can book now!', {
          position: 'top-center',
        });
        setIsAvail(true);
      }
    } else {
      document.getElementById("logInBtn").click();
      toast.warning('Please Login to continue!', {
        position: 'top-center',
      });
    }
  }

  const handleDateChange = (date)=>{
    setBookingDate(date);
    setIsAvail(false);
  }
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
      <PaymentConfirm 
        storedBookings = {storedBookings}
        userBooking = {locationState.state.item}
        bookingDate = {bookingDate}
        setIsAvail = {setIsAvail}
      />
      <div className=" p-4 g-0 my-4 rounded row container m-auto">
        <div className='col-12 col-lg-6' >
          <div className="carousel mx-5 m y-2 rounded shadow" style={{ maxWidth: "650px" }}>
            <div className="carousel-indicators">
              {
                images.map((image, index) => (
                  <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={(currentImageIndex === index) ? "active" : ''} aria-current="true" aria-label="Slide 1"></button>
                ))
              }
            </div>
            <div className="slide slide-container">
              <img src={`img/CricketStadium/${images[currentImageIndex]}`} alt='' />
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 d-flex align-item-center flex-column justify-content-center p-2 text-white popins'>
          <div className='text-center h2 m-0 p-3'>{title}</div>
          <div className='text-center m-0 p-3 rounded'>
            <a href={link} className='text-white my' style={{ textDecoration: "none" }}><FaLocationDot /> {location}</a>
            <p className='my-2'>Pricing: ₹ {pricing} Onwards</p>
          </div>
          <form className='p-2 px-4'>
            <div className="form-group px-5">
              <label htmlFor="title" className="ps-2">Select Date</label>
              <input type="date" className="form-control" id="bookingDate" min={today} value={bookingDate} onChange={(e) => { handleDateChange(e.target.value) }} />
            </div>
            <div className="d-flex justify-content-center mt-4">
              {
                (isAvail)?
                <button type="button" className="btn mx-2 px-5 fs-6 btn-outline-light" data-bs-toggle="offcanvas" href="#paymentOffCanvas" role="button" aria-controls="offcanvasExample">Book Now!</button> :
                <button type="button" className="btn mx-2 px-5 fs-6 btn-outline-light" onClick={handleCheckAvail}>Check availability!</button>
              }
            </div>
          </form>
        </div>
      </div>
      <div className='bg-white p-2 px-5'>
        <div className='container m-5 mx-auto px-5 popins'>
          <div className='px-5'>
            <h4 className=''><MdDescription /> DESCRIPTION</h4>
            <p className='p-3'>{description}</p>
            <hr />
            <h4 className=''><BsHighlights /> HIGHLIGHTS</h4>
            <div className='p-3 d-flex flex-row flex-wrap p-2 m-2 fs-5 '>
              <div className='p-2 m-2'><FaGlassWater /> Drinking Water</div>
              <div className='p-2 m-2'><PiToilet /> Washroom</div>
              <div className='p-2 m-2'><LuParkingCircle /> Parking</div>
              <div className='p-2 m-2'><MdOutlineEventSeat /> Seating Area</div>
              <div className='p-2 m-2'><BsShopWindow /> Rental Equipment</div>
              <div className='p-2 m-2'><FaRunning /> Warmup Area</div>
            </div>
            <hr />
            <h4 className=''><MdFreeCancellation /> CANCELLATION POLICY</h4>
            <div className='p-3'>
              <h6 className='mt-3'>Online Payment</h6>
              <div>
                100% refund if the slot is cancelled more than 24 hours before the start time.<br />
                50% refund if the slot is cancelled more than 12 hours before the start time.<br />
                <br />
                <ul>
                  <li>3% of the booking amount will be charged as bank charge, in addition to the cancellation charge mentioned above.</li>
                  <li>Incase of split payment bookings the refund charges will be calculated on the basis of the entire slot price and not the paid amount.</li>
                  <li>Hudle reserves the right to change the cancellation policy without any prior notice.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VenueDetails