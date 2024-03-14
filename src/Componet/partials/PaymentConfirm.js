import React, { useState } from 'react'
import Lottie from 'react-lottie';
import Card from '../animations/card.json';
import PaymentSuccessfull from './PaymentSuccessfull';
import { useAuth } from '../../Utils/AuthContext';
const PaymentConfirm = (props) => {
  console.log(props);
  const storedBookings = props.storedBookings;
  const {user} = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState(false);
  const price = parseInt(props.userBooking.pricing)
  let gst = (price * 0.18)
  let total = (price + gst)
  const handleCloseModal = () => {
    setShowModal(false);
  }
  const handleCancel = () => {
    document.getElementById('closePyament').click();
  }
  const handleConfirm = () => {
    const newBooking = {
      userName: user.name,
      userEmail: user.email,
      userPhone : user.phoneNo,
      bookingId: Date.now(),
      venueId: props.userBooking.venueId,
      venueName: props.userBooking.title,
      location: props.userBooking.location,
      link: props.userBooking.link,
      date: props.bookingDate,
      image : props.userBooking.images[0]
    }
    setBookingData(newBooking);
    const updatedBookings = [...storedBookings, newBooking];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    document.getElementById('closePyament').click();
    setShowModal(true)
    props.setIsAvail(false);
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Card,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",

    }
  }
  return (
    <>
      {showModal && (<PaymentSuccessfull
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        bookingData = {bookingData}
        total = {total}
      />)}
      <div className="offcanvas offcanvas-start bg-nav text-white popins w-50" tabIndex="-1" id="paymentOffCanvas" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header py-3">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Confirm Your Booking Payment</h5>
          <button type="button" className="btn-close text-reset" id="closePyament" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
        </div>
        <div className="offcanvas-body py-0">
          <div className="row">
            <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center'>

              <div className="">
                <div className='bg-white text-dark'>
                  Your Booking
                </div>
                <table className='m-auto text-start w-100'>
                  <tbody>
                    <tr>
                      <td>Venue</td>
                      <td>-</td>
                      <td className='text-end'>{props.userBooking.title}</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>-</td>
                      <td className='text-end'>{props.bookingDate}</td>
                    </tr>
                    <tr>
                      <td>Booking Charges</td>
                      <td>-</td>
                      <td className='text-end'>₹{price}</td>
                    </tr>
                    <tr>
                      <td>GST (18%)</td>
                      <td>-</td>
                      <td className='text-end'>₹{gst}</td>
                    </tr>
                    <tr className='border-top'>
                      <td>Total</td>
                      <td>-</td>
                      <td className='text-end'>₹ {total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='bg -white text-light'>
                Enter Card Details
              </div>
              <div className='m-auto w -75'>
                <form className='text-start my-3'>
                  {/* <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  <label htmlFor="email" className="text-dark">Email Address</label>
                </div> */}
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="card" placeholder="name@example.com" />
                    <label htmlFor="card" className="text-dark">Card Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" placeholder="name@example.com" />
                    <label htmlFor="name" className="text-dark">Name on Card</label>
                  </div>
                  <div className='row'>
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="expiry" placeholder="name@example.com" />
                        <label htmlFor="expiry" className="text-dark">Expiry</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cvv" placeholder="name@example.com" />
                        <label htmlFor="cvv" className="text-dark">CVV</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className='d-flex justify-content-evenly'>
                <button className='btn border-light text-white' onClick={handleCancel}>Cancel</button>
                <button className='btn border-light text-white' onClick={handleConfirm}>Confirm Payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentConfirm