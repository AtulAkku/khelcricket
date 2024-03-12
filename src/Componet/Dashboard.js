import React, { useState, useEffect } from 'react'
import { FaBook, FaMapLocationDot } from "react-icons/fa6";
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { useAuth } from '../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileOffCanvas from './partials/ProfileOffCanvas';

const Dashboard = () => {
  const { user, logOut, isAuth } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [storedBookings, setStoredBookings] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate('/');
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
    const storedAvatar = localStorage.getItem('selectedAvatar');
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
    }
    const bookings = (JSON.parse(localStorage.bookings)) ?? []
    setStoredBookings(bookings);
    const filteredBookings = storedBookings.filter((booking) => user.email === booking.userEmail);
    setUserBookings(filteredBookings);
  }, [navigate, isAuth]);
  return (
    <>
      <ProfileOffCanvas 
        setDashAvatar = {setSelectedAvatar}
      // selectedAvatar = {selectedAvatar}
      />
      <div className="container-fluid g-0 row">
        <div className="col-md-3 bg-light py-3 d-flex justify-content-center align- items-center vh-100">
          <div className="flex-column container-fluid">
            <div className="row py-4">
              <div className="col col-lg-5 text-center">
                <img src={selectedAvatar || '/img/avatars/defaultAvtar.png'} className="img-fluid w-75 rounded-circle" alt="Selected Avatar"  />
              </div>
              <div className="col col-lg-7 d-flex align-items-start flex-column justify-content-center my-auto">
                <h5 className="card-title">{user.name}</h5>
                <a class="text-muted" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  Change Avatar <FaEdit />
                </a>
              </div>
            </div>
            <div className="card hover shadow mb-3">
              <div className="card-body text-dark">
                <div className="row" role='button'>
                  <div className="col-md-4 text-center"><span><FaBook/></span></div>
                  <div className="col-md-8 d-flex align-items-center"><p className='h5 w-100 text-center'>My Bookings</p></div>
                </div>
              </div>
            </div>
            <div className="card hover shadow mb-3">
              <div className="card-body text-dark">
                <div className="row" role='button'>
                  <div className="col-md-4 text-center"><img src="/img/overdue.png" className='img-fluid w-75' alt='View Complaint' /></div>
                  <div className="col-md-8 d-flex align-items-center"><p className='h5 w-100 text-center'>Wishlist</p></div>
                </div>
              </div>
            </div>
            <div className="card hover shadow mb-3">
              <div className="card-body text-dark">
                <div className="row" role='button'>
                  <div className="col-md-4 text-center"><img src="/img/completed.png" className='img-fluid w-75' alt='View Complaint' /></div>
                  <div className="col-md-8 d-flex align-items-center"><p className='h5 w-100 text-center'>Help & Support</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 p-5 mt-4">

        </div>
      </div>
      {/* {showModal && <ProfilePicModal onClose={handleCloseModal} showModal={showModal} selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar} />}
      <div className="bg-white p-4">
        <div className="row mx-auto">
          <div className="col col-12 col-lg-4">
            <div className='row'>
              <div className="col col-lg-6 text-center">
                <img src={selectedAvatar || '/img/avatars/defaultAvtar.png'} className="img-fluid w-50 rounded-circle" alt="Selected Avatar" onClick={handleOpenModal} />
              </div>
              <div className="col col-lg-6 my-auto">
                <h5 className="card-title">{user.name}</h5>
                <div className="text-muted" role="button" onClick={handleOpenModal}>Change Avatar <FaEdit /></div>
              </div>

            </div>
            <table className="table table-striped my-4">
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>:</td>
                  <td>{user.phoneNo}</td>
                </tr>
                <tr>
                  <td>Pincode</td>
                  <td>:</td>
                  <td>{user.pinCode}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>:</td>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>:</td>
                  <td>{user.state}</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-center mt-2">
              <button type="button" className="btn bg-nav px-5 fs-6 text-white" onClick={handleLogOut}>Log Out</button>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="container flex-column p-5">
              <div className="h3">Booked Events</div>
              <hr />
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Venue</th>
                    <th scope="col">Booking Date</th>
                    <th scope="col" className="text-center">Location</th>
                    <th scope="col" className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(userBookings.length === 0) ?
                    <tr>
                      <td colSpan='3' className="text-center py-4">
                        <p>No bookings yet</p>
                        <p>Don't worry just navigate to <a href="/venues" className="text-decoration-none">Venues</a></p>
                      </td>
                    </tr>
                    :
                    userBookings.map((item, index) => (
                      <tr key={index}>
                        <td>{item.venueName}</td>
                        <td>{item.date}</td>
                        <td className='text-center'><a href='/' className='fs-4'><FaMapLocationDot /></a></td>
                        <td className='text-center'>
                          <div className="d-flex justify-content-around">
                            <a href='/' className='fs-4 text-success' title='Edit'><FaEdit /></a>
                            <a href='/' className='fs-4 text-info' title='View'><FaEye /></a>
                            <a href='/' className='fs-4 text-danger' title='Delete'><FaTrash /></a>
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
      </div> */}
    </>
  );
};

export default Dashboard