import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const VenueModal = (props) => {
  const today = new Date().toISOString().split('T')[0];
  const { user, isAuth } = useAuth();
  const [bookingDate, setBookingDate] = useState(today);
  const navigate = useNavigate();

  const handleCheckAvail = (venueDetails) => {
    console.log(isAuth);
    if (isAuth) {
      const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      console.log(Array.isArray(storedBookings));
      const selectedDate = new Date(bookingDate);
      console.log(bookingDate);
      const existingBooking = storedBookings.find((booking) => {
        const storedDate = new Date(booking.date);
        return ((storedDate.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]) && (venueDetails['object_id'] === booking.venueId));
      })
      if (existingBooking) {
        toast.error('Venue not available for the specific date!', {
          position: 'top-right',
        });
        return;
      }
      else {
        const newBooking = {
          userName: user.name,
          userEmail: user.email,
          venueId: props.venue['object_id'],
          venueName: props.venue['object-title'],
          location: props.venue.location,
          date: bookingDate
        }
        const updatedBookings = [...storedBookings, newBooking];
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        toast.success('You booking request has been sent to Admin!', {
          position: 'top-right',
        })}
    }else {
        navigate('/preloader')
      }
    }
    return (
      <>
        <ToastContainer />
        <div className={`modal bg-dark bg-opacity-50 fade ${props.showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.showModal ? 'block' : 'none' }} >
          <div className="modal-dialog modal-dialog-centered modal-lg text-light" role="document">
            <div className="modal-content shadow border-0 bg-nav">
              <div className="modal-header d-flex justify-content-between bg-nav">
                <h5 className="modal-title">{props.venue['object-title']}</h5>
                <button type="button" className="close btn btn-outline-light fw-bold" onClick={props.handleCloseModal} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row d-flex align-items-center ">
                  <div className="col col-lg-6 col-12">
                    <img className="img-fluid" src={props.venue['image-url']} alt="" />
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div className="fs-4 text-center"><FaLocationDot />
                      <p className="fs-4"> {props.venue.location}</p>
                    </div>
                    <input type="date" className="form-control" id="dueDate" min={today} value={bookingDate} onChange={(e) => { setBookingDate(e.target.value) }} />
                  </div>
                </div>
              </div>
              <div className="modal-footer bg-nav">
                <button type="button" className="btn btn-outline-light" onClick={() => { handleCheckAvail(props.venue) }}>Check Availibility!</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default VenueModal