import React, { useState, useEffect } from 'react'
import { FaBook, FaMapLocationDot } from "react-icons/fa6";
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { useAuth } from '../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileOffCanvas from './partials/ProfileOffCanvas';
import { BiSupport } from 'react-icons/bi';
import VenueModal from './partials/VenueModal';

const Dashboard = () => {
  const { user, logOut, isAuth } = useAuth();
  const [showVenueModal, setShowVenueModal] = useState(false);
  
  const [showModal, setShowModal] = useState(false);
  const [viewBooking, setViewBooking]=useState([]);
  const [storedBookings, setStoredBookings] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();
  const handleVenueModal = (item)=>{
    setViewBooking(item);
    setShowVenueModal(true)

  }
  const closeVenueModal = () => {
    setShowVenueModal(false);
  }
  const handleLogOut = () => {
    logOut();
    navigate('/thankYouPage', {state:{message:"You have been Logged Out!", btnText :"Click here for Home", link : "/"}})
  }
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const auth = sessionStorage.getItem('isAuth')
    if (!auth) {
      navigate('/preloader');
    }
    const storedAvatar = localStorage.getItem('selectedAvatar') ?? "../../img/avatars/defaultAvtar.png";
    console.log(storedAvatar);
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
    }
    const bookings = (JSON.parse(localStorage.getItem('bookings'))) ?? [];
    setStoredBookings(bookings);
    const filteredBookings = storedBookings.filter((booking) => user.email === booking.userEmail);
    setUserBookings(filteredBookings);
  }, [navigate, isAuth]);
  return (
    <>
      <ProfileOffCanvas
        setDashAvatar={setSelectedAvatar}
      // selectedAvatar = {selectedAvatar}
      />
      {showVenueModal && (<VenueModal
        showVenueModal={showVenueModal}
        closeVenueModal={closeVenueModal}
        viewBooking = {viewBooking}
      />)}
      <div className="container-fluid g-0 row popins">
        <div className="col-md-3 bg-light p-3">
          <div className="flex -column con tainer">
            <div className="row">
              <div className="col col-lg-5 text-center">
                <img src={selectedAvatar || '/img/avatars/defaultAvtar.png'} className="img-fluid w-75 rounded-circle" alt="Selected Avatar" />
              </div>
              <div className="col col-lg-7 d-flex align-items-start flex-column justify-content-center my-auto">
                <h5 className="card-title">{user.name}</h5>
                <a className="text-muted" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  Change Avatar <FaEdit />
                </a>
              </div>
            </div>
            <div className="card hover shadow my-3 w-100">
              <div className="card-body text-dark">
                <div className="row" role='button'>
                  <div className="col-md-4 text-center"><span><FaBook /></span></div>
                  <div className="col-md-8 d-flex align-items-center"><p className='h5 w-100 text-center'>My Bookings</p></div>
                </div>
              </div>
            </div>
            <div className="card hover shadow my-3 w-100">
              <div className="card-body text-dark">
                <div className="row" role='button'>
                  <div className="col-md-4 text-center"><BiSupport /></div>
                  <div className="col-md-8 d-flex align-items-center"><p className='h5 w-100 text-center'>Help & Support</p></div>
                </div>
              </div>
            </div>
            <div className="shadow my-3 w-100 bg-nav text-light btn py-3" onClick={handleLogOut}>
              <span className='h5 text-center'>Logout</span>
            </div>
          </div>
        </div>
        <div className="col-md-9 px-5 m t-4">
          <div className=" text-light">
            <div className="h3">Booked Events</div>
            <hr />
            <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Venue</th>
                  <th scope="col">Booking Date</th>
                  <th scope="col" className="text-center">Location</th>
                  <th scope="col" className="text-center">View</th>
                </tr>
              </thead>
              <tbody>
                {(userBookings.length === 0) ?
                  <tr>
                    <td colSpan='4' className="text-center py-4">
                      <p>No bookings yet</p>
                      <p>Don't worry just navigate to <a href="/venues" className="text-decoration-none">Venues</a></p>
                    </td>
                  </tr>
                  :
                  userBookings.map((item, index) => (
                    <tr key={index}>
                      <td>{item.venueName}</td>
                      <td>{item.date}</td>
                      <td className='text-center'><a href={item.link} target="_blank" className='fs-4'><FaMapLocationDot /></a></td>
                      <td className='text-center'>
                        <div className="d-flex justify-content-around">
                          <span className='fs-4 text-warning' title='View' onClick={()=>{handleVenueModal(item)}}><FaEye /></span>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard